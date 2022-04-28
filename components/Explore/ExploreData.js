import React, { useState, Fragment } from "react";
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import CardModal from "./../Layout/CardModal";

const imgCollection1 = "./assets/images/avatar/avt-18.jpg";
const imgCollection2 = "./assets/images/avatar/avt-18.jpg";
const imgCollection3 = "./assets/images/avatar/avt-18.jpg";
const imgCollection4 = "./assets/images/avatar/avt-18.jpg";
const imgCollection5 = "./assets/images/avatar/avt-18.jpg";
const imgCollection6 = "./assets/images/avatar/avt-18.jpg";
const imgCollection7 = "./assets/images/avatar/avt-18.jpg";
const imgCollection8 = "./assets/images/avatar/avt-18.jpg";

const img1 = "./assets/svg/today-pick1.png";
const imga1 = "./assets/svg/today-pick1.png";
const img2 = "./assets/svg/today-pick2.png";
const imga2 = "./assets/svg/today-pick2.png";
const img3 = "./assets/svg/today-pick3.png";
const imga3 = "./assets/svg/today-pick3.png";
const img4 = "./assets/svg/today-pick4.png";
const imga4 = "./assets/svg/today-pick4.png";
const img5 = "./assets/svg/today-pick5.png";
const imga5 = "./assets/svg/today-pick5.png";
const img6 = "./assets/svg/today-pick6.png";
const imga6 = "./assets/svg/today-pick6.png";
const img7 = "./assets/svg/today-pick7.png";
const imga7 = "./assets/svg/today-pick7.png";
const img8 = "./assets/svg/today-pick8.png";
const imga8 = "./assets/svg/today-pick8.png";
const ExploreData = () => {
  const [showFixed, setShowFixed] = useState(false);
  const [dataTab] = useState([
    {
      id: 1,
      title: "All",
    },
    {
      id: 2,
      title: "Art",
    },
    {
      id: 3,
      title: "Music",
    },
    {
      id: 4,
      title: "Collectibles",
    },
    {
      id: 5,
      title: "Sports",
    },
    {
      id: 6,
      title: "Fixed",
    },
  ]);
  const [dataPanel] = useState([
    {
      id: 1,
      dataContent: [
        {
          id: 1,
          img: img1,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga1,
          nameAuthor: "SalvadorDali",
          price: "4.89 SOL",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection1,
          nameCollection: "Creative Art 3D",
          for_bid: false,
        },
        {
          id: 2,
          img: img2,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga2,
          nameAuthor: "SalvadorDali",
          price: "4.89 SOL",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection2,
          nameCollection: "Creative Art 3D",
          feature: "Coming Soon",
          for_bid: false,
        },
        {
          id: 3,
          img: img3,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga3,
          nameAuthor: "SalvadorDali",
          price: "4.89 SOL",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection3,
          nameCollection: "Creative Art 3D",
          for_bid: false,
        },
        {
          id: 4,
          img: img4,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga4,
          nameAuthor: "SalvadorDali",
          price: "4.89 SOL",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection4,
          nameCollection: "Creative Art 3D",
          for_bid: false,
        },
        {
          id: 5,
          img: img5,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga5,
          nameAuthor: "SalvadorDali",
          price: "4.89 SOL",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection5,
          nameCollection: "Creative Art 3D",
          for_bid: false,
        },
        {
          id: 6,
          img: img6,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga6,
          nameAuthor: "SalvadorDali",
          price: "4.89 SOL",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection6,
          nameCollection: "Creative Art 3D",
          for_bid: false,
        },
        {
          id: 7,
          img: img7,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga7,
          nameAuthor: "SalvadorDali",
          price: "4.89 SOL",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection7,
          nameCollection: "Creative Art 3D",
          for_bid: false,
        },
        {
          id: 8,
          img: img8,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga8,
          nameAuthor: "SalvadorDali",
          price: "4.89 SOL",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection8,
          nameCollection: "Creative Art 3D",
          for_bid: false,
        },
        {
          id: 9,
          img: img1,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga1,
          nameAuthor: "SalvadorDali",
          price: "4.89 SOL",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection1,
          nameCollection: "Creative Art 3D",
          for_bid: false,
        },
        {
          id: 10,
          img: img2,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga2,
          nameAuthor: "SalvadorDali",
          price: "4.89 SOL",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection2,
          nameCollection: "Creative Art 3D",
          for_bid: false,
        },
        {
          id: 11,
          img: img3,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga3,
          nameAuthor: "SalvadorDali",
          price: "4.89 SOL",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection3,
          nameCollection: "Creative Art 3D",
          for_bid: false,
        },
        {
          id: 12,
          img: img4,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga4,
          nameAuthor: "SalvadorDali",
          price: "4.89 SOL",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection4,
          nameCollection: "Creative Art 3D",
          for_bid: false,
        },
        {
          id: 13,
          img: img5,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga5,
          nameAuthor: "SalvadorDali",
          price: "4.89 SOL",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection5,
          nameCollection: "Creative Art 3D",
          for_bid: false,
        },
        {
          id: 14,
          img: img6,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga6,
          nameAuthor: "SalvadorDali",
          price: "4.89 SOL",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection6,
          nameCollection: "Creative Art 3D",
          for_bid: false,
        },
        {
          id: 15,
          img: img7,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga7,
          nameAuthor: "SalvadorDali",
          price: "4.89 SOL",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection7,
          nameCollection: "Creative Art 3D",
          for_bid: false,
        },
        {
          id: 16,
          img: img8,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga8,
          nameAuthor: "SalvadorDali",
          price: "4.89 SOL",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection8,
          nameCollection: "Creative Art 3D",
          for_bid: false,
        },
      ],
    },
    {
      id: 2,
      dataContent: [
        {
          id: 2,
          img: img2,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga2,
          nameAuthor: "SalvadorDali",
          price: "4.89 SOL",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection2,
          nameCollection: "Creative Art 3D",
          for_bid: true,
        },
        {
          id: 3,
          img: img3,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga3,
          nameAuthor: "SalvadorDali",
          price: "4.89 SOL",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection3,
          nameCollection: "Creative Art 3D",
          for_bid: true,
        },
        {
          id: 4,
          img: img4,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga4,
          nameAuthor: "SalvadorDali",
          price: "4.89 SOL",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection4,
          nameCollection: "Creative Art 3D",
          for_bid: true,
        },
        {
          id: 5,
          img: img5,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga5,
          nameAuthor: "SalvadorDali",
          price: "4.89 SOL",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection5,
          nameCollection: "Creative Art 3D",
          for_bid: true,
        },
      ],
    },
    {
      id: 3,
      dataContent: [
        {
          id: 1,
          img: img1,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga1,
          nameAuthor: "SalvadorDali",
          price: "4.89 SOL",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection1,
          nameCollection: "Creative Art 3D",
          for_bid: true,
        },
        {
          id: 3,
          img: img3,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga3,
          nameAuthor: "SalvadorDali",
          price: "4.89 SOL",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection3,
          nameCollection: "Creative Art 3D",
          for_bid: true,
        },
        {
          id: 4,
          img: img4,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga4,
          nameAuthor: "SalvadorDali",
          price: "4.89 SOL",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection4,
          nameCollection: "Creative Art 3D",
          for_bid: true,
        },
        {
          id: 5,
          img: img5,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga5,
          nameAuthor: "SalvadorDali",
          price: "4.89 SOL",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection5,
          nameCollection: "Creative Art 3D",
          for_bid: true,
        },
      ],
    },
    {
      id: 4,
      dataContent: [
        {
          id: 1,
          img: img1,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga1,
          nameAuthor: "SalvadorDali",
          price: "4.89 SOL",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection1,
          nameCollection: "Creative Art 3D",
          for_bid: true,
        },
        {
          id: 2,
          img: img2,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga2,
          nameAuthor: "SalvadorDali",
          price: "4.89 SOL",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection2,
          nameCollection: "Creative Art 3D",
          for_bid: true,
        },
        {
          id: 3,
          img: img3,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga3,
          nameAuthor: "SalvadorDali",
          price: "4.89 SOL",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection3,
          nameCollection: "Creative Art 3D",
          for_bid: true,
        },
        {
          id: 5,
          img: img5,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga5,
          nameAuthor: "SalvadorDali",
          price: "4.89 SOL",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection5,
          nameCollection: "Creative Art 3D",
          for_bid: true,
        },
        {
          id: 7,
          img: img7,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga7,
          nameAuthor: "SalvadorDali",
          price: "4.89 SOL",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection7,
          nameCollection: "Creative Art 3D",
          for_bid: true,
        },
      ],
    },
    {
      id: 5,
      dataContent: [
        {
          id: 2,
          img: img2,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga2,
          nameAuthor: "SalvadorDali",
          price: "4.89 SOL",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection2,
          nameCollection: "Creative Art 3D",
          for_bid: true,
        },
        {
          id: 3,
          img: img3,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga3,
          nameAuthor: "SalvadorDali",
          price: "4.89 SOL",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection3,
          nameCollection: "Creative Art 3D",
          for_bid: true,
        },
        {
          id: 4,
          img: img4,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga4,
          nameAuthor: "SalvadorDali",
          price: "4.89 SOL",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection4,
          nameCollection: "Creative Art 3D",
          for_bid: true,
        },
        {
          id: 6,
          img: img5,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga6,
          nameAuthor: "SalvadorDali",
          price: "4.89 SOL",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection6,
          nameCollection: "Creative Art 3D",
          for_bid: true,
        },
      ],
    },
    {
      id: 6,
      dataContent: [
        {
          id: 1,
          img: img6,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga6,
          nameAuthor: "SalvadorDali",
          price: "4.89 SOL",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection6,
          nameCollection: "Creative Art 3D",
          for_bid: false,
        },
        {
          id: 2,
          img: img7,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga7,
          nameAuthor: "SalvadorDali",
          price: "4.89 SOL",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection7,
          nameCollection: "Creative Art 3D",
          for_bid: false,
        },
        {
          id: 3,
          img: img8,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga8,
          nameAuthor: "SalvadorDali",
          price: "4.89 SOL",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection8,
          nameCollection: "Creative Art 3D",
          for_bid: false,
        },
        {
          id: 4,
          img: img1,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga1,
          nameAuthor: "SalvadorDali",
          price: "4.89 SOL",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection1,
          nameCollection: "Creative Art 3D",
          for_bid: false,
        },
        {
          id: 5,
          img: img2,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga2,
          nameAuthor: "SalvadorDali",
          price: "4.89 SOL",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection2,
          nameCollection: "Creative Art 3D",
          for_bid: false,
        },
        {
          id: 6,
          img: img3,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga3,
          nameAuthor: "SalvadorDali",
          price: "4.89 SOL",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection3,
          nameCollection: "Creative Art 3D",
          for_bid: false,
        },
        {
          id: 7,
          img: img4,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga4,
          nameAuthor: "SalvadorDali",
          price: "4.89 SOL",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection4,
          nameCollection: "Creative Art 3D",
          for_bid: false,
        },
        {
          id: 8,
          img: img5,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga5,
          nameAuthor: "SalvadorDali",
          price: "4.89 SOL",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection5,
          nameCollection: "Creative Art 3D",
          for_bid: false,
        },
        {
          id: 9,
          img: img6,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga6,
          nameAuthor: "SalvadorDali",
          price: "4.89 SOL",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection6,
          nameCollection: "Creative Art 3D",
          for_bid: false,
        },
      ],
    },
  ]);
  const [FixedNft] = useState([
    {
      id: 1,
      img: img1,
      title: "The RenaiXance Rising the sun ",
      tags: "bsc",
      imgAuthor: imga1,
      nameAuthor: "SalvadorDali",
      price: "4.89 SOL",
      priceChange: "$12.246",
      wishlist: "100",
      imgCollection: imgCollection1,
      nameCollection: "Creative Art 3D",
    },
    {
      id: 2,
      img: img2,
      title: "The RenaiXance Rising the sun ",
      tags: "bsc",
      imgAuthor: imga2,
      nameAuthor: "SalvadorDali",
      price: "4.89 SOL",
      priceChange: "$12.246",
      wishlist: "100",
      imgCollection: imgCollection2,
      nameCollection: "Creative Art 3D",
      feature: "Coming Soon",
    },
    {
      id: 3,
      img: img3,
      title: "The RenaiXance Rising the sun ",
      tags: "bsc",
      imgAuthor: imga3,
      nameAuthor: "SalvadorDali",
      price: "4.89 SOL",
      priceChange: "$12.246",
      wishlist: "100",
      imgCollection: imgCollection3,
      nameCollection: "Creative Art 3D",
    },
  ]);

  const [visible, setVisible] = useState(8);
  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 4);
  };

  const [modalShow, setModalShow] = useState(false);

  return (
    <Fragment>
      <div className="tf-section sc-explore-2">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <div className="seclect-box style3">
                <div id="artworks" className="dropdown">
                  <Link href="#" className="btn-selector nolink">
                    All Artworks
                  </Link>
                  <ul>
                    <li>
                      <span>Abstraction</span>
                    </li>
                    <li className="active">
                      <span>Skecthify</span>
                    </li>
                    <li>
                      <span>Patternlicious</span>
                    </li>
                    <li>
                      <span>Virtuland</span>
                    </li>
                    <li>
                      <span>Papercut</span>
                    </li>
                  </ul>
                </div>
                <div id="sort-by" className="dropdown style-2">
                  <Link href="#" className="btn-selector nolink">
                    <a> Sort by</a>
                  </Link>
                  <ul>
                    <li>
                      <span>Top rate</span>
                    </li>
                    <li className="active">
                      <span>Mid rate</span>
                    </li>
                    <li>
                      <span>Low rate</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flat-tabs explore-tab">
                <Tabs>
                  <TabList>
                    {dataTab.map((data) => (
                      <Tab key={data.id} onClick={() => setShowFixed(false)}>
                        {data.title}
                      </Tab>
                    ))}
                  </TabList>
                  {dataPanel.map((data) => (
                    <TabPanel key={data.id}>
                      {data.dataContent.slice(0, visible).map((item) =>
                        item.for_bid ? (
                          <div
                            key={item.id}
                            className={`sc-card-product explode style2 mg-bt`}
                          >
                            <div className="card-media">
                              <Link href="#">
                                <a>
                                  <img src={item.img} alt="Axies" />
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

                              <div className="coming-soon">{item.feature}</div>
                            </div>
                            <div className="card-title">
                              <h5>
                                <Link href="#">
                                  <a>{item.title}</a>
                                </Link>
                              </h5>
                            </div>
                            <div className="meta-info">
                              <div className="author">
                                <div className="avatar">
                                  <img src={item.imgAuthor} alt="Axies" />
                                </div>
                                <div className="info">
                                  <span>Creator</span>
                                  <h6>
                                    {" "}
                                    <Link href="#">
                                      <a>{item.nameAuthor}</a>
                                    </Link>
                                  </h6>
                                </div>
                              </div>
                              <div className="tags">{item.tags}</div>
                            </div>
                            <div className="card-bottom style-explode">
                              <div className="price">
                                <span>Current Bid</span>
                                <div className="price-details">
                                  <h5>{item.price}</h5>
                                  <span>= {item.priceChange}</span>
                                </div>
                              </div>
                              <Link
                                href="/activity"
                                className="view-history reload"
                              >
                                <a>View History</a>
                              </Link>
                            </div>
                          </div>
                        ) : (
                          <div
                            key={item.id}
                            className={`sc-card-product explode style2 mg-bt`}
                          >
                            <div className="card-media">
                              <Link href="#">
                                <a>
                                  <img src={item.img} alt="Axies" />
                                </a>
                              </Link>
                              <div className="button-place-bid">
                                <button className="sc-button style-place-bid style bag fl-button pri-3">
                                  <span>Buy Now</span>
                                </button>
                              </div>

                              <div className="coming-soon">{item.feature}</div>
                            </div>
                            <div className="card-title">
                              <h5>
                                <Link href="#">
                                  <a>"{item.title}"</a>
                                </Link>
                              </h5>
                            </div>
                            <div className="meta-info">
                              <div className="author">
                                <div className="avatar">
                                  <img src={item.imgAuthor} alt="Axies" />
                                </div>
                                <div className="info">
                                  <span>Creator</span>
                                  <h6>
                                    {" "}
                                    <Link href="#">
                                      <a>{item.nameAuthor}</a>
                                    </Link>
                                  </h6>
                                </div>
                              </div>
                              <div className="tags">{item.tags}</div>
                            </div>
                            <div className="card-bottom style-explode">
                              <div className="price">
                                <span>Current Price </span>
                                <div className="price-details">
                                  <h5>{item.price}</h5>
                                  <span>= {item.priceChange}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      )}
                      {visible < data.dataContent.length && (
                        <div className="col-md-12 wrap-inner load-more text-center">
                          <a
                            href="#"
                            id="load-more"
                            className="sc-button loadmore fl-button pri-3"
                            onClick={(e) => {
                              e.preventDefault();
                              showMoreItems();
                            }}
                          >
                            {" "}
                            <span>Load More</span>
                          </a>
                        </div>
                      )}
                    </TabPanel>
                  ))}
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CardModal show={modalShow} onHide={() => setModalShow(false)} />
    </Fragment>
  );
};

export default ExploreData;
