import { Header } from '../components/header';
import { Hero } from '../components/hero';
import { NarrativeSlider } from '../components/narrativeslider';
import { PersonalNarrative } from '../components/personalnarrative';
import { ServicesPortfolio } from '../components/servicesportfolio';
import { VisualCollage } from '../components/visualcollage';
import { Footer } from '../components/footer';
import { Connect } from '../components/connect';
import { FinalCTA } from '../components/finalcta';
import { Gallery } from '../components/gallery';

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
          <ServicesPortfolio />
          <Gallery/>
          {/*<NarrativeSlider />*/}
          

        <Connect/>
        <FinalCTA/>
        </div>
      </article>
      {/* Contact & Closing */}
      <Footer />

      {/*< FullPortfolioGrid/> */}
      {/*< PortfolioPreview/>*/}
    </main>
  );
}