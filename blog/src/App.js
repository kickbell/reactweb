import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집11'
  let [글제목, a] = useState(['남자 코트 추천', '여자 코트 추천', '할버지 코트 추천'])
  let [logo, setLogo] = useState('ReactBlog')

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{ logo }</h4>
      </div> 
      <div className="list">
        <h4>{ 글제목[0] }</h4>
        <p>2월 17일 발행2</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
