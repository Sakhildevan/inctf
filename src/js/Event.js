import React from 'react'
import './Event.css'
function Event() {
  return (
    <div className='event'>
        <div className='event1'>
            <div className='eventhead'>Event Timeline</div>
            <div className='event2'>
                <div className='ph0'>
                <div className='ph'>
                    <h1>Phase 1</h1>
                    <p>October 2021 - December 2021</p>
                </div>
                <div className='ii'>
                <div className='img4'>
                    <img src={require('../images/event/c (4).png')} alt="" ></img>
                    </div>
                    <div className='img5'>
                    <img src={require('../images/event/t.png')} alt="" ></img></div>
               </div>
                <div className='f1'>
                <div className='tr'>
                <h3>InCTF Training Round & Team Registration</h3>
                <p>Participants will solve Beginner level Challenges</p>
                </div>
                <div className='bl'>
                <h3>Beginner-Level Training</h3>
                  <p>Basic CybserSecurity Training, introducing 
                      participants to Web Security & Exploitation, Assembly,
                       Digital Forensics, Reverse Engineering</p>
                </div>
               </div> 
                </div>
                <div className='ph2'>
                    <div className='ph'>
                        <h1>Phase 2</h1>
                        <p>December 2021</p>
                    </div>
                    <div className='iii'>
                <div className='img6'>
                    <img src={require('../images/event/q.webp')} alt="" ></img>
                    </div>
                    <div className='img7'>
                    <img src={require('../images/event/c (1).png')} alt="" ></img></div>
               </div>

                    <div className='f2'>
                    <div className='tr1'>
                        <h3>Qualifer Round</h3>
                        <p>Participants enhance their skills by practising different
                             CTF-challenges from the Traboda Labs platform.</p>
                    </div>
                    <div className='bl1'>
                        <h3>Pre - conference talks</h3>
                        <p>Participants receive advanced talks in different cybersecurity areas to level up their skills.</p>
                    </div></div></div>
                    <div className='ph3'>
                        <div className='ph'>
                            <h1>Phase 3</h1>
                            <p> January 2022</p>
                            <div className='iii'>
                <div className='img8'>
                    <img src={require('../images/event/c (3).png')} alt="" ></img>
                    </div>
                    <div className='img9'>
                    <img src={require('../images/event/fs.png')} alt="" ></img></div>
               </div>

                            
                        </div><div className='f3'>
                        <div className='tr3'>
                            <h3>InCTF - Finals</h3>
                            <p>Finale of InCTF - Jeopardy 
                                Style CTF, organized by teambi0s</p>
                                </div>
                        <div className='bl3'>
                            <h3>Final Summit</h3>
                            <p>3-day CyberSecurity Conference, that will feature talks, panel-discussions, seminars etc.</p>
                        </div>
                    </div>
                
            </div>
        </div>
    </div>
    </div>
  )
}

export default Event