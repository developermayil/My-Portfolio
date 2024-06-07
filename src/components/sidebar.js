
import '../App.css';
import '../components/slider.css'
import Slider from "@madzadev/image-slider";
import "@madzadev/image-slider/dist/index.css";
import Talk from '../images/talk.jpg';
import Eat from '../images/eat.jpeg';
import  Chain from '../images/chain.png';


export default function MySlider(){

  const images = [
    { url: Talk },
    { url: Eat },
    { url: Chain }
    
  ];
  return(
    <mySlide style={{width: '100%'}}>
    <Slider imageList={images} style={{width: '100%'}} />
    </mySlide>
  )
}