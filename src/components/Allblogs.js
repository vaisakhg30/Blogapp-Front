import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Allcard from './Allcard';
import Spinner from 'react-bootstrap/Spinner';

function Allblogs() {
  const [loading, setLoading] = useState(true); // Define loading state variable

  const [allCard, setAllCard] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/blog/getall');
      console.log(response.data);
      setAllCard(response.data);
      setLoading(false); // Set loading to false when data is fetched
    } catch (error) {
      console.error(error);
      setLoading(false); // Set loading to false in case of an error
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Row>
      {loading ? (
        <Col className='text-center p-5' style={{ marginTop: '150px' }}>
          <Spinner animation='border' variant='dark' />
        </Col>
      ) : (
        allCard.map((item) => (
          <Col className='p-5' lg={4} md={6} key={item.id}>
            <Allcard cardlist={item}></Allcard>
          </Col>
        ))
      )}
    </Row>
  );
}

export default Allblogs;
