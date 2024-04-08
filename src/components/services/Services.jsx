import Back from "../common/back/Back"
import ServicesCard from "./ServicesCard";
import "./services.css"


const Services = () => {
  return (
    <>
        <Back title="Services"/>
        <section className="padding">
            <div className="container">
              <div className="grid23">
              <ServicesCard />
              </div>
            </div>
        </section>
    </>
  )
}

export default Services;