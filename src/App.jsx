import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import CategoryList from './component/CategoryList'
import FeatureSectionFruit from './component/FeatureSectionFruit'
import BreakfastDairy from './component/BreakfastDairy'
import Banner from './component/Banner'
import Blog from './component/Blog'
import Footer from './Footer'
import FooterBottom from './component/FooterBottom'
function App() {
 
  return (
    <>
  <Navbar/>
  <Hero/>
  <div>
      <h1 className="text-3xl font-bold text-center mt-6 font-serif">Categories</h1>
      <CategoryList />
  </div>
  <FeatureSectionFruit/>
  <BreakfastDairy/>
  <Banner/>
  <Blog/>
  <Footer/>
  <FooterBottom/>
    </>
    
  )
}


export default App
