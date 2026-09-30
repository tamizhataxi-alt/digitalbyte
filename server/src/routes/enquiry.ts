import { Router, type Request, type Response } from 'express';
import { Resend } from 'resend';
import { sanitizeText } from '../lib/sanitize.js';
import {
  ALLOWED_BUDGETS,
  ALLOWED_SERVICES,
  isValidEmail,
  isValidPhone,
} from '../lib/validation.js';

export const enquiryRouter = Router();

type EnquiryBody = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  service?: string;
  budget?: string;
  message?: string;
  website?: string;
};

enquiryRouter.post('/', async (req: Request, res: Response) => {
  const body = req.body as EnquiryBody;

  if (body.website && String(body.website).trim().length > 0) {
    return res.status(400).json({ error: 'Invalid submission.' });
  }

  const name = sanitizeText(String(body.name ?? ''), 120);
  const email = sanitizeText(String(body.email ?? ''), 254);
  const phone = sanitizeText(String(body.phone ?? ''), 30);
  const company = sanitizeText(String(body.company ?? ''), 120);
  const service = sanitizeText(String(body.service ?? ''), 80);
  const budget = sanitizeText(String(body.budget ?? ''), 40);
  const message = sanitizeText(String(body.message ?? ''), 5000);

  if (!name) {
    return res.status(400).json({ error: 'Name is required.' });
  }
  if (!email || !isValidEmail(email)) {
    return res.status(400).json({ error: 'A valid email is required.' });
  }
  if (!phone || !isValidPhone(phone)) {
    return res.status(400).json({ error: 'A valid phone number is required.' });
  }
  if (!message) {
    return res.status(400).json({ error: 'Message is required.' });
  }
  if (!ALLOWED_SERVICES.includes(service)) {
    return res.status(400).json({ error: 'Invalid service selection.' });
  }
  if (!ALLOWED_BUDGETS.includes(budget)) {
    return res.status(400).json({ error: 'Invalid budget selection.' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;

  if (!apiKey || !contactEmail) {
    console.error('Missing RESEND_API_KEY or CONTACT_EMAIL');
    return res.status(503).json({
      error: 'Enquiry service is not configured. Please try again later.',
    });
  }

  const resend = new Resend(apiKey);
  const subject = `New Website Enquiry — ${service}`;

  const text = `New enquiry received from Digital Byte website.

Name:
${name}

Email:
${email}

Phone:
${phone}

Company:
${company || '—'}

Service:
${service}

Budget:
${budget}

Message:
${message}`;

  try {
    const from =
      process.env.RESEND_FROM_EMAIL?.trim() ||
      'Digital Byte Website <onboarding@resend.dev>';

    const { error } = await resend.emails.send({
      from,
      to: [contactEmail],
      replyTo: email,
      subject,
      text,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(502).json({
        error: 'We could not send your enquiry. Please try again shortly.',
      });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Enquiry send failed:', err);
    return res.status(500).json({
      error: 'We could not send your enquiry. Please try again shortly.',
    });
  }
});
