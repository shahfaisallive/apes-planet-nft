import Head from "next/head";

import React, { useState } from "react";
import Link from "next/link";
import Header from "./../components/Layout/Header";
import Footer from "./../components/Layout/Footer";
const img1 = "./assets/svg/today-pick1.png";
const img2 = "./assets/svg/today-pick2.png";
const img3 = "./assets/svg/today-pick3.png";
const img4 = "./assets/svg/today-pick4.png";
const img5 = "./assets/svg/today-pick5.png";

const Activity = () => {
  const [dataBox] = useState([
    {
      img: img1,
      title: "Dummy Text",
      status: "minted nft",
      author: "React JS",
      time: "At 9:30 PM on 25th March, 2022",
      icon: "icon-1",
    },
    {
      img: img2,
      title: "Dummy Text",
      status: "10 editions listed by",
      author: "Angular JS",
      time: "At 9:30 PM on 25th March, 2022",
      icon: "icon-2",
    },
    {
      img: img3,
      title: "Dummy Text",
      status: "minted nft",
      author: "Ethereum",
      time: "At 9:30 PM on 25th March, 2022",
      icon: "icon-3",
    },
    {
      img: img4,
      title: "Dummy Text",
      status: "minted nft",
      author: "Solana",
      time: "At 9:30 PM on 25th March, 2022",
      icon: "icon-4",
    },
    {
      img: img5,
      title: "Dummy Text",
      status: "minted nft",
      author: "Shah Faisal",
      time: "At 9:30 PM on 25th March, 2022",
      icon: "icon-5",
    },
    {
      img: img1,
      title: "Dummy Text",
      status: "minted nft",
      author: "LmaoXD",
      time: "At 9:30 PM on 25th March, 2022",
      icon: "icon-1",
    },
    {
      img: img2,
      title: "Dummy Text",
      status: "10 editions listed by",
      author: "Android",
      time: "At 9:30 PM on 25th March, 2022",
      icon: "icon-2",
    },
    {
      img: img3,
      title: "Dummy Text",
      status: "minted nft",
      author: "Hahaha",
      time: "At 9:30 PM on 25th March, 2022",
      icon: "icon-3",
    },
    {
      img: img4,
      title: "Dummy Text",
      status: "minted nft",
      author: "John Doe",
      time: "At 9:30 PM on 25th March, 2022",
      icon: "icon-4",
    },
    {
      img: img5,
      title: "Dummy Text",
      status: "minted nft",
      author: "Batman",
      time: "At 9:30 PM on 25th March, 2022",
      icon: "icon-5",
    },
  ]);
  const [dataFilter] = useState([
    {
      icon: "icon-fl-sort-filled",
      name: "Listings",
    },
    {
      icon: "icon-fl-heart-filled",
      name: "Like",
    },
    {
      icon: "icon-fl-buy",
      name: "Purchases",
    },
    {
      icon: "icon-fl-discount",
      name: "Sales",
    },
    {
      icon: "icon-fl-logout",
      name: "Transfer",
    },
    {
      icon: "icon-fl-star",
      name: "Burns",
    },
    {
      icon: "icon-fl-credit-card",
      name: "Bids",
    },
    {
      icon: "icon-fl-users-filled",
      name: "Followings",
    },
  ]);

  const [visible, setVisible] = useState(5);
  const showMoreItems = (e) => {
    e.preventDefault();
    setVisible((prevValue) => prevValue + 5);
  };
  return (
    <div>
      <Head>
        <title>Activity </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="./assets/icon/Favicon.png" />
      </Head>
      <Header />
      <section className="flat-title-page inner">
        <div className="overlay"></div>
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-title-heading mg-bt-12">
                <h1 className="heading text-center">Activity</h1>
              </div>
              <div className="breadcrumbs style2">
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="#">Activity</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tf-activity s1 tf-section">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-12">
              {dataBox.slice(0, visible).map((item, index) => (
                <div className="sc-card-activity style1" key={index}>
                  <div className="content">
                    <div className="media">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="infor">
                      <h3>
                        {" "}
                        <Link href="/item-details-01">{item.title}</Link>
                      </h3>
                      <div className="status">
                        {item.status}{" "}
                        <span className="author">{item.author}</span>
                      </div>
                      <div className="time">{item.time}</div>
                    </div>
                  </div>
                  <div className={`button-active icon ${item.icon}`}></div>
                </div>
              ))}
              {visible < dataBox.length && (
                <div className="col-md-12 wrap-inner load-more text-center">
                  <Link href="#">
                    <a
                      id="load-more"
                      className="sc-button loadmore fl-button pri-3 mt-10"
                      onClick={(e) => showMoreItems(e)}
                    >
                      <span>Load More</span>
                    </a>
                  </Link>
                </div>
              )}
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div id="side-bar" className="side-bar style-2">
                <div className="widget widget-search mgbt-24">
                  <form action="#">
                    <input
                      type="text"
                      placeholder="Enter your word art"
                      required
                    />
                    <button>
                      <i className="icon-fl-search-filled"></i>
                    </button>
                  </form>
                </div>

                <div className="widget widget-filter style-2 mgbt-0">
                  <h3 className="title-widget">Filter</h3>
                  <ul className="box-check">
                    {dataFilter.map((item, index) => (
                      <li key={index}>
                        <Link href="#">
                          <a className="box-widget-filter">
                            <i className={item.icon}></i>
                            {item.name}
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link href="#">
                    <a className="clear-check btn-filter style-2">
                      {" "}
                      Clear All Filters
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Activity;
