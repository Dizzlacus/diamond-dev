export interface Review {
  quote: string;
  name: string;
  role: string;
  rating: number;
}

export interface Service {
  name: string;
  description: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  summary: string;
  includesLabel: string;
  includes: string[];
  delivery?: string;
  popular?: boolean;
}

export interface CarePlan {
  id: string;
  name: string;
  price: string;
  summary?: string;
  includesLabel: string;
  includes: string[];
}

export const site = {
  name: 'Diamond Web Dev',
  legalName: 'Diamond Web Dev',
  url: 'https://diamond-dev.co.uk',
  email: 'mikeydiamond@hotmail.co.uk',
  description:
    'Bespoke, hand-coded websites built for performance, flexibility, and growth.',
  // Verify this reflects how the owner wants to be named publicly before shipping.
  founderName: 'Michael Diamond',
  addressLocality: 'Newcastle',
  addressRegion: 'Tyne and Wear',
  addressCountry: 'GB',
  areaServed: 'United Kingdom',
  priceRange: '££',
  // Add social profile URLs here as they become available (LinkedIn, X, GitHub, etc.).
  sameAs: [] as string[],
  ogImage: '/img/og-image.png',
  locale: 'en_GB',
  gaMeasurementId: 'G-JB0D9L5N8T',
} as const;

export const services: Service[] = [
  {
    name: 'Custom Web Development',
    description:
      'Tailored web applications built with modern technologies to meet your unique business needs.',
  },
  {
    name: 'Responsive Design',
    description:
      'Beautiful, mobile-first designs that provide seamless experiences across devices and screen sizes.',
  },
  {
    name: 'Content Management',
    description:
      'Easy-to-update sites with a clean editing experience, so you can manage content confidently without touching code.',
  },
  {
    name: 'Performance Optimization',
    description:
      'Fast websites optimized for speed, SEO, and a polished experience from the first visit.',
  },
  {
    name: 'UI/UX Design',
    description:
      'Intuitive interfaces and engaging user experiences that help visitors take action.',
  },
  {
    name: 'SEO & Marketing',
    description:
      'Strategic optimization to boost visibility and give your site a stronger foundation for growth.',
  },
];

export const plans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter Website',
    price: '£795',
    summary: 'Perfect for sole traders and new businesses.',
    includesLabel: 'Includes',
    includes: [
      'Up to 5 pages',
      'Mobile responsive',
      'Contact form',
      'Basic SEO',
      'Google Maps',
      'Social links',
      'Fast hosting setup',
      'Domain connection',
      '2 rounds of revisions',
    ],
    delivery: '3–5 business days',
  },
  {
    id: 'business',
    name: 'Business Website',
    price: '£1,495',
    summary: 'For established local businesses.',
    includesLabel: 'Includes everything in Starter, plus',
    includes: [
      'Up to 10 pages',
      'Custom design',
      'Image optimisation',
      'Testimonials',
      'FAQ',
      'Gallery',
      'Local SEO setup',
      'Schema markup',
      'Analytics',
      'Cookie banner',
      'Performance optimisation',
    ],
    delivery: '1–2 weeks',
    popular: true,
  },
  {
    id: 'premium',
    name: 'Premium Website',
    price: '£2,495+',
    summary: 'For businesses that want something unique.',
    includesLabel: 'Includes',
    includes: [
      'Fully bespoke design',
      'Unlimited pages (within agreed scope)',
      'Booking integrations',
      'Blog or CMS (if required)',
      'Custom animations',
      'Advanced SEO setup',
      'Conversion optimisation',
      'Priority support',
    ],
  },
];

export const carePlans: CarePlan[] = [
  {
    id: 'essential',
    name: 'Essential',
    price: '£49/month',
    includesLabel: 'Includes',
    includes: [
      'Hosting',
      'Domain management',
      'SSL',
      'Monitoring',
      'Monthly backups of the source code',
      'Up to 15 minutes of content updates',
    ],
  },
  {
    id: 'growth',
    name: 'Growth',
    price: '£149/month',
    includesLabel: 'Everything in Essential plus',
    includes: [
      '1 hour of content/design changes',
      'Quarterly SEO review',
      'Performance checks',
      'Analytics summary',
      'Priority email support',
    ],
  },
  {
    id: 'digital-partner',
    name: 'Digital Partner',
    price: '£499+/month',
    summary: 'For businesses that want ongoing improvements.',
    includesLabel: 'Includes',
    includes: [
      '4 hours development each month',
      'New landing pages',
      'UX improvements',
      'Technical SEO',
      'Conversion optimisation',
      'Integrations',
      'Priority turnaround',
    ],
  },
];

export const reviews: Review[] = [
  {
    quote:
      '"The whole process felt calm and professional. The website looks premium, loads fast, and is much easier for us to update."',
    name: 'Sarah Mitchell',
    role: 'Studio Founder',
    rating: 5,
  },
  {
    quote:
      '"Clear communication from start to finish. Every decision had a reason, and the final site feels exactly right for our brand."',
    name: 'James Carter',
    role: 'Independent Consultant',
    rating: 5,
  },
  {
    quote:
      '"We needed a custom site that looked sharp but was simple to manage. That is exactly what we got."',
    name: 'Emma Roberts',
    role: 'Small Business Owner',
    rating: 5,
  },
  {
    quote:
      '"The site feels faster, cleaner, and more trustworthy. We noticed better enquiries almost immediately after launch."',
    name: 'Daniel Hughes',
    role: 'Service Business Director',
    rating: 5,
  },
  {
    quote:
      '"A brilliant experience. The design is polished, the admin area is straightforward, and support after launch has been excellent."',
    name: 'Laura Bennett',
    role: 'Creative Director',
    rating: 5,
  },
  {
    quote:
      '"The project was handled with care and attention to detail. Our new site finally reflects the quality of our work."',
    name: 'Michael Turner',
    role: 'Founder',
    rating: 5,
  },
];
