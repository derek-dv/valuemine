import React from 'react'
import Header from '../components/Header/Header'
import HeroSection from '../components/Hero/Hero'
import DashboardShowcase from '../components/DashboardShowcase/DashboardShowcase'
import ProductReview from '../components/ProductReview/ProductReview'
import Partner from '../components/PartnerSection/Partner'
import Partners from '../components/PartneredCompanies/Partners'
import MarketResearch from '../components/MarketResearch'
import BlogPosts from '../components/Blog/BlogPosts'
import Footer from '../components/Footer/Footer'


function HomePage() {
  return (
    <>
    <Header />
    <HeroSection />
    <DashboardShowcase />
    <ProductReview />
    <Partner />
    {/* <Testimonial /> */}
    <Partners />
    <MarketResearch />
    < BlogPosts sliderBlogPost={true} />
    <Footer />
    
    </>
  )
}

export default HomePage