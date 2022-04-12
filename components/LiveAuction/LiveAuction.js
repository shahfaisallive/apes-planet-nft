import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// import CardModal from "./CardModal";
import liveAuctionData from "./live-auction-data";
import CardModal from "../Layout/CardModal";

const LiveAuction = () => {
  const data = liveAuctionData;

  const [modalShow, setModalShow] = useState(false);

  return (
    <Fragment>
      <section className="tf-section live-auctions">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading-live-auctions">
                <h3 className="tf-title pb-20">Live Auctions</h3>
                <Link href="/explore">
                  <a class="exp style2">EXPLORE MORE</a>
                </Link>
              </div>
            </div>
            <div className="col-md-12">
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={30}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  767: {
                    slidesPerView: 3,
                  },
                  991: {
                    slidesPerView: 4,
                  },
                  1300: {
                    slidesPerView: 4,
                  },
                }}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
              >
                {data.slice(0, 7).map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="swiper-container show-shadow carousel auctions">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <div className="slider-item">
                            <div className="sc-card-product">
                              <div className="card-media">
                                <Link href="#">
                                  <a>
                                    {" "}
                                    <img src={item.img} alt="axies" />
                                  </a>
                                </Link>
                                <Link
                                  href="/login"
                                  className="wishlist-button heart"
                                >
                                  <a>
                                    <span className="number-like">
                                      {item.wishlist}
                                    </span>
                                  </a>
                                </Link>

                                <div className="button-place-bid">
                                  <button
                                    onClick={() => setModalShow(true)}
                                    className="sc-button style-place-bid style bag fl-button pri-3"
                                  >
                                    <span>Place Bid</span>
                                  </button>
                                </div>
                              </div>
                              <div className="card-title">
                                <h5>
                                  <Link href="#">
                                    <a>"{item.title}"</a>
                                  </Link>
                                </h5>
                                <div className="tags">{item.tags}</div>
                              </div>
                              <div className="meta-info">
                                <div className="author">
                                  <div className="avatar">
                                    <img src={item.imgAuthor} alt="axies" />
                                  </div>
                                  <div className="info">
                                    <span>Creator</span>
                                    <h6>
                                      {" "}
                                      <Link href="#">
                                        <a>{item.nameAuthor}</a>
                                      </Link>{" "}
                                    </h6>
                                  </div>
                                </div>
                                <div className="price">
                                  <span>Current Bid</span>
                                  <h5> {item.price}</h5>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <CardModal show={modalShow} onHide={() => setModalShow(false)} />
    </Fragment>
  );
};

LiveAuction.propTypes = {
  data: PropTypes.array.isRequired,
};

export default LiveAuction;
