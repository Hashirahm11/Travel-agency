import React, { useState, useMemo } from 'react';
import { Eye, Compass, Camera } from 'lucide-react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { SEO } from '../components/ui/SEO';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { SafeImage } from '../components/ui/SafeImage';
import { Lightbox, type LightboxImage } from '../components/ui/Lightbox';

interface GalleryPhoto extends LightboxImage {
  id: string;
  category: 'Mountains' | 'Coastal' | 'Cultural' | 'Cities';
}

const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'g-1',
    src: '/images/gallery/gallery-matterhorn.jpg',
    alt: 'Matterhorn Peak, Swiss Alps',
    caption: 'The majestic Matterhorn pyramid soaring over Zermatt under crisp alpine skies.',
    location: 'Zermatt, Swiss Alps',
    category: 'Mountains'
  },
  {
    id: 'g-2',
    src: '/images/gallery/gallery-attabad.jpg',
    alt: 'Attabad Lake, Hunza Valley',
    caption: 'Turquoise glacial waters framed by sheer Karakoram mountain walls.',
    location: 'Hunza Valley, Pakistan',
    category: 'Mountains'
  },
  {
    id: 'g-3',
    src: '/images/gallery/gallery-santorini.jpg',
    alt: 'Oia cliffside village, Santorini',
    caption: 'Whitewashed Cycladic architecture and blue domes overlooking the volcanic caldera.',
    location: 'Santorini, Greece',
    category: 'Coastal'
  },
  {
    id: 'g-4',
    src: '/images/destinations/maldives.jpg',
    alt: 'Overwater wooden villas, Maldives',
    caption: 'Private overwater pavilions suspended above translucent Indian Ocean lagoons.',
    location: 'North Malé Atoll, Maldives',
    category: 'Coastal'
  },
  {
    id: 'g-5',
    src: '/images/gallery/gallery-paris.jpg',
    alt: 'Paris skyline with Eiffel Tower',
    caption: 'Sunset glowing across the classic slate rooftops and the Eiffel Tower along the Seine.',
    location: 'Paris, France',
    category: 'Cities'
  },
  {
    id: 'g-6',
    src: '/images/gallery/gallery-tokyo.jpg',
    alt: 'Tokyo illuminated skyline',
    caption: 'The vibrant Tokyo metropolis and illuminated Tokyo Tower at twilight.',
    location: 'Tokyo, Japan',
    category: 'Cities'
  },
  {
    id: 'g-7',
    src: '/images/gallery/gallery-rome.jpg',
    alt: 'The Colosseum at dusk, Rome',
    caption: 'The monumental Flavian Amphitheatre illuminated at golden hour.',
    location: 'Rome, Italy',
    category: 'Cultural'
  },
  {
    id: 'g-8',
    src: '/images/gallery/gallery-bali.jpg',
    alt: 'Tegalalang rice terraces, Bali',
    caption: 'Century-old stepped emerald rice paddies nestled in Ubud jungle mist.',
    location: 'Ubud, Bali',
    category: 'Cultural'
  },
  {
    id: 'g-9',
    src: '/images/gallery/gallery-capetown.jpg',
    alt: 'Table Mountain and Atlantic seaboard',
    caption: 'The flat-topped sandstone ramparts of Table Mountain rising above the coastline.',
    location: 'Cape Town, South Africa',
    category: 'Coastal'
  },
  {
    id: 'g-10',
    src: '/images/destinations/skardu.jpg',
    alt: 'Shangrila Resort, Skardu',
    caption: 'Lower Kachura Lake pagoda chalets surrounded by dramatic Karakoram rock faces.',
    location: 'Skardu, Pakistan',
    category: 'Mountains'
  },
  {
    id: 'g-11',
    src: '/images/destinations/istanbul.jpg',
    alt: 'Hagia Sophia Grand Mosque',
    caption: 'Byzantine domes and Ottoman minarets overlooking historical Istanbul.',
    location: 'Istanbul, Turkey',
    category: 'Cultural'
  },
  {
    id: 'g-12',
    src: '/images/destinations/dubai.jpg',
    alt: 'Downtown Dubai and Burj Khalifa',
    caption: 'Futuristic architectural skyline rising dramatically from the Arabian desert.',
    location: 'Dubai, UAE',
    category: 'Cities'
  }
];

const CATEGORY_TABS = ['All', 'Mountains', 'Coastal', 'Cultural', 'Cities'] as const;

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<typeof CATEGORY_TABS[number]>('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredPhotos = useMemo(() => {
    if (selectedCategory === 'All') return GALLERY_PHOTOS;
    return GALLERY_PHOTOS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-ivory text-slate-800">
      <SEO
        title="Travel Inspiration Gallery | Authentic Destination Photography"
        description="Immerse yourself in authentic real-world travel photography from our hand-curated destinations across the Swiss Alps, Mediterranean, Maldives, and northern Pakistan."
        canonical="/gallery"
      />

      <Header transparentOnHero={false} />

      {/* Hero Header */}
      <section className="pt-32 pb-16 bg-navy text-white text-center relative overflow-hidden">
        <SafeImage
          src="/images/gallery/gallery-matterhorn.jpg"
          alt="The Matterhorn reflected in a mountain lake"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          containerClassName="absolute inset-0"
          loading="eager"
        />
        <div className="absolute inset-0 bg-linear-to-t from-navy via-navy/75 to-navy/60" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[{ label: 'Gallery' }]}
            light
            className="justify-center mb-6"
          />

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 text-gold-light text-xs font-semibold uppercase tracking-widest border border-gold/30 mb-4">
            <Camera className="w-3.5 h-3.5" />
            <span>Curated Photography</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Travel Inspiration Gallery
          </h1>

          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Authentic, verified real-world travel photography capturing the light, geology, and architecture of extraordinary destinations.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-6 bg-white border-b border-slate-200 sticky top-17 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORY_TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedCategory(tab)}
                className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === tab
                    ? 'bg-navy text-gold shadow-md'
                    : 'bg-ivory text-slate-600 hover:bg-slate-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredPhotos.map((photo, idx) => (
              <div
                key={photo.id}
                onClick={() => openLightbox(idx)}
                className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 bg-white"
              >
                <SafeImage
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-linear-to-t from-navy/90 via-navy/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold-light mb-1">
                    <Compass className="w-3.5 h-3.5" />
                    <span>{photo.location}</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold leading-snug">
                    {photo.caption}
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-xs text-slate-300">
                    <Eye className="w-3.5 h-3.5 text-gold" />
                    <span>Click to view high-res</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Modal Lightbox */}
      <Lightbox
        images={filteredPhotos}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </div>
  );
};
