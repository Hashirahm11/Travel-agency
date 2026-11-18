export interface FAQItem {
  question: string;
  answer: string;
  category: 'Planning' | 'Bookings' | 'Visas' | 'Safety';
}

export const generalFAQs: FAQItem[] = [
  {
    category: 'Planning',
    question: 'How far in advance should we begin planning our luxury journey?',
    answer: 'For high-demand destinations and peak travel seasons (such as cherry blossom season in Japan, summer in the Greek Islands, or festive season in the Maldives), we recommend initiating your itinerary 4 to 6 months in advance. This ensures access to the finest boutique suites, premier guides, and preferred airline cabin seating.'
  },
  {
    category: 'Bookings',
    question: 'Are quotes and itineraries completely customizable?',
    answer: 'Yes. Every itinerary featured on our website serves as a refined foundation. Our travel advisors customize daily pacing, room types, private excursions, and dietary preferences to match your exact wishes.'
  },
  {
    category: 'Visas',
    question: 'Do you guarantee visa approvals for international destinations?',
    answer: 'No travel agency or third party can guarantee visa approvals, as the sovereign immigration authorities of each respective government make all final determinations. We provide meticulous document verification, confirmed hotel and flight reservation certificates, and step-by-step guidance to ensure your application meets all regulatory standards.'
  },
  {
    category: 'Bookings',
    question: 'What are the payment terms and schedule for bespoke travel packages?',
    answer: 'Typically, a deposit is required upon itinerary confirmation to secure non-refundable hotel allocations, domestic flights, or private boat charters, with the balance payable prior to departure. Exact terms depend on supplier policies and are clearly documented in your formal proposal.'
  },
  {
    category: 'Safety',
    question: 'What assistance is provided if flight delays or unexpected changes occur?',
    answer: 'Our dedicated travel support team monitors your journey and maintains direct communication with your local chauffeurs and hotel concierges. In the event of flight schedule changes or weather cancellations, we coordinate adjustments immediately.'
  }
];
