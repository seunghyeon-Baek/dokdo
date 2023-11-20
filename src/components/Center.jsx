import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button, Container, Row, Col, Navbar, Nav, NavDropdown, Card, Offcanvas } from 'react-bootstrap';
import vData from '../data.js'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

function Center(){
  const [myData,setMyData] = useState(vData)
    return(
        <>
         <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide> 
          <Row>
            {
              myData.map(function(item,i){
                return <CardView product={myData[i]} />
              })
            }
          </Row>
        </SwiperSlide>
        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide> */}
      </Swiper>
        </>
    )
}

export default Center;