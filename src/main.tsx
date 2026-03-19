import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from './lib/theme-context'
import { HeroEclipseCard } from './components/ui/hero-eclipse-card'
import { TheEssence } from './components/ui/the-essence'
import { TheAlchemy } from './components/ui/the-alchemy'
import { TheScience } from './components/ui/the-science'
import { TheProduct } from './components/ui/the-product'
import { TheRitual } from './components/ui/the-ritual'
import { BrandFooter } from './components/ui/brand-footer'
import { LayeredText } from './components/ui/layered-text'
import { ReviewsSection } from './components/ui/reviews-section'

function MainContent() {
  return (
    <main className="w-full min-h-screen transition-colors duration-1000 ease-in-out bg-[#F3F0E6] text-[#1C5556]">
      <HeroEclipseCard />

      {/* Product / Concept Section */}
      <TheEssence />
      <TheAlchemy />
      <TheScience />
      <TheProduct />
      <TheRitual />

      <ReviewsSection />

      {/* Isometric Text Animation */}
      <LayeredText />

      <BrandFooter />
    </main>
  );
}

function App() {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
