import Img1 from "./team.JPEG";
import Title from "../common/title/Title";
import { homeAbout } from "../../dummydata";
import AWrapper from "./AWrapper";
import "./about.css";

const AboutCard = () => {
  return (
    <>
      <section className="aboutHome">
          <div className="container flexSB">
              <div className="left row">
                  <img src={Img1} alt="pix"/>
              </div>
              <div className="right row">
                  <Title subtitle="About Us" title="Know Us"/>
                  <div className="items">
                      {homeAbout.map((val) => (
                          <div className="item flexSB">
                                <div className="img">
                                    {/* <img src={val.logo} alt="pix" /> */}
                                    <span>{val.logo}</span>
                                </div>
                                <div className="text">
                                    <h2>{val.title}</h2>
                                    <p>{val.desc}</p>
                                </div>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      </section>
      <AWrapper />
    </>
  );
};

export default AboutCard;
