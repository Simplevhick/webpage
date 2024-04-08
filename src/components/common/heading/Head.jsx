import Img1 from "./logo.png";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container flexSB">
          <div className="img">
            <div className="img">
              <img src={Img1} alt="pix" className="img2"/>
            </div>
          </div>

          <div className="social">
            <i className="fab fa-facebook-f icon"></i>
            <i className="fab fa-instagram icon"></i>
            <i className="fab fa-twitter icon"></i>
            <i className="fab fa-youtube icon"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
