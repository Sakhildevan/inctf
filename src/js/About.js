import React from 'react'
import './About.css'



function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h3 className="title_about">
              <span className="about_span">What is</span> InCTFCon{" "}
              <span className="about_span">?</span>
            </h3>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div>
              
                <p className="para">
                  <span className="span2">InCTFCon</span> is an International Cybersecurity conference organized on behalf of Amrita InCTF. Our mission is to educate and promote a culture of online and technology safety and security. We want to empower those that are technologically savvy to take up the cybersecurity mantle in order to find a fulfilling career in cyberspace while serving those in need.  InCTFCon offers multiple avenues of entry into cybersecurity both professionally and academically. 
                </p>
                <p className="para">
                  Our pre-conference national contest (InCTF) had a{" "}
                  <strong>
                    participant strength of over 15000  from all over
                    India 
                  </strong>
                  , including top IITs and NITs. The big dream behind this conference is 
                  to inculcate a new generation of cybersecurity professionals to protect the globe from a cyber pandemic and to 
                  safeguard India's future in the digital atmosphere.
                </p>
              
            </div>
          </div>

          <div className="col2">
            <div >

            
                <h1 className="headpara">Inspiring & Empowering Youth in CyberSecurity</h1>
              
              <div>
             
                  <p className="para">
                    InCTFCon offers contests, programs and world-class
                    workshops along with the pre-conference event InCTF,
                    which is one of the biggest cybersecurity contests in
                    India. Over the years, InCTFCon has created a unique,
                    ever-growing community with people from academia and the
                    industry, ready to empower young people for years to
                    come.
                  </p>
                
              </div>
            </div>
          </div>

        </div>
        <br />

      </div>
    </div>
  );
}

export default About;
