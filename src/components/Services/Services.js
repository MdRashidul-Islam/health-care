import React, { useEffect } from 'react';
import AllService from '../../hooks/AllService';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
  const [services]= AllService();
  
  
  useEffect(()=>{
    
  },[])
  return (
    <div className="secvices-contianer container" >
      <h3 className="service-title">Our Services</h3>
      <div className="header-service">
      {
        services?.map(service=><Service 
          service={service}
          key={service.id}
          ></Service>)
      }
      </div>
      
    </div>
  );
};

export default Services;