
/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [선택한인덱스, 선택한인덱스변경] = useState(0);
  let [입력값, 입력값변경] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <h4> 블로그 </h4>
      </div>

      <button onClick={() => {
        let copy = [...글제목];
        copy[0] = '여자 코트 추천'
        글제목변경(copy)
      }}>글수정</button>

      <button onClick={() => {
        let copy = [...글제목];
        copy.sort()
        글제목변경(copy)
      }}>가나다순 정렬</button>

      {/* <div className="list">
        <h4>{ 글제목[0] } <span onClick={ ()=>{ 따봉변경(따봉+1) } }>👍🏻</span> { 따봉 }</h4>
        <p>2월 17일 발행2</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick = { () => { setModal(!modal) }}>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div>  */}

      {
        글제목.map(function (title, index) {
          return (
            <div className="list" key={index}>
              <h4 onClick={() => { 
                setModal(!modal) 
                선택한인덱스변경(index)
                }}>
                {title}
                <span onClick={() => {
                  let copy = [...따봉];
                  copy[index] = 따봉[index] + 1
                  따봉변경(copy)}}>👍🏻
                </span>
                {따봉[index]}
                </h4>
              <p>2월 17일 발행</p>
            </div>
          )
        })
      }

      {modal == true ? <Modal 선택한인덱스={선택한인덱스} 글제목변경={글제목변경} color={'yellow'} 글제목={글제목}/> : null}

      <input type="text" onChange={(e)=>{입력값변경(e.target.value)}}/>
      <button onClick={()=>{
          let copy = [...글제목];
          copy.push(입력값)
          글제목변경(copy)
      }}>글발행
      </button>

    </div>
  );
}

function Modal(props) {
    return (
      <div className="modal" style={{background : props.color}}>
        <h4>{props.글제목[props.선택한인덱스]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={() => {
          let copy = [...props.글제목];
          copy[0] = '글제목바뀜'
          props.글제목변경(copy)
        }}>글수정
        </button>
      </div>
    )  
}

export default App;
