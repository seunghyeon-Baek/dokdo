import { Container, NavDropdown, Nav,Navbar} from 'react-bootstrap';
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/style.css';

import logo from '../assets/img/simbol.svg';

function NavBar(){
    const [show, setShow] = useState(false);
    const showDropdown = (e)=>{
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }

    return (
        <div className="App">
          <Navbar expand="lg" id="Navbar"  variant="dark">
            <Container>
              <Navbar.Brand href="#home">
              <img src= {logo}  width='40px' height='40px' style={{ marginRight: '10px' }}  alt='태극기' />
                세종특별자치시교육청 | 독도 전시관
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">  {/* 햄버거버튼 */}
                <Nav className="me-auto">
                  <NavDropdown title="전시관 소개" id="basic-nav-dropdown"
                   show={show}
                   onMouseEnter={showDropdown}
                   onMouseLeave={hideDropdown}
                  >
                    <NavDropdown.Item href="#">인사말</NavDropdown.Item>
                    <NavDropdown.Item href="#">오시는길</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="관람 정보" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#">관람 안내</NavDropdown.Item>
                    <NavDropdown.Item href="#">예약</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="독도 자료실" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#">독도현황</NavDropdown.Item>
                    <NavDropdown.Item href="#">독도사진</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="열린광장" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#">공지사항</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Nav>
                  <Nav.Link href="#">로그인</Nav.Link>
                  <Nav.Link href="#">회원가입</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      );
    }

export default NavBar;