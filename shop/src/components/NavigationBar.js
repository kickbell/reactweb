import { Navbar, Container, Nav } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
// import { useQuery } from '@tanstack/react-query';

function NavigationBar() {
  let navigate = useNavigate();

  // let result = useQuery('작명', ()=>
  //   axios.get('https://codingapple1.github.io/userdata.json')
  //   .then((a)=>{ 
  //     console.log('요청됨')
  //     return a.data 
  //   })
  //   { staleTime : 2000 } //2초 안에는 refetch 안함
  // )

  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
          <Nav.Link onClick={() => { navigate('/detail') }}>Detail</Nav.Link>
          <Nav.Link onClick={() => { navigate('/about/member') }}>About</Nav.Link>
          <Nav.Link onClick={() => { navigate('/event/one') }}>Event</Nav.Link>
        </Nav>
        <Nav className="me-auto">반가워요 kim
          {/* {result.isLoading && '로딩중'}
          {result.error && '에러남'}
          {result.data && result.data.name} */}
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavigationBar;