import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TabItems from "../components/TabItems";
import { addItem } from "../\bstore/cartSlice";
import { useDispatch } from "react-redux";

function Detail(props) {

  let { id } = useParams()
  let 찾은상품 = props.shoes.find((x) => x.id == id)
  let [count, setcount] = useState(0)
  let [alert, setalert] = useState(false)
  let [fade2, setFade2] = useState('')

  let dispatch = useDispatch()
  let navigate = useNavigate()

  useEffect(()=>{ console.log('sss') }, [ ])


  useEffect(() => {
    setFade2('end')
    return () => {
      setFade2('')
    }
  }, [])

  useEffect(() => {
    let a = setTimeout(() => { setalert(!alert) }, 2000)
    return () => {
      clearTimeout(a)
    }
  }, [])

  useEffect(() => {
		let data = localStorage.getItem('watched')
	  data = JSON.parse(data)
	  data.push(찾은상품.id)
	  data = new Set(꺼낸거) //Set으로 변경
	  data = Array.from(data) //Array로 변경
	  localStorage.setItem('watched', JSON.stringify(data))
  }, [])

  return (
    <div className={'container start ' + fade2}>
      {
        alert == true ? <div>2초이내 구매시 할인</div> : null
      }
      <div className="row">
        <div className="col-md-6">
          <img src={'https://codingapple1.github.io/shop/shoes' + id + '.jpg'} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          <button className="btn btn-danger" onClick={() => {
            dispatch(addItem(찾은상품));
            navigate('/cart');
          }}>주문하기</button>
        </div>
      </div>

      <TabItems shoes={props.shoes}></TabItems>
    </div>
  )
}

export default Detail;