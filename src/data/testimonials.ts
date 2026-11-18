export interface TestimonialItem {
  id: string;
  isPlaceholder: boolean;
  quote: string;
  clientContext: string;
  destination: string;
  date: string;
}

export const testimonialsData: {
  disclaimer: string;
  items: TestimonialItem[];
} = {
  disclaimer: 'Illustrative Design Previews — Genuine client reviews and verified feedback will be published here upon client authorization and completion of inaugural bespoke journeys.',
  items: [
    {
      id: 'preview-1',
      isPlaceholder: true,
      quote: 'The seamless coordination across Swiss railways and private Zermatt chalets demonstrated exceptional attention to personal comfort and timing.',
      clientContext: 'Sample Review Format — Private Honeymoon Client',
      destination: 'Swiss Alps & Zermatt',
      date: 'Illustrative Preview'
    },
    {
      id: 'preview-2',
      isPlaceholder: true,
      quote: 'Navigating the Karakoram Highway with an expert local driver and certified heritage guide made our Hunza journey effortless and deeply enriching.',
      clientContext: 'Sample Review Format — Family Expedition Client',
      destination: 'Hunza Valley & Attabad Lake',
      date: 'Illustrative Preview'
    },
    {
      id: 'preview-3',
      isPlaceholder: true,
      quote: 'From seaplane arrival to private sandbank dining, every single detail in the Maldives was handled with extraordinary precision.',
      clientContext: 'Sample Review Format — Anniversary Luxury Couple',
      destination: 'Maldives Overwater Sanctuary',
      date: 'Illustrative Preview'
    }
  ]
};
