import React, { useEffect } from 'react';
import AllService from '../../hooks/AllService';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
  const [services]= AllService();
  
  
  useEffect(()=>{
    
  },[])
  return (
    <div className="secvices-contianer" >
      <h3 className="text-center pt-3 pb-3 fs-1">Our Services</h3>
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