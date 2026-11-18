import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Compass } from 'lucide-react';
import { ScrollToTop } from './components/layout/ScrollToTop';

// Lazy-loaded routes for performance optimization
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Destinations = lazy(() => import('./pages/Destinations').then(m => ({ default: m.Destinations })));
const DestinationDetail = lazy(() => import('./pages/DestinationDetail').then(m => ({ default: m.DestinationDetail })));
const Packages = lazy(() => import('./pages/Packages').then(m => ({ default: m.Packages })));
const PackageDetail = lazy(() => import('./pages/PackageDetail').then(m => ({ default: m.PackageDetail })));
const Services = lazy(() => import('./pages/Services').then(m => ({ default: m.Services })));
const Gallery = lazy(() => import('./pages/Gallery').then(m => ({ default: m.Gallery })));
const Blog = lazy(() => import('./pages/Blog').then(m => ({ default: m.Blog })));
const BlogArticle = lazy(() => import('./pages/BlogArticle').then(m => ({ default: m.BlogArticle })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy').then(m => ({ default: m.PrivacyPolicy })));
const Terms = lazy(() => import('./pages/Terms').then(m => ({ default: m.Terms })));
const NotFound = lazy(() => import('./pages/NotFound').then(m => ({ default: m.NotFound })));

// Loading spinner fallback
const PageLoader = () => (
  <div className="min-h-screen bg-ivory flex flex-col items-center justify-center text-navy p-4">
    <Compass className="w-12 h-12 text-gold animate-spin-slow mb-4" />
    <span className="font-serif text-lg tracking-widest uppercase font-bold text-navy">
      Wanderlux
    </span>
    <span className="text-[10px] tracking-[0.3em] uppercase text-gold-dark font-medium mt-1">
      Journeys Crafted Beyond the Ordinary
    </span>
  </div>
);

export function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/destinations/:slug" element={<DestinationDetail />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/packages/:slug" element={<PackageDetail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogArticle />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </HelmetProvider>
  );
}

export default App;
