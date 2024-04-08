import Back from "../common/back/Back"
import "./contact.css"

const contact = () => {

    return (
    <>
        <Back title="Contact Us"/>
        <section className="padding">
            <div className="contact_container">
                <div className="left row">                               
                <iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=3%20ogunshina%20ogundele%20anthony%20lagos%20+(Timeline%20entertainment)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps trackers</a></iframe>
                </div>
                <div className="right row">
                    <h1 className="contact_h1">Contact Us</h1>
                    <p className="contact_p">ipsam libero maxime, voluptatem porro</p>

                    <div className="items grid2">
                        <div className="box">
                            <h3 className="contact_h3">ADDRESS: </h3>
                            <p className="contact_p">3 ogunsina ogundele way, anthony lagos nigeria</p>
                        </div>
                        <div className="box">
                            <h3 className="contact_h3">GMAIL: </h3>
                            <p className="contact_p">Info@gmail.com</p>
                        </div>
                        <div className="box">
                            <h3 className="contact_h3">PHONE: </h3>
                            <p className="contact_p">+234 90 2320 3254</p>
                        </div>
                    </div>

                    <form action=''>
                        <div className="flexSB">
                            <input type="text" placeholder="Name"/>
                            <input type="email" placeholder="Email"/>
                        </div> 
                        <input type="email" placeholder="subject" />
                        <textarea cols="30" rows="10">
                            Create a message here...
                        </textarea>
                        {/* <input type="button" placeholder="SEND MESSAGE" value="SEND MESSAGE" className="primary-btn2"/> */}
                        <button className="primary-btn2">SEND MESSAGE</button>
                    </form>

                    <h3>Follow us here</h3>
                    <span className="contact_span">FACEBOOK TWITTER INSTAGRAM DRIBBLE</span>
                </div>
            </div>
        </section>
    </>
  )
}

export default contact