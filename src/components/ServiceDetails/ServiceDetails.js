import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ServiceDetails.css'




const ServiceDetails = () => {
  const {serviceId}=useParams();
  const [servicesDetails, setServiceDetails]=useState([]);
  const [singleServiceDetails, setSingleServiceDetails]=useState([]);



  useEffect(()=>{
    fetch('/service.json')
    .then(res=>res.json())
    .then(data=>setServiceDetails(data))
  },[])
  
  useEffect(()=>{
    const foundDetails= servicesDetails.find(x=>x.id === parseInt(serviceId))
    setSingleServiceDetails(foundDetails);
   
  },[servicesDetails])
  
  return (
    <div className="details">
      <div><img className="details-img img-fluid" src={singleServiceDetails?.img} alt="" /></div>
      <div className="details-info">
      <h2 className="mt-5">{singleServiceDetails?.name}</h2>
       <p>{singleServiceDetails?.description}</p>
      </div>
       
    </div>
  );
};

export default ServiceDetails;