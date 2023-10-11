import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Allcard({cardlist}) {
  return (
    <div >
        <Link  to={`/getall/${cardlist.id}`} style={{textDecoration:"none"}}>
         <Card className='card' style={{ width: '17rem' ,boxShadow:"2px 2px 2px 2px #000000be", padding:"5px", margin:"22px", margin: "auto"}}>
      <Card.Img style={{height:"11rem"}} variant="top" src={URL.createObjectURL(new Blob([Uint8Array.from(cardlist.image.data)]))} alt="Blog Image"/>
      <Card.Body>
        <Card.Title><strong>Title:</strong>{cardlist.title}</Card.Title>
        <Card.Text><strong>Description:</strong>{cardlist.description.slice(0,30)}</Card.Text>
        <Card.Text><strong>User:</strong>{cardlist.user}</Card.Text>
      </Card.Body>
    </Card>
    </Link>
    </div>
  )
}

export default Allcard