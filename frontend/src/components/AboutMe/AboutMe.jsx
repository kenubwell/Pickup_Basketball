import React from "react";
import "./AboutMe.css";
import {BsGithub} from "react-icons/bs";

const AboutMe = () => {
    return ( 
        <div className="entire-contain-ab">
            <div className="about-title"><h3 className="">About Me</h3></div>
            <div className="about-me-contain">
                <div>
                    <div><img src ="/images/about-cropped.jpg" className = "about-me-pic" alt = "fam"/>  </div>
                    <div className="small-icon-imgs">
                        <div className="github"><a href="https://github.com/kenubwell" target="_blank"><BsGithub size={30}/></a></div>
                        <div className="credly-contain"><a href="https://www.credly.com/users/kenneth-blackwell.440824aa/badges" target="_blank"><img src ="/images/credly.jpg" className = "credly-image" alt = "credly"/></a></div>
                    </div>
                </div>
                <div className="about-first-para">I'm <b>Ken Blackwell</b> a father, husband, and combat veteran. I'm currently a 
                    devCodeCamp Full Stack Development student recently immersed with my Capstone (this site). I enjoyed the process of learning effective problem solving and coding during this bootcamp, and being able to demonstrate these skill sets into this project. My intent
                    was to provide value to basketball enthusiasts within my local community by having a forum to schedule pickup basketball games while staying informed
                    with local basketball events.  
                </div>
            </div>
            <div>
                <div className="about-second-para">Regarding basketball, I've been an enthusiast ever since middle school and have played pickup basketball games in various places
                throughout my years. The following are some places that I got to <b>Hoop</b> at:</div>
                <div>
                    <div className="bbullets-contain">
                        <div>
                            <div className="list-shade">🏀 Afghanistan</div>
                            <div className="list-shade">🏀 South Korea</div>
                            <div className="list-shade">🏀 Kuwait</div>
                            <div className="list-shade">🏀 Austin, TX</div>
                            <div className="list-shade">🏀 Augusta, GA</div>
                            <div className="list-shade">🏀 Maryland</div>
                        </div>
                        <div className="right-side-bblist">
                            <div className="list-shade-lg">🏀 New York City</div>
                            <div className="list-shade-lg">🏀 Sacramento, CA</div>
                            <div className="list-shade-lg">🏀 San Antonio, TX</div>
                            <div className="list-shade-lg">🏀 St. Augustine, FL</div>
                            <div className="list-shade-lg">🏀 Tacoma, WA</div>
                            <div className="list-shade-lg">🏀 Tucson, AZ</div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    
    );
}
 
export default AboutMe;