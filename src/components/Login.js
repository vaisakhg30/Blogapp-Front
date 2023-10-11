import axios from 'axios';
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const location=useNavigate()

  const handleupdate=async(e)=>{
    e.preventDefault()
    if(email == "" || password == ""){
      alert("enter details")
      return;
    }
  const body={
  email,password
  }
  await axios.post('http://localhost:8000/login/loginuser',body).then((response)=>{
    if (response.status === 200) {
      localStorage.setItem(
        'access_token',
        response.data.access_token
      )
      console.log(response.data);
      alert("LOGIN SUCCESS")
      location('/create')
    }
    else{
      alert("please check credentials") 
    }
  }).catch((error)=>{
    alert("please check credentials") 
  })  
  }

  return (
    <div className='container p-5 w-50  rounded mt-5'style={{backgroundColor:"#000000be",color:"white"}}>
         <Form>
         <h1 className='text-center'>Login</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Emai</Form.Label>
        <Form.Control type="email" onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" onChange={(e)=>setPassword(e.target.value)}/>
      </Form.Group>
      <button onClick={(e)=>handleupdate(e)}  className='signbtn' variant="primary" type="submit">
        Submit
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

export default Login