import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TabItems from "../components/TabItems";

function Detail(props) {

  let { id } = useParams()
  let 찾은상품 = props.shoes.find((x) => x.id == id)
  let [count, setcount] = useState(0)
  let [alert, setalert] = useState(false)
  let [fade2, setFade2] = useState('')

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
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>

      <TabItems></TabItems>


    </div>




  )
}

export default Detail;