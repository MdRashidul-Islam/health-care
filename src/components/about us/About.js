import React from 'react';
import './About.css'
import aboutImg from '../../images/about.jpg'

const About = () => {
  return (
    <div className="about-container">
      <div className="about-banner">
        <img className="about-img" src={aboutImg} alt="" />
      </div>
      <div className="about-info">
        <h2>About US</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum earum esse perferendis sed laborum obcaecati nulla quisquam ut ullam minus? Iste aut nisi eligendi voluptas quidem illum recusandae, tenetur cumque doloribus quibusdam laudantium eveniet eaque atque quam minima, asperiores quasi ex voluptate! Quaerat voluptatem recusandae animi, nobis quae aut! Rerum id, accusamus saepe quisquam est aliquid beatae repellat pariatur. Non deserunt dicta vitae sit similique doloremque accusamus optio nobis atque, ipsam officia consectetur possimus dolorum beatae tempore aperiam facere voluptas quod iure aspernatur dolorem rem animi tempora. Obcaecati cum, explicabo ab repellat amet in possimus tempora, vel quidem nemo tempore.</p>
      </div>
    </div>
  );
};

export default About;