import {
  Globe,
  Smartphone,
  Cloud,
  Brain,
  Layers,
  Server,
  type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  globe: Globe,
  smartphone: Smartphone,
  cloud: Cloud,
  brain: Brain,
  layers: Layers,
  server: Server,
};

export function getServiceIcon(name: string): LucideIcon {
  return iconMap[name] ?? Layers;
}
