import { Container, Row, Col } from "react-bootstrap";
import icon1 from '../assets/img/icon_experience.svg';
import icon2 from '../assets/img/icon_theater.svg';


function Banner() {
    return (
        <div>
            <Container className="banWrap justify-content: center">
                <Row>
                    <Col xm={9} md={6} className="d-flex align-items-center line">
                        <Col xm={9} md={9} id="bannertext">
                            <h4>체험존 안내</h4>
                            <p>독도체험관은 대한민국 동쪽 끝, </p>
                            <p> 우리의 섬 독도를 만나는 체험 공간입니다.</p>
                        </Col>
                        <Col xm={3} md={3}>
                             <img src={icon1} alt="icon1" height="75" width="78"/>
                        </Col>
                    </Col>
                    <Col xm={9} md={6} className="d-flex align-items-center">
                        <Col xm={6} md={8} id="bannertext">
                            <h4>영상관 안내</h4>
                            <p>가상현실(VR)과 같은 최신 기법을 활용하여</p>
                            <p>실감형 콘텐츠 등을 적용한 독도 영상관입니다.</p>
                        </Col>
                        <Col xm={3} md={4}>
                             <img src={icon2} alt="icon2" height="75" width="78"/>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Banner;