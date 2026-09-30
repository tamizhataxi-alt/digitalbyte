import { useRef, useState, type FormEvent } from 'react';
import { Button } from '../ui/Button';
import { FormField } from './FormField';
import { isValidEmail, isValidPhone } from '../../lib/validation';

const services = [
  'Web Development',
  'Mobile App Development',
  'Cloud & DevOps',
  'AI / ML',
  'API / Backend Development',
  'Other',
];

const budgets = [
  'Under ₹1 Lakh',
  '₹1–3 Lakh',
  '₹3–5 Lakh',
  '₹5 Lakh+',
  'Not sure yet',
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
  website: string;
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  company: '',
  service: services[0],
  budget: budgets[4],
  message: '',
  website: '',
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle',
  );
  const [submitError, setSubmitError] = useState('');
  const lastSubmitRef = useRef(0);

  const validate = (): boolean => {
    const next: FieldErrors = {};
    if (!form.name.trim()) next.name = 'Please enter your name.';
    if (!form.email.trim()) next.email = 'Please enter your email.';
    else if (!isValidEmail(form.email)) next.email = 'Please enter a valid email address.';
    if (!form.phone.trim()) next.phone = 'Please enter your phone number.';
    else if (!isValidPhone(form.phone)) next.phone = 'Please enter a valid phone number.';
    if (!form.message.trim()) next.message = 'Please tell us about your project.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === 'loading') return;

    const now = Date.now();
    if (now - lastSubmitRef.current < 3000) {
      setSubmitError('Please wait a moment before submitting again.');
      return;
    }

    if (!validate()) return;

    setStatus('loading');
    setSubmitError('');

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          company: form.company.trim(),
          service: form.service,
          budget: form.budget,
          message: form.message.trim(),
          website: form.website,
        }),
      });

      const data = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        throw new Error(data.error ?? 'Something went wrong. Please try again.');
      }

      lastSubmitRef.current = Date.now();
      setStatus('success');
      setForm(initialState);
    } catch (err) {
      setStatus('error');
      setSubmitError(
        err instanceof Error ? err.message : 'Unable to send your enquiry. Please try again.',
      );
    }
  };

  const inputClass = (field: keyof FormState) =>
    `w-full rounded-sm border bg-surface px-4 py-3 text-sm transition-colors focus:border-primary ${
      errors[field] ? 'border-red-500' : 'border-border'
    }`;

  if (status === 'success') {
    return (
      <div
        className="rounded-md border border-border bg-surface p-8 md:p-10"
        role="status"
        aria-live="polite"
      >
        <h2 className="text-2xl font-semibold text-primary">Thanks for reaching out.</h2>
        <p className="mt-4 text-muted">
          Your enquiry has been sent successfully. We&apos;ll get back to you soon.
        </p>
        <Button
          type="button"
          variant="secondary"
          className="mt-8"
          onClick={() => setStatus('idle')}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-md border border-border bg-surface p-8 md:p-10"
      noValidate
    >
      <div className="grid gap-6">
        <FormField id="name" label="Name" required error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={inputClass('name')}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
        </FormField>

        <FormField id="email" label="Email" required error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={inputClass('email')}
            aria-invalid={!!errors.email}
          />
        </FormField>

        <FormField id="phone" label="Phone" required error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className={inputClass('phone')}
            aria-invalid={!!errors.phone}
          />
        </FormField>

        <FormField id="company" label="Company">
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            className={inputClass('company')}
          />
        </FormField>

        <FormField id="service" label="Service required">
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
            className={inputClass('service')}
          >
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </FormField>

        <FormField
          id="budget"
          label="Budget range"
          hint="Indicative only — not fixed pricing packages."
        >
          <select
            id="budget"
            name="budget"
            value={form.budget}
            onChange={(e) => setForm({ ...form, budget: e.target.value })}
            className={inputClass('budget')}
          >
            {budgets.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </FormField>

        <FormField id="message" label="Message" required error={errors.message}>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className={`${inputClass('message')} resize-y min-h-[120px]`}
            aria-invalid={!!errors.message}
          />
        </FormField>

        <div className="hidden" aria-hidden>
          <label htmlFor="website">Website</label>
          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={form.website}
            onChange={(e) => setForm({ ...form, website: e.target.value })}
          />
        </div>
      </div>

      {submitError && (
        <p className="mt-6 text-sm text-red-600" role="alert">
          {submitError}
        </p>
      )}

      <Button
        type="submit"
        variant="primary"
        className="mt-8 w-full md:w-auto"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Sending…' : 'Submit enquiry'}
      </Button>
    </form>
  );
}
