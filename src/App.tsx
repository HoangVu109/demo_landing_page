import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutProduct from './components/AboutProduct';
import Technologies from './components/Technologies';
import FeatureCalling from './components/FeatureCalling';
import FeatureMessages from './components/FeatureMessages';
import MainFeatures from './components/MainFeatures';
import Reviews from './components/Reviews';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
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
    </div>
  );
}

export default App;
