import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, Card, Carousel } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { useState } from "react";
 import {useAuth} from './AuthProvider.js'
import axios from '../axiosSetup';
// import {Button} from 'react-bootstrap'
function CityComponent(){
  const {city,setCity}=useAuth();
 const navigate=useNavigate();
 const handleCity=async(cityName)=>{
  setCity(cityName);
    navigate('/search')
 }


    return(
        
        <Container className="mt-5">
      <Row className="mb-4">
        <Col>
          <h1 className="text-center mb-4">Find Your Next Adventure</h1>
          <Form onSubmit={handleCity}>
            <Row>
              <Col md={6} className="mb-3">
                <Form.Group controlId="formLocation">
                  <Form.Label>City</Form.Label>
                  <Form.Control as="select" placeholder="Select city" onChange={(e) => setCity(e.target.value)}>
                  <option value="">Select location</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Jaipur">Jaipur</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Jammu">Jammu</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col className="text-center">
                <Button variant="primary" type="submit" onClick={() => handleCity(city)}>
                  <FaSearch /> Search
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
      <Row className='mb-5'>
        <img src="https://ph-files.imgix.net/7bbf78c4-155b-4e2c-bdbe-ca75c64c4edb?auto=format&fit=crop&frame=1&h=512&w=1024" alt="no background0" ></img>
      </Row>
      <Row>
        <Col md={12}>
          <h2 className="text-left mb-4">Popular Destinations</h2>
          <Carousel>
            <Carousel.Item>
              <Row>
                <Col md={3} className="mb-4">
                  <Card onClick={() => handleCity('Hyderabad')}>
                    <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.F5yrDEhTvQeHJggS-hPqNgHaEK?w=331&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7" style={{height:'200px'}}/>
                    <Card.Body>
                      <Card.Title>Hyderabad</Card.Title>
                      <Card.Text>
                        Explore the rich history and vibrant culture of Hyderabad.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3} className="mb-4">
                  <Card onClick={() => handleCity('Delhi')}>
                    <Card.Img variant="top" src="https://cdn.britannica.com/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg" />
                    <Card.Body>
                      <Card.Title>Delhi</Card.Title>
                      <Card.Text>
                        Experience the bustling city life and historical landmarks of Delhi.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3} className="mb-4">
                  <Card onClick={() => handleCity('Jammu')}>
                    <Card.Img variant="top" src="https://img.veenaworld.com/wp-content/uploads/2023/01/shutterstock_2044050407-scaled.jpg" />
                    <Card.Body>
                      <Card.Title>Jammu</Card.Title>
                      <Card.Text>
                        Enjoy the serene beauty and picturesque landscapes of Kashmir.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3} className="mb-4">
                  <Card  onClick={() => handleCity('Mumbai')}>
                    <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.tGZl769eGg5DhUw3BQJz-AHaEY?w=273&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
                    <Card.Body>
                      <Card.Title>Mumbai</Card.Title>
                      <Card.Text>
                        Discover the lively spirit and entertainment hub of Mumbai.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                <Col md={3} className="mb-4">
                  <Card  onClick={() => handleCity('Bangalore')}>
                    <Card.Img variant="top" src="https://dmgupcwbwy0wl.cloudfront.net/system/images/000/279/744/c55090acf4b5bdfbea938c8543a4ff4f/original/Bangalore-City-Tour-Slide-2.jpg?1551347929" style={{height:'220px'}}/>
                    <Card.Body>
                      <Card.Title>Bangalore</Card.Title>
                      <Card.Text>
                        Explore the IT hub and vibrant culture of Bangalore.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3} className="mb-4">
                  <Card onClick={() => handleCity('Chennai')}>
                    <Card.Img variant="top" src="https://1.bp.blogspot.com/-yPZe5cRlgHI/XjrMcwQRrrI/AAAAAAAAmW8/ime1DdbiY3Q04K-Lj4BBnUi1mMCm7-aIACLcBGAsYHQ/s1600/37750362934_cae02de2af_b.jpg" />
                    <Card.Body>
                      <Card.Title>Chennai</Card.Title>
                      <Card.Text>
                      Chennai is well known for its cultural and historic sites.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3} className="mb-4">
                  <Card onClick={() => handleCity('Jaipur')}>
                    <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.Paq060V_sg9Y-W-iwWnhdQHaFg?rs=1&pid=ImgDetMain" />
                    <Card.Body>
                      <Card.Title>Jaipur</Card.Title>
                      <Card.Text>
                        Discover the palaces and heritage of Jaipur.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3} className="mb-4">
                  <Card onClick={() => handleCity('Kerala')}>
                    <Card.Img variant="top" src="https://th.bing.com/th/id/R.5185474e14b2e354c11a04b988555fe5?rik=3zboFdUppXOreQ&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2fa%2fad%2fMunnar_hillstation_kerala.jpg&ehk=89RsA86QvI%2bKv1YofdDtmyZr1BuoMpFv6cvFPEhXmo4%3d&risl=&pid=ImgRaw&r=0" style={{height:'250px'}} />
                    <Card.Body>
                      <Card.Title>Kerala</Card.Title>
                      <Card.Text>
                      Kerala, India, is a tropical paradise.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}
export default CityComponent;