import { PricingTier } from '../types';

export const pricingTiers: PricingTier[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: 4.99,
    period: 'month',
    features: [
      'Screenshot text recognition',
      'Basic voice options',
      'Up to 50 screenshots per day',
      'Email support'
    ],
    cta: 'Get Started'
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 9.99,
    period: 'month',
    features: [
      'Advanced text recognition',
      'Multiple voice options',
      'Unlimited screenshots',
      'Custom hotkeys',
      'Priority support'
    ],
    popular: true,
    cta: 'Subscribe Now'
  },
  {
    id: 'ultimate',
    name: 'Ultimate',
    price: 19.99,
    period: 'month',
    features: [
      'Premium text recognition',
      'All voice options',
      'Unlimited screenshots',
      'Custom hotkeys',
      'Translation support',
      'Dedicated support',
      'Early access to new features'
    ],
    cta: 'Go Ultimate'
  }
];