import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap'
import { useState } from 'react';
import data from './data.js';
import { Routes, Route, Outlet } from 'react-router-dom';
import Detail from './pages/Detail.js'
import Card from './components/Card.js'
import NavigationBar from './components/NavigationBar.js'
import axios from 'axios'

function App() {

  let [shoes, setShoes] = useState(data)

  return (
    <div className="App">
      <NavigationBar />

      <Routes>
        <Route path="/" element={<Main shoes={shoes} />} />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="*" element={<div>없는페이지</div>} />

        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버임</div>} />
          <Route path="location" element={<About />} />
        </Route>

        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
        </Route>
      </Routes>


      <button onClick={() => {
        //로딩중보이기
        axios.get('https://codingapple1.github.io/shop/data2.json')
          .then((result) => {
            console.log(result.data)
            // let copy = [...shoes, ...result.data];
            var copy = [...shoes];
            copy = copy.concat(result.data);
            setShoes(copy)
            //로딩중숨기기
          })
          .catch((error) => {
            console.log(error)
            //로딩중숨기기
          })

        
        Promise.all([axios.get('url1'), axios.get('url2')])
        .then(()=> {

        })

        //URLSession같은 내장기능
        fetch('URL')
        .then(결과 => 결과.json()) //JSON -> array/object 변환 
        .then((결과) => { 
          console.log(결과) 
        } )


      }}>리퀘스트 요청</button>





    </div>
  );
}

function About() {
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Main(props) {
  return (
    <>
      <div className="main-bg"></div>
      <Container>
        <Row>
          {
            props.shoes.map((shoe, index) => {
              return (
                <Card shoe={props.shoes[index]} idx={index} key={index} />
              )
            })
          }
        </Row>
      </Container>
    </>
  )
}

function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}

export default App;
