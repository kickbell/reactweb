import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap'
import { useState } from 'react';
import data from './data.js';

function App() {

  let [shoes] = useState(data)
  console.log(shoes[0].price)

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
      <div>
        <Container>
          <Row>
            <Col sm>
              <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%" />
              <h4>{shoes[0].title}</h4>
              <p>{shoes[0].price}</p>
            </Col>
            <Col sm>
              <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%" />
              <h4>상품명</h4>
              <p>상품설명</p>
            </Col>
            <Col sm>
              <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%" />
              <h4>상품명</h4>
              <p>상품설명</p>
            </Col>
          </Row>
        </Container>
      </div>

    </div>
  );
}

export default App;
