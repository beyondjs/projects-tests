import * as React from "react";
import * as Swiper from 'swiper';
import {useRef, useEffect} from "react";


const SwiperCasted = (Swiper as unknown as typeof Swiper.default);
export /*bundle*/
const Widget = () => {
    const container = useRef();
    const next = useRef();
    const prev = useRef();
    const pagination = useRef();

    useEffect(() => {

        const swiper = new SwiperCasted(container.current, {
            pagination: {
                el: pagination.current,
                clickable: true
            },
            navigation: {
                nextEl: next.current,
                prevEl: prev.current,
            },
            slidesPerView: 1,
            spaceBetween: 30,
        });
        // SwiperCasted.use([swiper.navigation, swiper.pagination]);

    }, [])
    const x = {a: 11};


    return (

        <div ref={container} className="swiper mySwiper">
            <div className="swiper-wrapper">
                <div className="swiper-slide">Slide 1</div>
                <div className="swiper-slide">Slide 2</div>
                <div className="swiper-slide">Slide 3</div>
                <div className="swiper-slide">Slide 4</div>
                <div className="swiper-slide">Slide 5</div>
                <div className="swiper-slide">Slide 6</div>
                <div className="swiper-slide">Slide 7</div>
                <div className="swiper-slide">Slide 8</div>
                <div className="swiper-slide">Slide 9</div>
            </div>
            <div ref={pagination} className="swiper-pagination"/>
            <div ref={next} className="swiper-button-next"/>
            <div ref={prev} className="swiper-button-prev"/>
        </div>

    )
};
