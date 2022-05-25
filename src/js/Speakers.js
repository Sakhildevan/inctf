import React from 'react';
import styled from "@emotion/styled";
import shortid from "shortid";
import './Speakers.css'
const SpeakersContainer = styled.div`
    
    padding: 0vh 1rem;
    display: flex;
    align-items: center;
    justify-content:center;
    
    .h21 {
        font-size: calc(2.5rem + 4vw);
        justify-content: center;
        color: tomato;
        
        font-weight: 800;
        padding: .5rem 0px;
       }
    // .scroll-container {
    //   &::-webkit-scrollbar{
    //       background: rgba(2,2,2,0.5);
    //       width: 8px;
    //   }
    //   ::-webkit-scrollbar-thumb {
    //       background: rgba(120,20,150,0.5);
    //   }
    //   ::-webkit-scrollbar-thumb:hover {
    //        background: rgba(120,20,150,0.8);
    //   }
    // }
`

const SpeakerCard = styled.div`
    text-align: center;
    color: #eee;
    width: 250Px;
    padding: 20px;
  
    border-radius: 10px;
    height: 300px;
    display: flex;
    flex-direction: column;;
    flex: 1 1;
    user-select: none;
    transition: all 0.5s ease;
    border: ${({ isTrainer }) => isTrainer ? `2px solid tomato` : `2px solid tomato`};
    &:hover {
       transform: translateY(-8px);
       transition: all 0.5s ease;
       border-radius: 10px;
       img {
         border-radius: 5px;
         transition: all 0.7s ease;
       }
      }
      img {
      float: center;
      width:  150px;
      height: 150px;
      padding-left: 50px;
      border-radius: 10px;
      
      margin-bottom: 1rem;
      transition: all 0.7s ease;
      display: block;
    }
    h3 {
       font-size: calc(0.9rem + 0.15vw);
        color: #fd7e14;
        margin-bottom: -1px;
        margin-top: -6px;
    }
    h4 {
       font-size: calc(0.75rem + 0.15vw);
       color: black;
       margin-bottom: 1px;
    }
    h5 {
       font-size: calc(0.8rem + 0.2vw);
       color: black;
       font-weight: 600;
    }
    .trainer-badge, .speaker-badge {
       display: inline-block;
       padding: 5.5px 20px;
       font-size: calc(0.8rem + 0.25vw);
       border-radius: 15px;
       transform: translateY(-35px);
    }
    .trainer-badge {
        background: tomato;
        
        
    }
    .speaker-badge {
         background: tomato;
         

    }
    .social-media-links {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 8px;
      a {
          margin-right: 8px;
          i {
            color: #AAA;
            font-size: 24px;
          }
          &:hover {
            i {
              color: black;
            }
          }
        }
    }
`

const ConferenceSpeakers = () => {

    const speakers = [
        {
            "name": "Ajay Prakash Sawhney",
            "designation": "Secretary. Ministry of Electronics & IT",
            "isTrainer": true,
            "speakType": "Keynote",
            "company": "Government of India",
            "image": require('../images/speakers/Ajay-Prakash-Sawhney.jpeg'),
        },
        {
            "name": "Lt. General (Dr) Rajesh Pant (retd.)",
            "designation": "National Cyber Security Coordinator",
            "isTrainer": true,
            "speakType": "Keynote",
            "company": "National Security Council Secretariat of India",
            "image": require('../images/speakers/rajeshPant.jpg')
        },
        {
            "name": "Arundhati Bhattacharya",
            "designation": "Chairperson and Chief Executive Officer ",
            "isTrainer": true,
            "speakType": "Keynote",
            "company": "Salesforce India",
            "image": require("../images/speakers/Arundhati-Bhattacharya.jpg")
        },
        {
            "name": "Shri. Atanu Chakraborty",
            "designation": "Chairman",
            "company": "HDFC Bank",
            "image": require("../images/speakers/HDFC-Chairman.jpg")
        },
        
        {
            "name": "Joshua Brown",
            "designation": "Vice President – Global Chief Information Security Officer",
            "company": "H&R Block",
            "image": require("../images/speakers/Joshua-Brown.jpg")
        },
        {
            "name": "Chris Caren",
            "designation": "CEO",
            "company": "Turnitin",
            "image": require("../images/speakers/Chris-Caren.jpg")
        },
        {
            "name": "Suvabrata Sinha ",
            "designation": "Chief Information Security Officer",
            "company": "NXP Semiconductors",
            "image": require("../images/speakers/Suvabrata-Sinha.jpg")
        },
        {
            "name": "Dotan Sagi",
            "designation": "Founder & CEO ",
            "company": "Be-Strategic Solutions",
            "image": require("../images/speakers/DotanSagi_BeST.jpg")
        },
        
        {
            "name": "Yogi Kapur",
            "designation": "Director, SOC",
            "company": "Salesforce",
            "image": require("../images/speakers/YogiPhoto.jpg")
        },
        {
            "name": "Sandeep Shukla",
            "designation": "Professor",
            "company": "Indian Institute of Technology Kanpur",
            "image": require('../images/speakers/Prof_Sandeep_Shukla.jpg')
        },
        {
            "name": "Atul Agarwal",
            "designation": "CEO",
            "company": "Secfence",
            "image": require("../images/speakers/atul-agarwal.jpg")
        },

        {
            "name": "Srinivas Bharadwaj",
            "designation": "Lead Founder",
            "company": "Jnana Marga Technologies",
            "image": require('../images/speakers/srinivas-final.jpg')
        },
        {
            "name": "Dr. Amir Schreiber",
            "designation": "Senior Director",
            "company": "Bank Hapoalim",
            "image": require("../images/speakers/amir.jpg")
        },
        {
            "name": "Lavi Lazarovitz",
            "designation": "Head of Research",
            "company": "Cyberark",
            "image": require("../images/speakers/Lazarovitz_CyberArk.jpg")
        },
        {
            "name": "Richard Chow",
            "designation": "University Research Manager and Scientist",
            "company": "Intel",
            "image": require("../images/speakers/RichardChow.jpg")
        },
        {
            "name": "Manoj Abraham IPS",
            "designation": "Additional Director General of Police",
            "company": "Kerala Police",
            "image": require('../images/speakers/Manoj-Abraham.jpeg')
        },
        {
            "name": "Rushi",
            "designation": "Senior Program Manager",
            "company": "Ministry of Home Affairs",
            "image": require('../images/speakers/rushi.jpg')
        },
        
        {
            "name": "Uri Shai",
            "designation": "",
            "company": "Independent Consultant",
            "image": require("../images/speakers/Uri-Shai.1.jpg")

        },
        {
            "name": "Aniket Amdekar",
            "designation": "General Manager - Cyber Defence Education",
            "company": "Great Learning",
            "image": require("../images/speakers/Aniket-Amdekar.1.jpg")

        },
        {
            "name": "Prajeesh Prathap",
            "designation": "Head of Platform and Operations",
            "company": "IT&Care",
            "image": require("../images/speakers/prajeesh-Prathap.jpg")
        },
        {
            "name": "Sam Paterson",
            "designation": "IR Analyst",
            "company": "MDSec",
            "image": require("../images/speakers/sam.jpg")
        },
        {
            "name": "Mini TT",
            "designation": "Security Technologist",
            "company": "Dell",
            "image": require("../images/speakers/Mini-TT.jpg")
        },
        
        {
            "name": "Ramesh Kumar",
            "designation": "Senior Engineer",
            "company": "CrowdStrike",
            "image": require("../images/speakers/Ramesh-kumar.jpeg")
        },
        {
            "name": "Ajit Dhumale",
            "designation": "Senior Engineer",
            "company": "CrowdStrike",
            "image": require("../images/speakers/AjitDhumale-Saurabh-Gawas.jpg")
        },
        {
            "name": "Dr. Altaf Shaik",
            "designation": "Senior Researcher",
            "company": "Technical University of Berlin",
            "image": require("../images/speakers/altafshaik.jpeg")
        },
        {
            "name": "Adv. Prem Kamath",
            "designation": "",
            "company": "Lawyer & Cyber Law Consultant",
            "image": require('../images/speakers/Prem-Kamath .jpeg')
        },
        {
            "name": "Dr. Varun Kapoor IPS",
            "designation": "",
            "company": "Additional Director General of Police",
            "image": require("../images/speakers/varun-kapoor.jpg")
        },

        {
            "name": "Prasad Patibandla",
            "designation": "",
            "company": "Director, Research and Operations at Centre for Research on Cyber Intelligence and Digital Forensics(CRCIDF)",
            "image": require('../images/speakers/Prasad-Patibandla.jpeg')
        },
        {
            "name": "Britto Sidhan",
            "designation": "General Manager – Global Security Lab",
            "company": "Schneider Electric",
            "image": require("../images/speakers/britto.jpg")
        },
        {
            "name": "Sagar Gulhane",
            "designation": "Sr. Threat Research Engineer",
            "company": "CrowdStrike",
            "image": require("../images/speakers/Sagar_Gulhane.jpg")
        },

        {
            "name": "Raphael de la Vienne",
            "designation": "Technical Security Officer",
            "company": "IT&Care",
            "image": require("../images/speakers/Raphael.jpg")
        },
        {
            "name": "Nishaanth G",
            "designation": "Security Researcher",
            "company": "MDSec",
            "image": require("../images/speakers/Nishaanth.jpg")
        },
        {
            "name": "Akshay Jain",
            "designation": "Security Researcher",
            "company": "PhonePe",
            "image": require("../images/speakers/AkshyJain.jpg")
        },
        {
            "name": "Dr. M. Sethumadhavan",
            "designation": "Head - Cybersecurity, Professor",
            "company": "Amrita Vishwa Vidyapeetham",
            "image": require("../images/speakers/Sethumadhavan.jpg")
        },
        {
            "name": "Dr. Bhavani Rao",
            "designation": "Dean, Social Sciences & Humanities",
            "company": "Amrita Vishwa Vidyapeetham",
            "image": require('../images/speakers/Bhavani-Rao.jpg')
        },
       
        {
            "name": "Dr. Bindu Menon",
            "designation": "Professor and Head Psychiatry and Behavior Medicine",
            "company": "Amrita Hospital",
            "image": require("../images/speakers/bindu-menon.jpg")
        },
        
        {
            "name": "Siddharth Pillai",
            "designation": "Co-Founder & Director",
            "company": "AarambhIndia.org",
            "image": require('../images/speakers/Sidharth-Pillai.png')
        },
        {
            "name": "Ganesan Kumaresan",
            "designation": "Child Protection Specialist",
            "company": "UNICEF",
            "image": require('../images/speakers/Ganesan-Kumaresan.jpeg')
        },

       
    ];

    return <SpeakersContainer id="speakers">
        <div className="row2 ">
            <div className="hhh col-12 ">
                {/* <Fade left> */}
                <h2 className='h21'>speakers</h2>
                {/* </Fade> */}
            </div>

            {speakers.map((s, index) =>
                <div key={shortid.generate()} className="col-xl-2 col-lg-3 col-md-4 col-6 p-2">
                    <SpeakerCard isTrainer={s.isTrainer}>
                        <div>
                            {s.isTrainer ?
                                <div className="trainer-badge">{s.speakType}</div>
                                : <div className="speaker-badge">Speaker</div>
                            }
                            <div className="i">
                                {s.image && <img src={s.image} alt={s.name} draggable="false" />}
                            </div>
                            <h3>{s.name}</h3>
                        </div>
                        {s.company && <div>
                            <h4>{s.designation}</h4>
                            <h5>{s.company}</h5>
                        </div>}
                       
                    </SpeakerCard>
                </div>
            )}
        </div>
    </SpeakersContainer>

};

export default ConferenceSpeakers;