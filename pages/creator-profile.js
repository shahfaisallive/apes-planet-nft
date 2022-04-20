import React, { useState } from "react";
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import CardModal from "../components/Layout/CardModal";

// import avt from "../assets/images/avatar/avt-author-tab.jpg";
const img1 = "./assets/svg/live-auction1.png";
const imga1 = "./assets/svg/live-auction1.png";
const img2 = "./assets/svg/live-auction2.png";
const imga2 = "./assets/svg/live-auction2.png";
const img3 = "./assets/svg/live-auction3.png";
const imga3 = "./assets/svg/live-auction3.png";
const img4 = "./assets/svg/live-auction4.png";
const imga4 = "./assets/svg/live-auction4.png";
const imgCollection1 = "./assets/images/avatar/avt-18.jpg";
const imgCollection2 = "./assets/images/avatar/avt-16.jpg";
const imgCollection3 = "./assets/images/avatar/avt-17.jpg";

const Authors02 = () => {
  const [menuTab] = useState([
    {
      class: "active",
      name: "ALL",
    },
    {
      class: "",
      name: "ART",
    },
    {
      class: "",
      name: "MUSIC",
    },
    {
      class: "",
      name: "COLLECTIBLES",
    },
    {
      class: "",
      name: "SPORTS",
    },
  ]);
  const [panelTab] = useState([
    {
      id: 1,
      dataContent: [
        {
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
        },
        {
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
        {
          img: img4,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga4,
          nameAuthor: "SalvadorDali",
          price: "4.89 SOL",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection1,
          nameCollection: "Creative Art 3D",
        },
        {
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
        },
        {
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
        {
          img: img4,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga4,
          nameAuthor: "SalvadorDali",
          price: "4.89 SOL",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection1,
          nameCollection: "Creative Art 3D",
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
          imgCollection: imgCollection2,
          nameCollection: "Creative Art 3D",
        },
        {
          id: 5,
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
          imgCollection: imgCollection2,
          nameCollection: "Creative Art 3D",
        },
        {
          id: 5,
          img: img2,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga4,
          nameAuthor: "SalvadorDali",
          price: "4.89 SOL",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection3,
          nameCollection: "Creative Art 3D",
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
        {
          id: 5,
          img: img2,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga4,
          nameAuthor: "SalvadorDali",
          price: "4.89 SOL",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection3,
          nameCollection: "Creative Art 3D",
        },
        {
          id: 7,
          img: img2,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga2,
          nameAuthor: "SalvadorDali",
          price: "4.89 SOL",
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection1,
          nameCollection: "Creative Art 3D",
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
          imgCollection: imgCollection2,
          nameCollection: "Creative Art 3D",
        },
        {
          id: 6,
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
        },
      ],
    },
  ]);

  const [visible, setVisible] = useState(8);
  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 4);
  };

  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="authors-2">
      <Header />
      <section className="flat-title-page inner">
        <div className="overlay"></div>
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-title-heading mg-bt-12">
                <h1 className="heading text-center">Creator Profile</h1>
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
                      <a>Pages</a>
                    </Link>
                  </li>
                  <li>Author</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tf-section authors">
        <div className="themesflat-container">
          <div className="flat-tabs tab-authors">
            <div className="author-profile flex">
              <div className="feature-profile">
                {/* <img src={avt} alt="Axies" className="avatar" /> */}
              </div>
              <div className="infor-profile">
                <span>Creator Profile</span>
                <h2 className="title">John Doe</h2>
                <p className="content">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <form>
                  <input
                    type="text"
                    className="inputcopy"
                    defaultValue="amvks]FHDYDSfutFU"
                    readOnly
                  />
                  <button type="button" className="btn-copycode">
                    <i className="icon-fl-file-1"></i>
                  </button>
                </form>
              </div>
              <div className="widget-social style-3">
                <ul>
                  <li>
                    <Link href="#">
                      <a>
                        {" "}
                        <i className="fab fa-twitter"></i>
                      </a>
                    </Link>
                  </li>
                  <li className="style-2">
                    <Link href="#">
                      <a>
                        <i className="fab fa-telegram-plane"></i>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>
                        {" "}
                        <i className="fab fa-youtube"></i>
                      </a>
                    </Link>
                  </li>
                  <li className="mgr-none">
                    <Link href="#">
                      <a>
                        <i className="icon-fl-tik-tok-2"></i>
                      </a>
                    </Link>
                  </li>
                </ul>
                <div className="btn-profile">
                  <Link href="#">
                    <a className="sc-button style-1 follow">Follow</a>
                  </Link>
                </div>
              </div>
            </div>
            <Tabs>
              <TabList>
                {menuTab.map((item, index) => (
                  <Tab key={index}>{item.name}</Tab>
                ))}
              </TabList>

              <div className="content-tab">
                <div className="content-inner">
                  <div className="row">
                    {panelTab.map((item, index) => (
                      <TabPanel key={index}>
                        {item.dataContent
                          .slice(0, visible)
                          .map((data, index) => (
                            <div
                              key={index}
                              className="col-xl-3 col-lg-4 col-md-6 col-12"
                            >
                              <div className="sc-card-product explode ">
                                <div className="card-media">
                                  <Link href="#">
                                    <a>
                                      {" "}
                                      <img src={data.img} alt="Axies" />
                                    </a>
                                  </Link>
                                  <div className="button-place-bid ">
                                    <button
                                      onClick={() => setModalShow(true)}
                                      className="sc-button style-place-bid style bag fl-button pri-3"
                                    >
                                      <span>Place Bid</span>
                                    </button>
                                  </div>
                                  <Link href="#">
                                    <a className="wishlist-button heart">
                                      <span className="number-like">
                                        {" "}
                                        {data.wishlist}
                                      </span>
                                    </a>
                                  </Link>
                                </div>
                                <div className="card-title mg-bt-16">
                                  <h5>
                                    <Link href="#">
                                      <a>"{data.title}"</a>
                                    </Link>
                                  </h5>
                                </div>
                                <div className="meta-info">
                                  <div className="author">
                                    <div className="avatar">
                                      <img src={data.imgAuthor} alt="Axies" />
                                    </div>
                                    <div className="info">
                                      <span>Creator</span>
                                      <h6>
                                        {" "}
                                        <Link href="#">
                                          <a>{data.nameAuthor}</a>
                                        </Link>{" "}
                                      </h6>
                                    </div>
                                  </div>
                                  <div className="tags">{data.tags}</div>
                                </div>
                                <div className="card-bottom style-explode">
                                  <div className="price">
                                    <span>Current Bid</span>
                                    <div className="price-details">
                                      <h5>{data.price}</h5>
                                      <span>= {data.priceChange}</span>
                                    </div>
                                  </div>
                                  <Link
                                    href="#"
                                    className="view-history reload"
                                  >
                                    <a>View History</a>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          ))}
                        {visible < item.dataContent.length && (
                          <div className="col-md-12 wrap-inner load-more text-center">
                            <Link href="#">
                              <a
                                id="load-more"
                                className="sc-button loadmore fl-button pri-3"
                                onClick={showMoreItems}
                              >
                                <span>Load More</span>
                              </a>
                            </Link>
                          </div>
                        )}
                      </TabPanel>
                    ))}
                  </div>
                </div>
              </div>
            </Tabs>
          </div>
        </div>
      </section>
      <CardModal show={modalShow} onHide={() => setModalShow(false)} />
      <Footer />
    </div>
  );
};

export default Authors02;
