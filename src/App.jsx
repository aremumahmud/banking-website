import React, { useEffect, useState } from "react";
import styles from "./style";
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
} from "./components";
import Loader from "./components/loaderpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Banner from "./components/banner";
import About from "./components/about";
import Bars from "./components/bars";
import faqss from "./constants/faqss";
import Faq from "./components/faq";

const App = () => {
  let [a, setA] = useState(true);

  useEffect((e) => {
    setTimeout((d) => {
      setA(false);
    }, 3000);
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {a ? (
                <Loader />
              ) : (
                <>
                  <div className={`${styles.flexCenter}`}>
                    <div className={`${styles.boxWidth}`}>
                      <Navbar />
                    </div>
                  </div>
                  <div className="bg-primary w-full overflow-hidden">
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className={`bg-primary ${styles.flexStart}`}>
                      <div className={`${styles.boxWidth}`}>
                        <Hero />
                      </div>
                    </div>
                    <div
                      className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
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
              )}
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              {a ? (
                <Loader />
              ) : (
                <>
                  <div className={`${styles.flexCenter}`}>
                    <div className={`${styles.boxWidth}`}>
                      <Navbar />
                    </div>
                  </div>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <Banner />
                  <About />
                  <Bars />
                  <div className="bg-primary w-full overflow-hidden">
                    <div
                      className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
                      <div className={`${styles.boxWidth}`}>
                        <Testimonials />
                        <Clients />
                      </div>
                    </div>
                    {/* <div className="tile">
                  <p className="title">Better Value
                    Banking Experience</p>
                  <p>Business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds these matters to this principle of selection.

</p>
                </div> */}

                    <br />
                    <div
                      className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
                      <div className={`${styles.boxWidth}`}>
                        <Footer />
                      </div>
                    </div>
                  </div>
                </>
              )}
            </>
          }
        />
         <Route
          path="/faq"
          element={
            <>
              {a ? (
                <Loader />
              ) : (
                <>
                  <div className={`${styles.flexCenter}`}>
                    <div className={`${styles.boxWidth}`}>
                      <Navbar />
                    </div>
                  </div>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                    <Banner text={'FAQ'} />
                     <br />
                  <br />
                  <br />
                  <br />
                  <br />
                    <div className="faqs">
                      <p className="title"> Frequently Asked Questions</p>
                      <p>Find answers to all your queries about our service.</p>
                    </div>
<br /><br />
                    <div className="faq_list">
                      {
                        faqss?.map(s=> <Faq q={s.q} a={s.a}/>)
                      }
                    </div>
                   <br />
                  <br />
                  <br />
                  <br />
                  <div className="bg-primary w-full overflow-hidden">
                  

                      <br />
                       <br />
                
                    <div
                      className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
                      <div className={`${styles.boxWidth}`}>
                        <Footer />
                      </div>
                    </div>
                  </div>
                </>
              )}
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
