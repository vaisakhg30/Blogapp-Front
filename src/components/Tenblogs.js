import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import Cardlist from './Tencards';
import Spinner from 'react-bootstrap/Spinner';

function Tenblogs() {
  const [blogList, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/blog/getten');
      setBlogs(response.data);
      setLoading(false); // Set loading to false once data is fetched
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false); // Set loading to false in case of an error
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Row>
      {loading ? ( // Show spinner while loading is true
        <Col className='text-center p-5' style={{marginTop:"150px"}}>
          <Spinner animation="border" variant="dark" />
        </Col>
      ) : (
        // Render blog cards once loading is false
        blogList.map(item => (
          <Col className='p-5' lg={4} md={6} key={item.id}>
            <Cardlist alldata={item}></Cardlist>
          </Col>
        ))
      )}
    </Row>
  );
}

export default Tenblogs;
