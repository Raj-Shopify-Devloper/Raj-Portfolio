import React from "react"
function Projects() {
    return (
        <section className="teams" id="Projects">
            <div className="container">
                <h2 className="project-head title">My Projects</h2>
                <div className="carousel">
                    <div className="card">
                        <div className="project-box">
                            <img src="https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="img" />
                            <div className="project-text"><h3>SJS Hot N' Spicy</h3></div>
                            <p>SJS hot n spicy is and resturant project . </p>
                            <a href="https://apps.pfcrestaurant.com.np/" className="project btn" target="_blank">View Project</a>
                        </div>
                    </div>
                    <div className="project-card">
                        <div className="project-box">
                            <img src="https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="img" />
                            <div className="project-text"><h3>Buger House</h3></div>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <a href="https://ajyotish.com.np/" className="project btn" target="_blank">View project</a>
                        </div>
                    </div>
                    <div className="project-card">
                        <div className="project-box">
                            <img src="https://images.pexels.com/photos/1804577/pexels-photo-1804577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="img" />
                            <div className="project-text"><h3>Deep IT Institute</h3></div>
                            <p>Deep Computer is an institution project .</p>
                            <a href="https://deepcomputer.edu.np/" className="project btn" target="_blank">View Project</a>
                        </div>
                    </div>
                    <div className="project-card">
                        <div className="project-box">
                            <img src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="img" />
                            <div className="project-text"><h3>NRD Computers</h3></div>
                            <p>NRD Computer is an eCommerce project.</p>
                            <a href="https://nrd.com.np/" className="project btn" target="_blank">View Project</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Projects