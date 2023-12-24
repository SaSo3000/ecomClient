import React from 'react'
import Navbar from '../components/Navbar'
import Announcements from '../components/Announcements'
import Slides from '../components/Slides'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div>
      <Announcements />
      <Navbar />
      <Slides />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home
