import { Header } from '../../components/header';
import { AboutHero } from '../../components/abouthero';
import { AboutMe } from '../../components/aboutme';
import { FinalCTA } from '../../components/finalcta';
import { Footer } from '../../components/footer';

export default function PortfolioArchivePage() {
  return (
    <main className="bg-[#F5F2ED] min-h-screen">
      <Header />
      <AboutHero
      />
      <div className="border-t border-[#1a1a1a]/5">
        <AboutMe />
      </div>
        <FinalCTA/>
        <Footer/>
    </main>
  );
}