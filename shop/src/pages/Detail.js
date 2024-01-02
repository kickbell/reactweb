import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(props) {

  //밑에 html코드가 렌더링이 다실행이 되고 나서 실행
  useEffect(()=> {
    // for (var i = 0; i < 10000; i++) {
    //   console.log('dd')
    // }
  })

  let [modal, setModal] = useState(false);


  setTimeout(()=>{ setModal(!modal)}, 1000)
  

  let [count, setcount] = useState(0)

  let {id} = useParams()
  let 찾은상품 = props.shoes.find((x) => x.id == id )

  function Event() {
    return (
      <div>2초이내 구매시 할인</div>
    )
  }

  return (
    <div className="container">
      { modal == true ? <Event/> : null }
      <div className="row">
        <div className="col-md-6">
          <img src={'https://codingapple1.github.io/shop/shoes' + id + '.jpg'} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  )
}

export default Detail;