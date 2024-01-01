import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Row } from 'react-bootstrap'
import { useState } from 'react';
import data from './data.js';
import { Routes, Route, Link } from 'react-router-dom';
import Detail from './pages/Detail.js'
import Card from './components/Card.js'
import NavigationBar from './components/Navbar.js'

function App() {

  let [shoes] = useState(data)

  return (
    <div className="App">
      <NavigationBar/>

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
                      <Card shoe={shoes[index]} idx={index} key={index} />
                    )
                  })
                }
              </Row>
            </Container>
          </>
        } />
        <Route path="/detail" element={<Detail/>} />
      </Routes>

    </div>
  );
}

export default App;
