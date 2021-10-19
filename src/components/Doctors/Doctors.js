import React, { useEffect, useState } from 'react';
import Doctor from './Doctor';
import './Doctor.css'

const Doctors = () => {
  const [doctors, setDoctors]= useState([])
  useEffect(()=>{
    fetch('/doctors.json')
    .then(res=>res.json())
    .then(data=>setDoctors(data))
  },[])
  return (
    <div className="doctors-container container">
     <div className="doctors">
     {
        doctors.map(doctor=><Doctor doctor={doctor} key={doctor.id}></Doctor>)
      }
     </div>
    </div>
  );
};

export default Doctors;
