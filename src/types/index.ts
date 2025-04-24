export interface PricingTier {
  id: string;
  name: string;
  price: number;
  period: string;
  features: string[];
  popular?: boolean;
  cta: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Faq {
  id: string;
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface GameExample {
  id: string;
  name: string;
  image: string;
  description: string;
}