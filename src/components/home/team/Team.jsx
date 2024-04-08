import { testimonial } from "../../../dummydata";
import "./style.css";
import Title from "../../common/title/Title";

const Team = () => {
  return (
    <>
      <section className="padding">
        <div className="container">
          <Title subtitle="Our Team" title="Team" />
          <div className="container grid23">
            {testimonial.slice(4, 8).map((val) => (
              <div className="team">
                <div className="img">
                  <img src={val.cover} alt="" />
                  <div className="team_overlay">
                    <i className="fab fa-facebook-f icon"></i>
                    <i className="fab fa-instagram icon"></i>
                    <i className="fab fa-twitter icon"></i>
                    <i className="fab fa-tiktok icon"></i>
                  </div>
                </div>
                <div className="details">
                  <h2>{val.name}</h2>
                  <p>{val.work}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
