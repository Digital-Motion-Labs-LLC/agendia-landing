import { useTranslations } from 'next-intl';
import { Navbar } from '@/components/organisms/Navbar';
import { Footer } from '@/components/organisms/Footer';
import { Hero } from '@/components/organisms/Hero';
import { Features } from '@/components/organisms/Features';
import { AgendiaLite } from '@/components/organisms/AgendiaLite';
import { UseCases } from '@/components/organisms/UseCases';
import { Pricing } from '@/components/organisms/Pricing';

export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <>
      <Navbar />
      <Hero />
      <div className="w-full h-px bg-border-light"></div>
      <Features />
      <AgendiaLite />
      <UseCases />
      <Pricing />
      <Footer />
    </>
  );
}
