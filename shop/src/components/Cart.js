import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { changeName } from '../store';


function Cart() {
    let cart = useSelector((state) => state.cart)
    let dispatch = useDispatch()

    let state = useSelector((state) => state)

    return (
        <Table>
            {state.user}
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
                                        dispatch(changeName())
                                    }}>바꾸기</button>
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