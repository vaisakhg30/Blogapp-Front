import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Tencards({alldata}) {
  return (
    
    <div>
        <Link to={`/view/${alldata.id}`} style={{textDecoration:"none"}}>
         <Card style={{ width: '17rem' ,boxShadow:"5px 5px 5px 5px #000000be", padding:"5px", margin:"22px", margin: "auto"}}>
      <Card.Img style={{height:"11rem"}} variant="top" src={URL.createObjectURL(new Blob([Uint8Array.from(alldata.image.data)]))} alt="Blog Image"/>
      <Card.Body>
        <Card.Title><strong>Title:</strong>{alldata.title}</Card.Title>
        <Card.Text><strong>Description:</strong>{alldata.description.slice(0,100)}</Card.Text>
        <Card.Text><strong>User:</strong>{alldata.user}</Card.Text>
      </Card.Body>
    </Card>
    
    </Link>
    
    
    </div>
    
  )
}

export default Tencards
