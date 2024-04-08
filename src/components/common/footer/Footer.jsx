import "./footer.css";
import { blog } from "../../../dummydata"



const Footer = () => {
  return (
    <>
      <section className="newletter">
        <div className="container flexSB">
          <div className="left row">
            <h1>Timeline -Stay with us and always get the latest update</h1>
            <span>When you're here, you're family..</span>
          </div>
          <div className="right row">
              <input type="text" placeholder="Enter email Address"/>
              <i className="fa fa-paper-plane"></i>
          </div>
        </div>
      </section>

      <footer>
            <div className="container padding">
                <div className="box logo">
                    <h1>TIMELINE</h1>
                    <span>We redefine entertainment</span>
                    <p> incidunt, at consequatur nesciunt voluptatum alias. Eum exercitationem aperiam eius totam earum!</p>

            <i className="fab fa-instagram icon"></i>
            <i className="fab fa-twitter icon"></i>
            <i className="fab fa-youtube icon"></i>
                </div>
                
                <div className="box link">
                    <h3>Explore</h3>
                    <ul>
                        <li>Contact Us</li>
                        <li>Services</li>
                        <li>About Us</li>
                        <li>Team</li>
                    </ul>
                </div>
                <div className="box link">
                    <h3>Quick Links</h3>
                    <ul>
                        <li>Contact Us</li>
                        <li>About Us</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy</li>
                        <li>Feedbacks</li>
                    </ul>
                </div>
                <div className="box">
                    <h3>Recent Post</h3>
                    {blog.slice(0,3).map((val) => {
                        return (
                        <div className="items flexSB">
                            <div className="img">
                                <img src={val.cover} alt="" />
                            </div>
                            <div className="text">
                                <span>
                                    <i className="fa fa-user"></i>
                                    <label htmlFor="">{val.type}</label>
                                </span>
                                <span>
                                    <i className="fa fa-calendar-alt"></i>
                                    <label htmlFor="">{val.date}</label>
                                </span>
                                <h4>{val.title}</h4>
                            </div>
                        </div>
                        )
                    })}
                </div>
                <div className="box last">
                    <h3>Have a Question?</h3>
                    <ul>
                        <li>
                            <i className="fa fa-map"></i>
                            3 ogunsina ogundele way, anthony lagos, Nigeria
                        </li>
                        <li>
                            <i className="fa fa-phone-alt"></i>
                            +234 90 2320 3254
                        </li>
                        <li>
                            <i className="fa fa-paper-plane"></i>
                            timelineentertainment@gmail.com
                        </li>
                    </ul>
                </div>
            </div>
      </footer>
      <div className="legal">
            <p>Copyright@2024 All rights reserved | This webpage is made <i className="fa fa-heart"></i> by Simplevhick_ </p>
      </div>
    </>
  );
};

export default Footer;
