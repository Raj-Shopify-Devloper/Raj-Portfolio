
function Contect() {
    return (
        <section className="contact" id="contact">
            <div className="container">
                <h2 className="contact-head title">Contact me</h2>
                <div className="contact-content">
                    <div className="column left">
                        <div className="contact-text">
                            <h3>Get in Touch</h3>
                        </div>
                        <p>If you are interested in working together? Please fill out the form aside with some info about your project and I will get back to you as soon as I can. Please allow a couple days for me to respond.</p>
                        <div className="contact-icons">
                            <div className="contact-row">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152z" /></svg>
                                <div className="contact-info">
                                    <h3 className="contacts-head">Name :</h3>
                                    <div className="contact-sub-title">Savaliya Raj A.</div>
                                </div>
                            </div>
                            <div className="contact-row">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
                                <div className="contact-info">
                                    <h3 className="contacts-head">Address :</h3>
                                    <div className="contact-sub-title">Gujrat, Junagadh</div>
                                </div>
                            </div>
                            <div className="contact-row">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>
                                <div className="contact-info">
                                    <h3 className="contacts-head">Email :</h3>
                                    <a href="mailto:raj.s.webdevloper@gmail.com" target="_blank" className="contact-sub-title">raj.s.webdevloper@gmail.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column right">
                        <div className="contact-text">Message me</div>
                        <form action="mailto:raj.s.webdevloper@gmail.com" method="post" encType="text/plain">
                            <div className="contact-fields">
                                <div className="contact-field name">
                                    <input type="text" placeholder="Name" required />
                                </div>
                                <div className="contact-field email">
                                    <input type="email" placeholder="Email" required />
                                </div>
                            </div>
                            <div className="contact-field">
                                <input type="text" placeholder="Subject" required />
                            </div>
                            <div className="field textarea">
                                <textarea placeholder="Message.." required></textarea>
                            </div>
                            <div className="contact-button btn">
                                <button type="submit"><a className="btn">Send message</a></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contect