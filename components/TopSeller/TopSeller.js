import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper";
import topSellerData from "./top_seller_data";

const TopSeller = (props) => {
  const data = topSellerData;
  return (
    <section className="tf-section top-seller">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-md-12">
            <div className="heading-live-auctions">
              <h3 className="tf-title">Top Seller</h3>
            </div>
          </div>
          <div className="col-md-12">
            <Swiper
              modules={[Navigation, Scrollbar, A11y]}
              spaceBetween={30}
              navigation
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                767: {
                  slidesPerView: 5,
                },
                991: {
                  slidesPerView: 7,
                },
                1200: {
                  slidesPerView: 8,
                },
                1350: {
                  slidesPerView: 9,
                },
              }}
              scrollbar={{ draggable: true }}
            >
              {data.map((item, index) => (
                <SwiperSlide key={index}>
                  <TopSellerItem item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

const TopSellerItem = (props) => (
  <div className="swiper-container seller style2 seller-slider2 button-arow-style">
    <div className="swiper-wrapper">
      <div className="swiper-slide">
        <div className="slider-item">
          <div className="sc-author-box style-2">
            <div className="author-avatar">
              <img src={props.item.img} alt="" className="avatar" />
              <div className="badge"></div>
            </div>
            <div className="author-infor">
              <h5>
                <Link href="#">
                  <a>{props.item.name}</a>
                </Link>
              </h5>
              <span className="price">{props.item.price}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TopSeller;
