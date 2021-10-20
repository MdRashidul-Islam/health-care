
import {  Carousel } from 'react-bootstrap';
import './Home.css'
import img1 from '../../images/slider (1).jpg'
import img2 from '../../images/slider (2).jpg'
import img3 from '../../images/slider (3).jpg'
import AllService from '../../hooks/AllService';
import Ser from './Ser';
import { Link } from 'react-router-dom';


const Home = () => {
  const [services]= AllService();
  const Services= services?.slice(0, 6) 
  
  return (
    <div className="">
      <div className="header-part">
     <div className="carousel">
       <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 caro-img"
      src={img1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className="text-black  fw-bold">A hospital alone shows what war is.</h3>
      <p className="text-black  fw-bold">Anyway the war is over so far as they are concerned. But to wait for dysentery is not much of a life either.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 caro-img"
      src={img2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 className="text-black  fw-bold">The hospital industry to this day works its tail off to do the right thing.</h3>
      <p className="text-black  fw-bold">When you cry out in pain from a broken wrist, no one questions it. You just go to the hospital and take the necessary steps. </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 caro-img"
      src={img3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 className="text-black  fw-bold">The hospital bulked black  fw-boldly in the black  fw-boldness.</h3>
      <p className="text-black  fw-bold">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel></div>
      </div>
<h3 className="service-title">Our Services</h3>
<div className="header-service container">
 {
   Services?.map(service=><Ser service={service} key={service.id}></Ser>)
 }

</div>
<Link className="link" to="/services"><button className="ser-btn">See More With Details</button></Link>

    </div>
  );
};

export default Home;