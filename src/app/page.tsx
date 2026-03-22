'use client'
import { useState } from 'react'
import Header, { LangContext } from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import VisionMission from '@/components/sections/VisionMission'
import ServicesSection from '@/components/sections/ServicesSection'
import JourneySection from '@/components/sections/JourneySection'
import DifferentiatorsSection from '@/components/sections/DifferentiatorsSection'
import TeamSection from '@/components/sections/TeamSection'
import BlogSection from '@/components/sections/BlogSection'
import CtaBanner from '@/components/sections/CtaBanner'
import ContactSection from '@/components/sections/ContactSection'
import { Preloader, ScrollProgress, StickyCtaBar, FloatButton, WaveDivider, AosInit } from '@/components/ui/Utilities'

export default function Home() {
  const [lang, setLang] = useState('vi')

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <AosInit />
      <Preloader />
      <ScrollProgress />
      <Header />

      <HeroSection />
      <WaveDivider fill="var(--pale)" />

      <AboutSection />
      <VisionMission />

      <ServicesSection />
      <WaveDivider fill="var(--pale)" />

      <JourneySection />
      <WaveDivider fill="var(--white)" />

      <DifferentiatorsSection />
      <WaveDivider fill="var(--pale)" />

      <TeamSection />
      <WaveDivider fill="var(--white)" />

      <BlogSection />

      <CtaBanner />

      <ContactSection />

      <Footer />

      <StickyCtaBar />
      <FloatButton />
    </LangContext.Provider>
  )
}
