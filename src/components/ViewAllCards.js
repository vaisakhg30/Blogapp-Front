import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import { Row } from 'react-bootstrap';

function ViewAllCards() {
    const[viewall,setView]=useState([])
    
    const fetchData=async()=>{
        const result=await axios.get('http://localhost:8000/blog/getall')
        setView(result.data)
    }
    useEffect(()=>{
        fetchData()
    },[])
    const params=useParams()

    const blogs=viewall.find(item=>item.id == params.id)
    console.log(blogs);

  return (
    <>
        {
            
            blogs?(
                
                <Card style={{ width: '45rem', boxShadow: "2px 2px 2px 2px #000000be", padding: "5px", margin: "22px", margin: "auto" }}>
                <Card.Img style={{ height: "19rem" }} variant="top" src={URL.createObjectURL(new Blob([Uint8Array.from(blogs.image.data)]))} alt="Blog Image" />
                <Card.Body>
                    <Card.Title>Title: {blogs.title}</Card.Title>
                    <Card.Text>Description: {blogs.description}</Card.Text>
                    <Card.Text>User: {blogs.user}</Card.Text>
                </Card.Body>
            </Card>
     ):""
        }
       
    </>
  )
}

export default ViewAllCards