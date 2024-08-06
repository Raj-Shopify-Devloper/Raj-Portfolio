
function Skill() {
    return (
        <section className="skill-section">
            <div className="container">
                <h2 className="skill-head title">My Skill</h2>
                <div className="text-and-graph-skill">
                    <div className="skill-text">
                        <h3>My creative skills & experiences.</h3>
                        <p>
                            "Hello, I'm Raj Savaliya, a passionate web designer hailing from the picturesque town of Junagadh. With 2 years of dedicated experience under my belt, I've forged a deep connection with the digital realm, embracing the world of HTML, CSS, JavaScript, and Shopify. But my journey goes beyond the realms of coding; it's a journey of creativity and artistry.<br />
                            My design philosophy goes beyond aesthetics; it's about enhancing user experiences, ensuring functionality, and optimizing performance. I understand that a website is more than a digital presence; it's a gateway to your brand's soul, a reflection of your essence, and a tool to achieve your goals.<br />
                            Through my work, I strive to make the internet a more beautiful, functional, and engaging place, one website at a time. So, let's collaborate and turn your digital dreams into reality, together."
                        </p>
                        <a className="btn Skill-btn" href="#contact">Contact Me</a>
                    </div>
                    <div className="skill-all-section">
                        <div className="parent-skill">
                            <div className="skill">
                                <div className="progress" data-progress="100">
                                    <span className="progress-number">0%</span>
                                </div>
                            </div>
                            <span className="title">HTML</span>
                        </div>
                        <div className="parent-skill">
                            <div className="skill">
                                <div className="progress" data-progress="99">
                                    <span className="progress-number">0%</span>
                                </div>
                            </div>
                            <span className="title">CSS</span>
                        </div>
                        <div className="parent-skill">
                            <div className="skill">
                                <div className="progress" data-progress="55">
                                    <span className="progress-number">0%</span>
                                </div>
                            </div>
                            <span className="title">JAVASCRIPT</span>
                        </div>
                        <div className="parent-skill">
                            <div className="skill">
                                <div className="progress" data-progress="80">
                                    <span className="progress-number">0%</span>
                                </div>
                            </div>
                            <span className="title">SHOPIFY</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Skill