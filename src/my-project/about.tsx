import React from "react"
import AboutImage from "../assets/About.webp"

function About() {
    return (
        <>
            <section className="about-section" id="About">
                <div className="container">
                    <h2 className="about-head title">About me</h2   >
                    <div className="about-img-text">
                        <div className="about-img">
                            <img src={AboutImage} />
                        </div>
                        <div className="about-text">
                            <h3>I'm Raj Savaliya. I'm a <span className="type-text"></span><span className="cursor">|</span></h3>
                            <p>Hello, I'm Raj Savaliya, a web developer specializing in front-end development. At 20 years
                                old, I'm passionate about turning ideas into user-friendly websites using HTML, CSS, Shopify,
                                JavaScript, and WordPress. I'm a problem solver and a team player, ready to take on challenges.
                                Let's create something great together!</p>
                            <a href="#" className="about-cv btn">View CV</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="services" id="services">
                <div className="container">
                    <h2 className="services-head title">My services</h2>
                    <div className="serv-content"></div>
                    <div className="services-contain">
                        <div className="services-box">
                            <span id="services-first"> <img src="https://cdn.icon-icons.com/icons2/2334/PNG/512/pen_tool_anchor_point_design_icon_142354.png" /></span>
                            <div className="services-content">
                                <h3>Designer</h3>
                                <p>I am a Fresher web designer. I have make different design with different ideas. I today's rat race new fresher have more mind blowing ideas with more expoloring ideas.</p>
                            </div>
                        </div>
                        <div className="services-box">
                            <span id="services-second"></span>
                            <div className="services-content">
                                <h3>Development</h3>
                                <p>In this digital world. I help people in build there business and brand digitally which helps in the many thing like:Brand building, more seling etc.</p>
                            </div>
                        </div>
                        <div className="services-box">
                            <span id="services-three"></span>
                            <div className="services-content">
                                <h3>Platform</h3>
                                <p>Apps helps to those people who are not mostly friendly towards the website.Apps helps people in user interface which make them easier.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default About