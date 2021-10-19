
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
  
  return (
    <div className="secvices-contianer">
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
      <h3 className="text-danger">A hospital alone shows what war is.</h3>
      <p className="text-danger">Anyway the war is over so far as they are concerned. But to wait for dysentery is not much of a life either.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 caro-img"
      src={img2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 className="text-danger">The hospital industry to this day works its tail off to do the right thing.</h3>
      <p className="text-danger">When you cry out in pain from a broken wrist, no one questions it. You just go to the hospital and take the necessary steps. </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 caro-img"
      src={img3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 className="text-danger">The hospital bulked darkly in the darkness.</h3>
      <p className="text-danger">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel></div>
      </div>
<h3 className="text-center pt-5 pb-3 fs-1">Our Services</h3>
<div className="header-service container">
 {
   services?.map(service=><Ser service={service} key={service.id}></Ser>)
 }

</div>
<Link className="link" to="/services"><button className="ser-btn">See More Details</button></Link>

    </div>
  );
};

export default Home;