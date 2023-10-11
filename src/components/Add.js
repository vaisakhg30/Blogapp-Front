import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';

function Add() {
  const[id,setId]=useState('')
  const[image,setImage]=useState(null); // Change this to null
  const[title,setTitle]=useState('')
  const[description,setDescription]=useState('')
  const[user,setUser]=useState('')
  const location=useNavigate()


  useEffect(() => {
    setId(uuid());
  }, [])

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  }

  const handleUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('id', id);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('user', user);

    formData.append('image', image); // Append the image to the form data

    try {
      const result = await axios.post('http://localhost:8000/blog/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data' // Set the content type to multipart/form-data
        }  
      });
      console.log(result);
      alert(result.data);
      location('/');
    } catch (error) {
      console.error('Error uploading the image:', error);
    }
  }

  return (
    <div className='container p-5 w-50  rounded mt-5' style={{backgroundColor:"#000000be",color:"white"}}>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Image</Form.Label>
          <Form.Control type="file" onChange={handleImageChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control type="test" onChange={(e)=>setTitle(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control type="test" onChange={(e)=>setDescription(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>User</Form.Label>
          <Form.Control type="test" onChange={(e)=>setUser(e.target.value)} />
        </Form.Group>
        <button className='signbtn' onClick={handleUpdate} variant="primary" type="submit">
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

export default Add;
