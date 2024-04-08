import Back from "../../common/back/Back"
import TestimonialCard from "./TestimonialCard"

const Testimonial = () => {
  return (
    <>
    <Back title="Team"/>
        <section className="padding">
          <div className="container">
            <div className="container grid23">
            <TestimonialCard />
            </div>
          </div>
        </section>
    </>
  )
}

export default Testimonial