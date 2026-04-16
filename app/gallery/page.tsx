import { Header } from '../../components/header';
import { GalleryHero } from '../../components/galleryhero';
import { PortfolioPreview } from '../../components/portfoliopreview';
import { FinalCTA } from '../../components/finalcta';
import { Footer } from '../../components/footer';

export default function PortfolioArchivePage() {
  return (
    <main className="bg-[#F5F2ED] min-h-screen">
      <Header />
      <GalleryHero
      />
      <div className="border-t border-[#1a1a1a]/5">
        <PortfolioPreview />
      </div>
        <FinalCTA/>
        <Footer/>
    </main>
  );
}