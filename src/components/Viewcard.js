import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';

function Viewcard() {
    const [view, setView] = useState([]);
    const [viewdata, setViewData] = useState(null); // Initialize viewdata as null

    const fetchData = async () => {
        const response = await axios.get('http://localhost:8000/blog/getten');
        setView(response.data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const params = useParams();

    useEffect(() => {
        // Find the viewdata based on params.id when the view data is fetched
        const foundData = view.find(item => item.id == params.id);
        if (foundData) {
            setViewData(foundData);
        }
    }, [view, params.id]);

    if (!viewdata) {
        return <div className='text-center p-5' style={{marginTop:"150px"}}>
          <Spinner animation="border" variant="dark" />

        </div>; // Render a loading message or spinner while data is being fetched
    }

    return (
        <div>
            <Card style={{ width: '45rem', boxShadow: "5px 5px 5px 5px #000000be", padding: "5px", margin: "22px", margin: "auto" }}>
                <Card.Img style={{ height: "19rem" }} variant="top" src={URL.createObjectURL(new Blob([Uint8Array.from(viewdata.image.data)]))} alt="Blog Image" />
                <Card.Body>
                    <Card.Title>Title: {viewdata.title}</Card.Title>
                    <Card.Text>Description: {viewdata.description.slice(0,100)}</Card.Text>
                    <Card.Text>User: {viewdata.user}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Viewcard;
