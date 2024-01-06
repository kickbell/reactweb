import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';


function Cart() {
    let cart = useSelector((state) => state.cart)

    return (
        <Table>
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
                                <td>??</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
    )
}


export default Cart 