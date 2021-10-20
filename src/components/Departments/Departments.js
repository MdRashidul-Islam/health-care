import React, { useEffect, useState } from 'react';
import Department from './Department';

const Departments = () => {
  const [departments, setDepartments]=useState([]);
  useEffect(()=>{
    fetch('/department.json')
    .then(res=>res.json())
    .then(data=>setDepartments(data))
  },[])
  return (
    <div className="departments">
      {
        departments.map(department=><Department key={department.id} department={department}></Department>)
      }
    </div>
  );
};

export default Departments;