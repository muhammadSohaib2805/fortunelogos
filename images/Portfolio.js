import React, { useState } from 'react'
import Lightbox from "react-image-lightbox";
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js'
import { NavLink } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import { Autoplay } from 'swiper';

const Portfolio = () => {

    // const Images = [
    //     require("../assets/images/slider/as-if-i-knew-what-i-was-talking-about-1.webp"),
    //     require("../assets/images/slider/Abraham-Loorig-New.webp"),
    //     require("../assets/images/slider/I-am-kind-of-my-castle.webp"),
    //     require("../assets/images/slider/Patty-Glaser-Final-Wraparound-Cover-New.webp"),
    //     require("../assets/images/slider/she-is-the-poem-2.webp"),
    //     require("../assets/images/slider/the-devil-picked-the-girls-1.webp"),
    //     require("../assets/images/slider/Loving-Hard-when-theyre-hard-to-love.webp"),
    //     require("../assets/images/slider/book_2.webp"),
    //     require("../assets/images/slider/book_3.webp"),
    //     require("../assets/images/slider/book_4.webp"),
    //     // require("../assets/images/slider/book_5.webp"),
    //     require("../assets/images/slider/book_6.webp"),
    //     require("../assets/images/slider/book_7.webp"),
    //     require("../assets/images/slider/book_8.webp"),
    //     require("../assets/images/slider/book_10.webp"),
    //     require("../assets/images/slider/A-boat-reincarnated-1.webp"),
    //     require("../assets/images/slider/Frank-Roselli-New-eBook-Cover-new.webp"),
    //     require("../assets/images/slider/Big-mistake-New.webp"),
    //     require("../assets/images/slider/Celebrating-KMET.webp"),
    //     require("../assets/images/slider/Desires-behind-a-waterfall.webp"),
    //     require("../assets/images/slider/Filled-with-his-love-1.webp"),
    //     require("../assets/images/slider/mommy-what-is-a-slave-1.webp"),
    //     require("../assets/images/slider/My-Trip-With-Elvis.webp"),
    //     require("../assets/images/slider/Rugged-Ribbons.webp"),
    //     require("../assets/images/slider/the-defination-guide-to-1.webp"),
    //     require("../assets/images/slider/the-jesters-2-1.webp"),
    //     require("../assets/images/slider/the-sea-that-bind-us.webp"),
    //     require("../assets/images/slider/The-umbrella-of-worship.webp"),
    //     require("../assets/images/slider/The-wheels-on-the-bus.webp"),
    //     require("../assets/images/slider/what-lives-2.webp"),
    //     require("../assets/images/slider/Wild-Birds-in-my-backyard.webp"),
    // ];

    const Images = [
        require("../assets/images/slider/new/02.webp"),
        require("../assets/images/slider/new/03.webp"),
        require("../assets/images/slider/new/04.webp"),
        require("../assets/images/slider/new/05.webp"),
        require("../assets/images/slider/new/06.webp"),
        require("../assets/images/slider/new/07.webp"),
        require("../assets/images/slider/new/08.webp"),
        require("../assets/images/slider/new/09.webp"),
        require("../assets/images/slider/new/10.webp"),
        require("../assets/images/slider/new/11.webp"),
        require("../assets/images/slider/new/12.webp"),
        require("../assets/images/slider/new/13.webp"),
        require("../assets/images/slider/new/14.webp"),
        require("../assets/images/slider/new/15.webp"),
        require("../assets/images/slider/new/16.webp"),
        require("../assets/images/slider/new/17.webp"),
        require("../assets/images/slider/new/18.webp"),
        require("../assets/images/slider/new/19.webp"),
        
      ];
      const ImagesTwo = [
        // require("../assets/images/slider/new/20.webp"),
        require("../assets/images/slider/new/21.webp"),
        require("../assets/images/slider/new/22.webp"),
        require("../assets/images/slider/new/23.webp"),
        require("../assets/images/slider/new/24.webp"),
        require("../assets/images/slider/new/25.webp"),
        require("../assets/images/slider/new/26.webp"),
        require("../assets/images/slider/new/27.webp"),
        require("../assets/images/slider/new/28.webp"),
        require("../assets/images/slider/new/29.webp"),
        require("../assets/images/slider/new/30.webp"),
        require("../assets/images/slider/new/31.webp"),
        require("../assets/images/slider/new/32.webp"),
        require("../assets/images/slider/new/33.webp"),
        require("../assets/images/slider/new/34.webp"),
        require("../assets/images/slider/new/35.webp"),
        require("../assets/images/slider/new/36.webp"),
        require("../assets/images/slider/new/01.webp"),
      ];
      

    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const [isOpenTwo, setIsOpenTwo] = useState(false);
    const [photoIndexTwo, setPhotoIndexTwo] = useState(0);

    const handleOpen = (index) => {
        setPhotoIndex(index);
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const handlePrev = () => {
        setPhotoIndex((photoIndex + Images.length - 1) % Images.length);
    };

    const handleNext = () => {
        setPhotoIndex((photoIndex + 1) % Images.length);
    };

    const handleTwoOpen = (index) => {
        setPhotoIndexTwo(index);
        setIsOpenTwo(true);
    };

    const handleTwoClose = () => {
        setIsOpenTwo(false);
    };

    const handleTwoPrev = () => {
        setPhotoIndexTwo((photoIndexTwo + ImagesTwo.length - 1) % ImagesTwo.length);
    };

    const handleTwoNext = () => {
        setPhotoIndex((photoIndexTwo + 1) % ImagesTwo.length);
    };

    return (
        <div>
            <div className="portfolio-banner py-5">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="text-white fs_60 fw_400">Our Recent Portfolio</h2>
                        <p className="text-white fs_16 fw_400 mt-4">Our work speaks for itself. We believe in offering the best value and most personalised service to you.</p>
                    </div>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={20}
                        grabCursor={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        breakpoints={{
                            '991': {
                                slidesPerView: 5,
                            },
                            '768': {
                                slidesPerView: 4,
                            },
                            '0': {
                                slidesPerView: 2,
                            },
                        }}
                        style={{paddingBottom:'80px'}}
                        className="mySwiper"
                    >
                        {Images.map((item, index) => (
                            <SwiperSlide>
                                <div className='port-box position-relative overflow-hidden'>
                                    <img src={item} alt="" className="img-fluid" />
                                    <div className="box-content"> <NavLink key={index} onClick={() => handleOpen(index)}><FaPlus /></NavLink> </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={20}
                        grabCursor={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        breakpoints={{
                            '991': {
                                slidesPerView: 5,
                            },
                            '768': {
                                slidesPerView: 4,
                            },
                            '0': {
                                slidesPerView: 2,
                            },
                        }}
                        className="pt-5"
                    >
                        {ImagesTwo.map((item, index) => (
                            <SwiperSlide>
                                <div className='port-box position-relative overflow-hidden'>
                                    <img src={item} alt="" className="img-fluid" />
                                    <div className="box-content"> <NavLink key={index} onClick={() => handleTwoOpen(index)}><FaPlus /></NavLink> </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    {isOpen && (
                        <Lightbox
                            mainSrc={Images[photoIndex]}
                            nextSrc={Images[(photoIndex + 1) % Images.length]}
                            prevSrc={Images[(photoIndex + Images.length - 1) % Images.length]}
                            onCloseRequest={handleClose}
                            onMovePrevRequest={handlePrev}
                            onMoveNextRequest={handleNext}
                        />
                    )}
                    {isOpenTwo && (
                        <Lightbox
                            mainSrc={ImagesTwo[photoIndexTwo]}
                            nextSrc={ImagesTwo[(photoIndexTwo + 1) % ImagesTwo.length]}
                            prevSrc={ImagesTwo[(photoIndexTwo + ImagesTwo.length - 1) % ImagesTwo.length]}
                            onCloseRequest={handleTwoClose}
                            onMovePrevRequest={handleTwoPrev}
                            onMoveNextRequest={handleTwoNext}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Portfolio