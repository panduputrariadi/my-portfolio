"use client";
import Footer from '@/Components/Footer/Footer';
import Header from '@/Components/Header/Header'
import { Hero } from '@/Components/Hero/Hero';
import HireMeCircle from '@/Components/Moleculs/HireMeCircle';
import React from 'react'

const PortfoilioHome = () => {
  return (
    <main className="bg-light w-full min-h-screen">
       <Header />
       <Hero />
       <HireMeCircle />
       <Footer />
    </main>
  )
}

export default PortfoilioHome