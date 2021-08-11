import React, {useState} from 'react'
import Footer from '../components/Footer copy';
import Hero from '../components/Hero'
import Info from '../components/Info'
import { homeObjOne, homeObjTwo} from '../components/Info/Data';
import Navbar from '../components/Navbar'
import Services from '../components/Services';
import Sidebar from '../components/Side_Bar'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <Hero />
      <Info {...homeObjOne}/>
      <Info {...homeObjTwo}/>
      <Services />
      <Footer />
    </>
  )
}

export default Home
