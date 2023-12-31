import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap'
import { useState } from 'react';
import data from './data.js';

function App() {

  let [shoes] = useState(data)

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">쇼핑몰</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>

      <Container>
        <Row>            
          {
            shoes.map(function(shoe, index) {
              return <GridItem shoe={shoes[index]} key={index}/>
            })
          }
        </Row>
      </Container>

    </div>
  );
}

function GridItem(props){ 
  return (
    <Col sm>
    <img src={`https://codingapple1.github.io/shop/shoes${props.shoe.id+1}.jpg`} width="80%" alt={props.shoe.title} />
    <h4>{props.shoe.title}</h4>
    <p>{props.shoe.price}</p>
    </Col>
  )
}

export default App;
