import { Button, Container, Row, Col} from 'react-bootstrap';
import { FaGithub, FaGoogle,FaFacebook } from "react-icons/fa";

function Footer(){
    return(
        <div className='footer'>
            <Container>
                <Row>
                    <Col md={6}>
                        <h6>독도 전시관</h6>
                        <span>
                            주소 :경상북도 울릉군 울릉읍 독도 안용복길<br />
                            &copy; 2023 Company, Inc
                        </span>
                    </Col>
                    <Col md={6} className='d-flex justify-content-md-end justify-content-center'>
                    <ul className='footerlist'>
                        <li><a href='#'> 오시는길</a></li>
                        <li><a href='#'> 문의사항</a></li>
                        <li><a href='#'> 공지사항</a></li>
                    </ul>
                </Col>
                </Row>
           </Container>
        </div>
    )
}

export default Footer;