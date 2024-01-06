import { useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';

function TabItems(props) {
  let [selectedIdx, setSelectedIdx] = useState(0)

  return (
    <>
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link onClick={() => { setSelectedIdx(0) }} eventKey="link0">Option 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => { setSelectedIdx(1) }} eventKey="link1">Option 2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => { setSelectedIdx(2) }} eventKey="link2">Option 3</Nav.Link>
        </Nav.Item>
      </Nav>

      {/* { 탭 == 0 ? <div>내용 0</div> : 탭 == 1 ? <div>내용 1</div> : <div>내용 2</div> } */}

      <TapContent shoes={props.shoes} selectedIdx={selectedIdx}></TapContent>
    </>
  );
}

function TapContent({ selectedIdx, shoes }) {
  // if (탭 == 0) {
  //   return <div>내용 0</div>
  // } else if (탭 == 1) {
  //   return <div>내용 1</div>
  // } else if (탭 == 2) {
  //   return <div>내용 2</div>
  // }
  let [fade, setFade] = useState('')

  // console.log("TapContent..")
  // console.log(shoes)

  useEffect(() => {
    let timer = setTimeout(() => { setFade('end') }, 100);
    return () => {
      clearTimeout(timer)
      setFade('')
    }
  }, [selectedIdx])

  return (
    <div className={'start ' + fade}>
      {[<div>{shoes[0].title}</div>, <div>{shoes[1].title}</div>, <div>{shoes[2].title}</div>][selectedIdx]}
    </div>
  )
}


export default TabItems;