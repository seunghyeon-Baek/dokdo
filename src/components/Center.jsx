import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Row, Col, Card, Container } from 'react-bootstrap';
import vData from '../data.js'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

function Center() {
  const [myData, setMyData] = useState(vData)
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={40}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Container className='mb-2 mb-md-5'>
            <Row >
              {
                myData.map(function (item, i) {
                  return <CardView product={myData[i]} />
                })
              }
            </Row>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <Container className='mb-2 mb-md-5'>
            <Row >
              {
                myData.map(function (item, i) {
                  return <CardView product={myData[i]} />
                })
              }
            </Row>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <Container className='mb-2 mb-md-5'>
            <Row >
              {
                myData.map(function (item, i) {
                  return <CardView product={myData[i]} />
                })
              }
            </Row>
          </Container>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
function CardView({ product }) {
  return (
    <>
      <Col sm={9} md={3} className='mb-2'>
        <Card className='card'>
          <span className='poster'>
            <Card.Img variant="top" src={`./img/${product.img}`} />
          </span>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
              {product.content}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}


export default Center;