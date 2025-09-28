// pages/index.tsx (Updated)
import Head from 'next/head';
import { Header } from '@/components/Layout/Header';
import { Footer } from '@/components/Layout/Footer';
import { Hero } from '@/components/Sections/Hero';
import { Features } from '@/components/Sections/Features';
import { Workflow } from '@/components/Sections/Workflow';
import { CTA } from '@/components/Sections/CTA';

export default function Home() {
  return (
    <>
      <Head>
        <title>Teilor - Client Management for Professional Tailors</title>
        <meta name="description" content="Streamline your tailoring business with intuitive client management, measurement tracking, and business insights." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <Features />
        <Workflow />
        <CTA />
        <Footer />
      </div>
    </>
  );
}