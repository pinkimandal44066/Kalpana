import React from 'react'

const Slidertwo = () => {
  return (
    <div>
      <div className="relative">
  <div className="ml-[15%] -mt-20 mb-80">
    <Swiper
      onSwiper={setThumbsSwiper}
      loop={true}
      spaceBetween={10}
      slidesPerView={4}
      freeMode={true}
      watchSlidesProgress={true}
      modules={[FreeMode, Navigation, Thumbs]}
      className="thumb-swiper"
    >
      <div className="flex fixed top-[9%] left-10 z-50  h-full">
          <button onClick={handleButtonClick} className="btn">
            <div className="flex gap-3">
              <MdArrowBackIosNew className="bg-yellow-400" />
              <MdArrowForwardIos />
            </div>
          </button>
        </div>
      {/* Add an empty SwiperSlide for the left space */}
      <SwiperSlide>
        
      </SwiperSlide>
      
      {/* Your existing SwiperSlides */}
      <SwiperSlide>
        <img className="slide-image" src={img22} alt="Nature 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="slide-image" src={img24} alt="Nature 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="slide-image" src={img25} alt="Nature 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="slide-image" src={img23} alt="Nature 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="slide-image" src={img25} alt="Nature 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="slide-image" src={img24} alt="Nature 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="slide-image" src={img23} alt="Nature 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="slide-image" src={img22} alt="Nature 1" />
      </SwiperSlide>
      
    </Swiper>
  </div>
</div>
    </div>
  )
}

export default Slidertwo
