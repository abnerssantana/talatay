import Footer from "@/components/footer";
import LeftPanel from "@/components/left-panel";
import AnimalPattern from "@/components/PatternBackground";
import JewelryCatalog from "@/components/jewelry-catalog";

export default function JewelryPage() {
  return (
    <main className="relative flex flex-col items-center flex-1 w-full h-full bg-background-light dark:bg-background-dark">
      <AnimalPattern />
      <div className="container relative z-20 flex flex-col w-full h-full px-6 gap:6 xl:gap-10 xl:flex-row">
        {/* Left Panel */}
        <LeftPanel />
        {/* Catalog */}
        <JewelryCatalog />
        {/* Footer for Mobile */}
        <div className="flex pb-6 xl:hidden">
          <Footer />
        </div>
      </div>
    </main>
  );
}