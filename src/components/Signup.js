import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';

function Signup() {

  const[id,setId]=useState('')
  const[name,setName]=useState('')
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')

  useEffect(() => {
    setId(uuid());
  }, []);
const location=useNavigate()
const handleupdate=async(e)=>{
  e.preventDefault();
  if(name == "" || email == "" || password == ""){
    alert("enter details")
    return;
  }
  setId(uuid().slice(0, 3));

  const body={
    id,name,email,password
  }
  const result=await axios.post('http://localhost:8000/signup/create',body)
  alert(result.data)
  location('/login')
  
}
  return (
    <div className='container p-5 w-50  rounded mt-5'style={{backgroundColor:"#000000be",color:"white"}}>
          <h1 className='text-center'>Register</h1>

        <Form >
      <Form.Group className="text_filed" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control className='box' type="test" onChange={(e)=>setName(e.target.value)}/>
      </Form.Group>
      <Form.Group className="text_filed" controlId="formBasicEmail">
        <Form.Label>Emai</Form.Label>
        <Form.Control className='box' type="test" onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>
      <Form.Group className="text_filed" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control className='box' type="password" onChange={(e)=>setPassword(e.target.value)}/>
      </Form.Group>
      <button onClick={(e)=>handleupdate(e)} className='signbtn' variant="primary" type="submit">
        signup
      </button>
      <Link to={'/'}>
      <button className='backbtn' variant="primary" type="submit">
        Back
      </button>
      </Link>
    </Form>
    </div>
  )
}

export default Signup