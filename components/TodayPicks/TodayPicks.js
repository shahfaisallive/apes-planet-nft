import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import CardModal from "./../Layout/CardModal";
import todayPickData from "./todaypicks_data";

const TodayPicks = () => {
  const data = todayPickData;

  const [visible, setVisible] = useState(8);
  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 4);
  };
  const [modalShow, setModalShow] = useState(false);
  return (
    <Fragment>
      <section className="tf-section today-pick">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading-live-auctions mg-bt-21">
                <h3 className="tf-title pad-l-7">Today's Picks</h3>
                <Link href="/explore">
                  <a className="exp style2">EXPLORE MORE</a>
                </Link>
              </div>
            </div>
            {data.slice(0, visible).map((item, index) => (
              <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className={`sc-card-product`}>
                  <div className="card-media">
                    <Link href="/nft-detail">
                      <a>
                        <img src={item.img} alt="axies" />
                      </a>
                    </Link>
                    {/* <Link to="/login" className="wishlist-button heart"><span className="number-like">{item.wishlist}</span></Link> */}
                    <div className="coming-soon">{item.feature}</div>
                  </div>
                  <div className="card-title">
                    <h5 className="style2">
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
                        <span>Owned By</span>
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
                  <div className="card-bottom">
                    <button
                      className="sc-button style bag fl-button pri-3 no-bg"
                      onClick={() => setModalShow(true)}
                    >
                      <span>Place Bid</span>
                    </button>
                    <Link href="/activity" className="view-history reload">
                      View History
                    </Link>
                  </div>
                </div>
              </div>
            ))}
            {visible < data.length && (
              <div className="col-md-12 wrap-inner load-more text-center">
                <Link
                  href="#"
                  id="load-more"
                  className="sc-button loadmore fl-button pri-3"
                  onClick={showMoreItems}
                >
                  <a>
                    <span>Load More</span>
                  </a>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
      <CardModal show={modalShow} onHide={() => setModalShow(false)} />
    </Fragment>
  );
};

TodayPicks.propTypes = {
  data: PropTypes.array.isRequired,
};

export default TodayPicks;
