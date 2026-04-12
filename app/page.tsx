import { Header } from '../components/header';
import { Hero } from '../components/hero';
import { NarrativeSlider } from '../components/narrativeslider';
import { PersonalNarrative } from '../components/personalnarrative';
import { VisualCollage } from '../components/visualcollage';
import { Footer } from '../components/footer';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#1a1a1a]">
      {/* Navigation Layer */}
      <Header />

      {/* Main Content Sections */}
      <article>
        <Hero />
        
        <div className="relative z-10">
          <PersonalNarrative />
          <NarrativeSlider />
          <VisualCollage />
        </div>
      </article>

      {/* Contact & Closing */}
      <Footer />
    </main>
  );
}