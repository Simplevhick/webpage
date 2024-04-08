import "./hero.css";
import Title from "../../common/title/Title";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Title
              subtitle=""
              title="WE REDEFINE ENTERTAINMENT"
            />
            <p>
              Timeline Entertainment is a leading provider of innovative and
              engaging entertainment experiences.We are commited to pushing the
              boundaries of whats possible in entertainment and our work, has
              been recognized with numerous awards and accolades.
            </p>
            <div className="button">
              <button className="primary-btn3">
                GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              <button className="bt2">
                MORE INFO <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="marigin"></div>
    </>
  );
};

export default Hero;
