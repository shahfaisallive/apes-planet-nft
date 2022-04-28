import React, { useState } from "react";
import Link from "next/link";
import Countdown from "react-countdown";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import LiveAuction from "../components/LiveAuction/LiveAuction";
import liveAuctionData from "../components/LiveAuction/live-auction-data";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
const img1 = "./assets/svg/today-pick1.png";
const img2 = "./assets/svg/today-pick2.png";
const img3 = "./assets/svg/today-pick3.png";
const img4 = "./assets/svg/today-pick4.png";
const img5 = "./assets/svg/today-pick5.png";
const img6 = "./assets/svg/today-pick6.png";
const img7 = "./assets/svg/today-pick7.png";
const imgdetail1 = "./assets/images/avatar/nft-detail.jpg";
const NFTDetail = () => {
  const [dataHistory] = useState([
    {
      img: img1,
      name: "John Doe",
      time: "2 hours ago",
      price: "1.89 SOL",
      priceChange: "$0.0",
    },
    {
      img: img2,
      name: "John Doe",
      time: "at 20/04/2022, 4:03 PM",
      price: "2.8 SOL",
      priceChange: "$0.0",
    },
    {
      img: img3,
      name: "John Doe",
      time: "1 hours ago",
      price: "3.89 SOL",
      priceChange: "$2.26",
    },
    {
      img: img4,
      name: "John Doe",
      time: "2 hours ago",
      price: "4.80 SOL",
      priceChange: "$2.246",
    },
    {
      img: img5,
      name: "John Doe",
      time: "4 hours ago",
      price: "1.89 SOL",
      priceChange: "$2.2",
    },
    {
      img: img6,
      name: "John Doe",
      time: "8 hours ago",
      price: "4.89 SOL",
      priceChange: "$12.246",
    },
  ]);
  return (
    <div className="item-details">
      <Header />
      <section className="flat-title-page inner">
        <div className="overlay"></div>
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-title-heading mg-bt-12">
                <h1 className="heading text-center">NFT Detail</h1>
              </div>
              <div className="breadcrumbs style2">
                <ul>
                  <li>
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Explore</a>
                    </Link>
                  </li>
                  <li>NFT Detail</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="tf-section tf-item-details style-2">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-xl-6 col-md-12">
              <div className="content-left">
                <div className="media">
                  <img src={imgdetail1} alt="Axies" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-12">
              <div className="content-right">
                <div className="sc-item-details">
                  <div className="meta-item">
                    <div className="left">
                      <h2>Sample NFT</h2>
                    </div>
                    <div className="right">
                      <span className="viewed eye mg-r-8">0</span>
                      <span to="/login" className="liked heart wishlist-button">
                        <span className="number-like">21</span>
                      </span>
                    </div>
                  </div>
                  <div className="client-infor sc-card-product">
                    <div className="meta-info">
                      <div className="author">
                        <div className="avatar">
                          <img src={img6} alt="Axies" />
                        </div>
                        <div className="info">
                          <span>Owned By</span>
                          <h6>
                            {" "}
                            <Link href="#">
                              <a>John Doe</a>
                            </Link>{" "}
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="meta-info">
                      <div className="author">
                        <div className="avatar">
                          <img src={img7} alt="Axies" />
                        </div>
                        <div className="info">
                          <span>Create By</span>
                          <h6>
                            {" "}
                            <Link href="#">
                              <a>Jane Doe</a>
                            </Link>{" "}
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>
                    Habitant sollicitudin faucibus cursus lectus pulvinar dolor
                    non ultrices eget. Facilisi lobortisal morbi fringilla urna
                    amet sed ipsum vitae ipsum malesuada. Habitant sollicitudin
                    faucibus cursus lectus pulvinar dolor non ultrices eget.
                    Facilisi lobortisal morbi fringilla urna amet sed ipsum
                  </p>
                  <div className="meta-item-details">
                    <div className="item-style-2 item-details">
                      <ul className="list-details">
                        <li>
                          <span>Artist : </span>
                          <h6>John Doe</h6>{" "}
                        </li>
                        <li>
                          <span>Size : </span>
                          <h6>3000 x 3000</h6>{" "}
                        </li>
                        <li>
                          <span>Create : </span>
                          <h6>20 April , 2022</h6>{" "}
                        </li>
                        <li>
                          <span>Collection : </span>
                          <h6>Random Art</h6>{" "}
                        </li>
                      </ul>
                    </div>
                    <div className="item-style-2">
                      <div className="item meta-price">
                        <span className="heading">Current Bid</span>
                        <div className="price">
                          <div className="price-box">
                            <h5> 1.89 SOL</h5>
                            <span>= $1.246</span>
                          </div>
                        </div>
                      </div>
                      {/* <div className="item count-down">
                        <Countdown date={Date.now() + 500000000}>
                          <span>You are good to go!</span>
                        </Countdown>
                      </div> */}
                    </div>
                  </div>
                  <Link href="#">
                    <a className="sc-button loadmore style bag fl-button pri-3">
                      <span>Place a bid</span>
                    </a>
                  </Link>
                  <div className="flat-tabs themesflat-tabs">
                    <Tabs>
                      <TabList>
                        <Tab>Bid History</Tab>
                        <Tab>Info</Tab>
                        <Tab>Provenance</Tab>
                      </TabList>

                      <TabPanel>
                        <ul className="bid-history-list">
                          {dataHistory.map((item, index) => (
                            <li key={index} item={item}>
                              <div className="content">
                                <div className="client">
                                  <div className="sc-author-box style-2">
                                    <div className="author-avatar">
                                      <Link href="#">
                                        <a>
                                          <img
                                            src={item.img}
                                            alt="Axies"
                                            className="avatar"
                                          />
                                        </a>
                                      </Link>
                                      <div className="badge"></div>
                                    </div>
                                    <div className="author-infor">
                                      <div className="name">
                                        <h6>
                                          <Link href="#">
                                            <a>{item.name}</a>
                                          </Link>
                                        </h6>{" "}
                                        <span> place a bid</span>
                                      </div>
                                      <span className="time">{item.time}</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="price">
                                  <h5>{item.price}</h5>
                                  <span>= {item.priceChange}</span>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </TabPanel>
                      <TabPanel>
                        <ul className="bid-history-list">
                          <li>
                            <div className="content">
                              <div className="client">
                                <div className="sc-author-box style-2">
                                  <div className="author-avatar">
                                    <Link to="#">
                                      <a>
                                        <img
                                          src={img1}
                                          alt="Axies"
                                          className="avatar"
                                        />
                                      </a>
                                    </Link>
                                    <div className="badge"></div>
                                  </div>
                                  <div className="author-infor">
                                    <div className="name">
                                      <h6>
                                        {" "}
                                        <Link to="#">
                                          <a>John Doe</a>
                                        </Link>
                                      </h6>{" "}
                                      <span> place a bid</span>
                                    </div>
                                    <span className="time">8 hours ago</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </TabPanel>
                      <TabPanel>
                        <div className="provenance">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry standard dummy text ever since the 1500s
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </p>
                        </div>
                      </TabPanel>
                    </Tabs>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LiveAuction data={liveAuctionData} />
      <Footer />
    </div>
  );
};
export default NFTDetail;
