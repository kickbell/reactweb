import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
// import { changeName, increase } from '../store';
// import { changeName, increase } from '../\bstore/userSlice';
import { addCount } from '../\bstore/cartSlice';
import { useState, memo, useMemo } from 'react';

// let HeavyChild = memo( function(){
//     console.log('재렌더링됨')
//     return <div>자식임</div>
// })

// function 함수() {
//     return '반복문10억번돌린결과'
// }

function Cart() {
    let cart = useSelector((state) => state.cart)
    let dispatch = useDispatch()
    // let [count, setCount] = useState(0)

    // let result = useMemo(()=>{return 함수()}, [])

    // let state = useSelector((state) => state)
    // console.log(state)

    return (
        <Table>
            {/* <HeavyChild count={count}></HeavyChild> */}
            {/* <button onClick={()=>{ setCount(count+1)}}>+</button> */}
            {/* <h6>{state.user.name}, {state.user.age}의 장바구니</h6>
            <button onClick={()=>{
                dispatch(increase(10))
            }}>age+1</button> */}
            <thead>
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                </tr>
            </thead>
            <tbody>
                {
                    cart.map((cart, index) => {
                        return (
                            <tr>
                                <td>{cart.id}</td>
                                <td>{cart.name}</td>
                                <td>{cart.count}</td>
                                <td>
                                    <button onClick={() => {
                                        dispatch(addCount(cart.id))
                                    }}>+</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
    )
}


export default Cart 