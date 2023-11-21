import React, { useState } from 'react';
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
  const [myData] = useState(vData)

  const firstSlideData = myData.slice(0, 3);
  const secondSlideData = myData.slice(3, 6);
  const thirdSlideData = myData.slice(6, 9);
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
            <Row>
              {firstSlideData.map((item, i) => (
                <CardView key={i} product={item} />
              ))}
            </Row>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <Container className='mb-2 mb-md-5'>
            <Row>
              {secondSlideData.map((item, i) => (
                <CardView key={i} product={item} />
              ))}
            </Row>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <Container className='mb-2 mb-md-5'>
            <Row>
              {thirdSlideData.map((item, i) => (
                <CardView key={i} product={item} />
              ))}
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
      <Col sx={6} md={4} className='mb-2'>
        <Card className='cardPoster'>
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