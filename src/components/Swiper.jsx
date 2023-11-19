import React, { useRef, useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../assets/css/style.css';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

function MainSwiper() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        loop={true} // 첫번째 슬라이드로 이동
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <Row>
          <Col sx={12} md={6} className='order-md-1 order-2 position-relative'>
            <SwiperSlide>
              <div className="image-container">
                <img src='./img/dokdo1.jpg' alt='독도이미지' />
                <div className="text-overlay">
                  <h3>대한민국 독도</h3>
                  <p>독도에 대한 의미를 되새기는 특별한 공간, 독도의 삶과 역사를 잊지 않기 위해 독도전시관이 앞장서겠습니다.</p>
                  <Button variant="outline-primary">전시안내보기</Button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="image-container">
                <img src='./img/dokdo2.jpg' alt='독도이미지' />
                <div className="text-overlay">
                  <h3>대한민국 독도</h3>
                  <p>독도전시관은 독도에 대한 올바른 이해와 영토 주권의식을 확산시키고자 마련된 공간입니다.</p>
                  <Button variant="outline-primary">전시안내보기</Button>
                </div>
              </div>
            </SwiperSlide>
          </Col>
        </Row>
      </Swiper>
    </>
  )
}
export default MainSwiper;