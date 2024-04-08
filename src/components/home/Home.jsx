import AboutCard from "../about/AboutCard"
import Team from "./team/Team"
import Hero from "./hero/Hero"
import Service from "./service/service"





const Home = () => {
  return (
    <div>
        <Hero />
        <AboutCard />
        <Team />
        <Service />
    </div>
  )
}

export default Home