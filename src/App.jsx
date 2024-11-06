import React, { useEffect, useState } from 'react'
import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import Loader from './components/loaderpage';




const App = () => {

  let [a, setA] = useState(true)
  
  useEffect(e => {
    setTimeout(d => {
      setA(false)
    }, 3000)
  }, [])

  return (
    <>
     {
        a ? <Loader /> :
          <>
             <div className={`${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
          </div>
           <div className='bg-primary w-full overflow-hidden'>
    
          <br /><br /><br /><br />
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
         </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
      </>
     
      }

       
      
      
    </>
   

  )
}
   




  export default App
