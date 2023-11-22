import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import { HiOutlineSpeakerphone } from "react-icons/hi";

function CardView({ product }) {
    return (
        <>
            <Row className='justify-content-center mt-5 mb-5'>
                <Col xs={9} md={5} >
                    <Card className='card cardViewFirst'>
                        <Card.Img variant="top" />
                        <Card.Body className='p-5'>
                            <Card.Title className='cardTitle'>독도 바로알기</Card.Title>
                            <Card.Text>
                                독도의 역사를 배우고, 자연을 체험하며 독도영토주권<br />
                                수호 의지를 다질 수 있는 소중한 시간이 되기를 바랍니다.
                            </Card.Text>
                            <Button variant="outline-secondary">바로가기</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={9} md={5}>
                    <Card className='card cardViewSec'>
                        <Card.Img variant="top"/>
                        <Card.Body className='p-5'>
                                <Col>
                                    <Card.Title className='cardTitle'>관람안내</Card.Title>
                                </Col>
                                <Col className='viewInfo'>
                                    <ul className='cardUl'>
                                        <li className='speakerIcon'><HiOutlineSpeakerphone /></li>
                                        <li className='number'>044-999-6393</li>
                                        <li><Button variant="outline-secondary">문의하기</Button></li>
                                    </ul>
                                </Col> 
                            <Card.Text>
                                <ul className=''>
                                    <li><p>관람시간 : 화요일 - 토요일  9:00 ~ 17:00 </p></li>
                                    <li><p>휴관안내 : 일요일, 월요일 및 공휴일 </p></li>
                                    <li><p>위치 : 경상북도 울릉군 울릉읍 독도 안용복길</p></li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default CardView;