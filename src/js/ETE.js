import React from 'react'
import './EndP.css'
// import hack from "public/images/hack.png"
// import conf from 'images/conf.png'
// import team from 'images/train .png'

function EndProgram() {
    return (
        <div className="endprogram">
            <div className="container" style={{ marginTop: "30px" }}>
                <div className="section_title"><br /><br /><br />
                    <h3 className="title_program" >
                        End to End Program
                    </h3>
                </div>
                <div className="container">
                    <main className="grid">
                        <article>
                            <img draggable="false" src='images/hack.png' alt="brand-img" className="img-fluid" />
                            <div className="text">
                                <h3 className="endhead">CTF Hacking Conference</h3>
                                <p className="enddet">A pan India CTF final round, which is a centre stage that showcases the best talent in cybersecurity, with the winners getting cool rewards and scholarships.</p>
                            </div>
                        </article>
                        <article>
                            <img draggable="false" src='images/train.png' alt="brand-img" className="img-fluid" />
                            <div className="text">
                                <h3 className="endhead">Training Programmes</h3>
                                <p className="enddet">Exciting training sessions and workshops to recognize and nurture talents in the field of cyber-security and empowering them to take it up in their career paths.</p>
                            </div>
                        </article>
                        <article>
                            <img draggable="false" src='images/conf.png' alt="brand-img" className="img-fluid" />
                            <div className="text">
                                <h3 className="endhead">CyberSecurity Conference</h3>
                                <p className="enddet">Talks, Panel Discussions and insightful Keynote sessions on cybersecurity by top global experts in the field.</p>
                            </div>
                        </article>
                    </main>
                </div>
            </div>
            <br /><br /><br />
        </div>
    )
}

export default EndProgram
