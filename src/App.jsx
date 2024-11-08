import React, { useEffect, useState } from 'react'
import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import Loader from './components/loaderpage';
import {BrowserRouter as Router , Routes , Route}  from 'react-router-dom'
import Banner from './components/banner';
import About from './components/about';
import Bars from './components/bars';




const App = () => {

  let [a, setA] = useState(true)
  
  useEffect(e => {
    setTimeout(d => {
      setA(false)
    }, 3000)
  }, [])

  return (

    <Router>

      <Routes>

        <Route path='/'  element={  <>
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
   } />
        <Route path='/about' element={<>
          {
            a ? <Loader /> :
              <>
                <div className={`${styles.flexCenter}`}>
                  <div className={`${styles.boxWidth}`}>
                    <Navbar />
                  </div>
                </div>
                <br /><br /><br /><br /><br /><br />
                <Banner />
                <About />
                <Bars />
                  <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
         
          <Testimonials />
          <Clients />
         
        </div>
                </div>
                <div className="tile">
                  <p className="title">Better Value
                    Banking Experience</p>
                  <p>Business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds these matters to this principle of selection.

</p>
                </div>

                <br />
                  <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
         
         
          <Footer />
        </div>
      </div>
              </>}</>} />
      </Routes>
    </Router>
  

  )
}
   




  export default App
