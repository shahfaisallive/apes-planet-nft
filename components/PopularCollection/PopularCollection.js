import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper";
import popularCollectionData from "./popular_collection_data";

const PopularCollection = (props) => {
  const data = popularCollectionData;
  return (
    <section className="tf-section popular-collection">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-md-12">
            <div className="heading-live-auctions">
              <h3 className="tf-title pb-22 text-left">Popular Collection</h3>
              <Link href="/explore">
                <a className="exp style2">EXPLORE MORE</a>
              </Link>
            </div>
          </div>
          <div className="col-md-12">
            <div className="collection">
              <Swiper
                modules={[Navigation, Scrollbar, A11y]}
                spaceBetween={30}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },

                  767: {
                    slidesPerView: 4,
                  },

                  991: {
                    slidesPerView: 4,
                  },
                  1300: {
                    slidesPerView: 4,
                  },
                }}
                scrollbar={{ draggable: true }}
              >
                {data.map((item, index) => (
                  <SwiperSlide key={index}>
                    <PopularCollectionItem item={item} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
PopularCollection.propTypes = {
  data: PropTypes.array.isRequired,
};

const PopularCollectionItem = (props) => (
  <div className="swiper-container show-shadow carousel4 button-arow-style">
    <div className="swiper-wrapper">
      <div className="swiper-slide">
        <div className="slider-item">
          <img src={props.item.image} />
        </div>
      </div>
    </div>
  </div>
);

export default PopularCollection;
