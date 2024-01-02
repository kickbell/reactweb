import { Col } from 'react-bootstrap'

function Card(props) {
    return (
        <Col sm>
            <img src={'https://codingapple1.github.io/shop/shoes' + (props.idx + 1) + '.jpg'} width="80%" />
            <h4>{props.shoe.title}</h4>
            <p>{props.shoe.price}</p>
        </Col>    
    )
}

export default Card
