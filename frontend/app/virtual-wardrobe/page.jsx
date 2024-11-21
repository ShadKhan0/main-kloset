import React from 'react'
import { Navbar } from 'components/layout/navbar';
import {Vdrobe2} from 'components/V-drobe2/three-items';
import {Vdrobe3} from 'components/V-drobe3/three-items';
import {Vdrobe1} from 'components/V-drobe1/three-items';
import Footer from 'components/layout/footer';


const page = () => {
  return (
    <div>
     <Navbar/> 

     <Vdrobe1/>
     <Vdrobe2/>
     <Vdrobe3/>
     <Footer/>
    
    </div>
    
  )
}

export default page
