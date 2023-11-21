import { Container, Row, Col } from "react-bootstrap";

function Banner(){
    return(
        <div className="banWrap">
            <Container>
               <Row>
                    <Col>
                    <h3>테스트배너</h3>
                    </Col>
               </Row>
            </Container>
        </div>
    )
}
export default Banner;