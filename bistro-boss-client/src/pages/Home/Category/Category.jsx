import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import slide1 from "../../../assets/home/slider/slide1.jpg";
import slide2 from "../../../assets/home/slider/slide2.jpg";
import slide3 from "../../../assets/home/slider/slide3.jpg";
import slide4 from "../../../assets/home/slider/slide4.jpg";
import slide5 from "../../../assets/home/slider/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
        <SectionTitle subHeading={'---From 11:00am to 10:00pm---'} heading={'ORDER ONLINE'}></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-16"
      >
        <SwiperSlide>
          <img src={slide1} alt="slide" />{" "}
          <h3 className="text-sm text-center -mt-12 text-white uppercase md:text-3xl lg:text-3xl">
            salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="slide" />{" "}
          <h3 className="text-sm text-center -mt-12 text-white uppercase md:text-3xl lg:text-3xl">
            pizza
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="slide" />{" "}
          <h3 className="text-sm text-center -mt-12 text-white uppercase md:text-3xl lg:text-3xl">
            soup
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="slide" />{" "}
          <h3 className="text-sm text-center -mt-12 text-white uppercase md:text-3xl lg:text-3xl">
            desert
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="slide" />{" "}
          <h3 className="text-sm text-center -mt-12 text-white uppercase md:text-3xl lg:text-3xl">
            vip salad
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
