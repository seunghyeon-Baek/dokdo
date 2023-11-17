import { Container, NavDropdown, Nav,Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar(){
   
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">독도 전시관</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />  
            <Navbar.Collapse id="basic-navbar-nav">  {/* 햄버거버튼 */}
              <Nav className="me-auto">
                <NavDropdown title="전시관 소개" id="basic-nav-dropdown">
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
                <Nav.Link href="#deets">로그인</Nav.Link>
              </Nav>
              
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }

export default NavBar;