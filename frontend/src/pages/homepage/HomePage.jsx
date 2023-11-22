import { Content, Footer } from "../../components"
import SliderComponent from "../../components/slider/SliderComponent"
import  slider1 from "../../assets/slider1.webp"
import  slider2 from "../../assets/slider2.webp"


const HomePage = () => {
  return (
    <div>
      <SliderComponent arrImages={[slider1,slider2]}></SliderComponent>
      <Content></Content>
      <Footer></Footer>
    </div>
  )
}
export default HomePage