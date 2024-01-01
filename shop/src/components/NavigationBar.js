import { Navbar, Container, Nav} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

function NavigationBar() {
    let navigate = useNavigate();

    return (
        <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail')}}>Detail</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/about/member')}}>About</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/event/one')}}>Event</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default NavigationBar;