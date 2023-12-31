import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap'
import { useState } from 'react';
import data from './data.js';
import { Routes, Route, Link } from 'react-router-dom';

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

      <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link>

      <Routes>
        <Route path="/" element={
          <>
            <div className="main-bg"></div>
            <Container>
              <Row>
                {
                  shoes.map((shoe, index) => {
                    return (
                      <GridItem shoe={shoes[index]} idx={index} key={index} />
                    )
                  })
                }
              </Row>
            </Container>
          </>
        } />
        <Route path="/detail" element={
          <>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                </div>
                <div className="col-md-6">
                  <h4 className="pt-5">상품명</h4>
                  <p>상품설명</p>
                  <p>120000원</p>
                  <button className="btn btn-danger">주문하기</button>
                </div>
              </div>
            </div>
          </>
        } />
      </Routes>

    </div>
  );
}

function Main() {

}

function GridItem(props) {
  return (
    <Col sm>
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.idx + 1) + '.jpg'} width="80%" />
      <h4>{props.shoe.title}</h4>
      <p>{props.shoe.price}</p>
    </Col>
  )
}

export default App;
