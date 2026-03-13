import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Solution from './components/Solution';
import HowItWorks from './components/HowItWorks';
import Trust from './components/Trust';
import CtaBand from './components/CtaBand';
import Faq from './components/Faq';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <PainPoints />
      <Solution />
      <HowItWorks />
      <CtaBand
        headline="Ready to stop losing leads?"
        supportingText="See how RemodelFirst works for your remodeling business."
      />
      <Trust />
      <Faq />
      <CtaBand
        headline="Your leads aren't waiting. Your follow-up shouldn't either."
        supportingText="Free demo. No contracts. Set up in days."
      />
      <Footer />
    </>
  );
}
