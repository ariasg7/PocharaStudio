import { Header } from '../../components/header';
import { GalleryHero } from '../../components/galleryhero';
import { FullPortfolioGrid } from '../../components/fullportfoliogrid';
import { PortfolioPreview } from '../../components/portfoliopreview';

export default function PortfolioArchivePage() {
  return (
    <main className="bg-[#F5F2ED] min-h-screen">
      <Header />
      <GalleryHero
      />
      {/*<section className="py-20 md:py-32 overflow-x-hidden">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12">
          <FullPortfolioGrid /> 
        </div>
      </section>*/}
      <div className="border-t border-[#1a1a1a]/5">
        <PortfolioPreview />
      </div>
      <footer className="py-24 bg-[#F5F2ED] text-center">
        <div className="h-px w-16 bg-[#1a1a1a]/10 mx-auto mb-8" />
        <p className="text-[9px] tracking-[0.5em] text-[#1a1a1a]/40 uppercase font-light">
          Pochara Studio © 2026 — Documenting Life
        </p>
      </footer>
    </main>
  );
}