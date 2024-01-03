import { Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

function Card(props) {
    let navigate = useNavigate();

    return (
        <div onClick={() => { navigate('/detail/' + props.shoe.id)}}>
            <Col sm>
                <img src={'https://codingapple1.github.io/shop/shoes' + (props.idx + 1) + '.jpg'} width="80%" />
                <h4>{props.shoe.title}</h4>
                <p>{props.shoe.price}</p>
            </Col>
        </div>
    )
}

export default Card
