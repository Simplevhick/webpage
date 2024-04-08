import Title from "../../common/title/Title";
import { serves } from "../../../dummydata";
import "./service.css"


const Service = () => {
  return (
    <div>
      <section className="padding">
        <div className="container">
          <Title subtitle="Our Services" title="What we do?" />
          <div className="grid23">
            {serves.map((val) => (
              <div className="service shadow">
                <span>{val.logo}</span>
                <h1>{val.name}</h1>
                <p>{val.about}</p>
                <div className="btn-details">
                  <button className="primary-btn">More Info</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
