import React from 'react'
import { team } from "../../../dummydata"
import "./testimonial.css"

const TestimonialCard = () => {
  return (
    <>
        {team.map((val) => (
          <div className='testimonial shadow'>
              <div className='img'>
                  <img src={val.cover} alt="pix" />
                <div className='overlay'>
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
    </>
  )
}

export default TestimonialCard