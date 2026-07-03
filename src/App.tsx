import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy-load below-the-fold components to reduce initial JS bundle
const AboutProduct = lazy(() => import('./components/AboutProduct'));
const Technologies = lazy(() => import('./components/Technologies'));
const FeatureCalling = lazy(() => import('./components/FeatureCalling'));
const FeatureMessages = lazy(() => import('./components/FeatureMessages'));
const MainFeatures = lazy(() => import('./components/MainFeatures'));
const Reviews = lazy(() => import('./components/Reviews'));
const Pricing = lazy(() => import('./components/Pricing'));
const FAQ = lazy(() => import('./components/FAQ'));
const Newsletter = lazy(() => import('./components/Newsletter'));
const Footer = lazy(() => import('./components/Footer'));
const ChatWidget = lazy(() => import('./components/ChatWidget'));

function SectionFallback() {
  return <div className="h-96 bg-background" />;
}

function App() {
  return (
    <div className="overflow-hidden bg-background dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <Navbar />
      <Hero />
      <Suspense fallback={<SectionFallback />}>
        <AboutProduct />
        <Technologies />
        <FeatureCalling />
        <FeatureMessages />
        <MainFeatures />
        <Reviews />
        <Pricing />
        <FAQ />
        <Newsletter />
        <Footer />
        <ChatWidget />
      </Suspense>
    </div>
  );
}

export default App;
