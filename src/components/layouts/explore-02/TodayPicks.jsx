import React , { useState , Fragment } from 'react';
import {Link} from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel  } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CardModal from '../CardModal';


import imgCollection1 from '../../../assets/images/avatar/avt-18.jpg'
import imgCollection2 from '../../../assets/images/avatar/avt-18.jpg'
import imgCollection3 from '../../../assets/images/avatar/avt-18.jpg'
import imgCollection4 from '../../../assets/images/avatar/avt-18.jpg'
import imgCollection5 from '../../../assets/images/avatar/avt-18.jpg'
import imgCollection6 from '../../../assets/images/avatar/avt-18.jpg'
import imgCollection7 from '../../../assets/images/avatar/avt-18.jpg'
import imgCollection8 from '../../../assets/images/avatar/avt-18.jpg'

import img1 from '../../../assets/svg/today-pick1.png'
import imga1 from '../../../assets/svg/today-pick1.png'
import img2 from '../../../assets/svg/today-pick2.png'
import imga2 from '../../../assets/svg/today-pick2.png'
import img3 from '../../../assets/svg/today-pick3.png'
import imga3 from '../../../assets/svg/today-pick3.png'
import img4 from '../../../assets/svg/today-pick4.png'
import imga4 from '../../../assets/svg/today-pick4.png'
import img5 from '../../../assets/svg/today-pick5.png'
import imga5 from '../../../assets/svg/today-pick5.png'
import img6 from '../../../assets/svg/today-pick6.png'
import imga6 from '../../../assets/svg/today-pick6.png'
import img7 from '../../../assets/svg/today-pick7.png'
import imga7 from '../../../assets/svg/today-pick7.png'
import img8 from '../../../assets/svg/today-pick8.png'
import imga8 from '../../../assets/svg/today-pick8.png'
const TodayPicks = () => {
    const [dataTab] = useState(
        [
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
        ]
    )
    const [dataPanel] = useState(
        [
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
                        nameCollection: "Creative Art 3D"
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
                        feature: 'Coming Soon'
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
                        nameCollection: "Creative Art 3D"
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
                        nameCollection: "Creative Art 3D"
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
                        nameCollection: "Creative Art 3D"
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
                        nameCollection: "Creative Art 3D"
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
                        nameCollection: "Creative Art 3D"
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
                        nameCollection: "Creative Art 3D"
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
                        nameCollection: "Creative Art 3D"
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
                        nameCollection: "Creative Art 3D"
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
                        nameCollection: "Creative Art 3D"
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
                        nameCollection: "Creative Art 3D"
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
                        nameCollection: "Creative Art 3D"
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
                        nameCollection: "Creative Art 3D"
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
                        nameCollection: "Creative Art 3D"
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
                        nameCollection: "Creative Art 3D"
                    },
                ]
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
                        nameCollection: "Creative Art 3D"
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
                        nameCollection: "Creative Art 3D"
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
                        nameCollection: "Creative Art 3D"
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
                        nameCollection: "Creative Art 3D"
                    },
                ]
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
                        nameCollection: "Creative Art 3D"
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
                        nameCollection: "Creative Art 3D"
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
                        nameCollection: "Creative Art 3D"
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
                        nameCollection: "Creative Art 3D"
                    },
                ]
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
                        nameCollection: "Creative Art 3D"
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
                        nameCollection: "Creative Art 3D"
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
                        nameCollection: "Creative Art 3D"
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
                        nameCollection: "Creative Art 3D"
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
                        nameCollection: "Creative Art 3D"
                    },
                ]
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
                        nameCollection: "Creative Art 3D"
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
                        nameCollection: "Creative Art 3D"
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
                        nameCollection: "Creative Art 3D"
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
                        nameCollection: "Creative Art 3D"
                    },
                ]
            },
        ]
    )

    const [visible , setVisible] = useState(8);
    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 4);
    }

    const [modalShow, setModalShow] = useState(false);

    return (
        <Fragment>
            <div className="tf-section sc-explore-2">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="seclect-box style3">
                                <div id="artworks" className="dropdown">
                                    <Link to="#" className="btn-selector nolink">All Artworks</Link>
                                    <ul>
                                        <li><span>Abstraction</span></li>
                                        <li className="active"><span>Skecthify</span></li>
                                        <li><span>Patternlicious</span></li>
                                        <li><span>Virtuland</span></li>
                                        <li><span>Papercut</span></li>
                                    </ul>
                                </div>
                                <div id="sort-by" className="dropdown style-2">
                                    <Link to="#" className="btn-selector nolink">Sort by</Link>
                                    <ul>
                                        <li><span>Top rate</span></li>
                                        <li className="active"><span>Mid rate</span></li>
                                        <li><span>Low rate</span></li>
                                    </ul>
                                </div>    
                            </div>
                            <div className="flat-tabs explore-tab">
                                <Tabs >
                                    <TabList>
                                        {
                                            dataTab.map(data=> (
                                                <Tab key={data.id} >{data.title}</Tab>
                                            ))
                                        }
                                    </TabList>
                                    {
                                        dataPanel.map(data =>(
                                            <TabPanel key={data.id}>
                                                {
                                                    
                                                    data.dataContent.slice(0,visible).map (item=>(
                                                    <div key={item.id} className={`sc-card-product explode style2 mg-bt`}>                               
                                                        <div className="card-media">
                                                            <Link to="#"><img src={item.img} alt="Axies" /></Link>
                                                            <div className="button-place-bid">
                                                                <button onClick={() => setModalShow(true)} className="sc-button style-place-bid style bag fl-button pri-3"><span>Place Bid</span></button>
                                                            </div>
                                                            
                                                            <div className="coming-soon">{item.feature}</div>
                                                        </div>
                                                        <div className="card-title">
                                                            <h5><Link to="#">"{item.title}"</Link></h5>
                                                            
                                                        </div>
                                                        <div className="meta-info">
                                                            <div className="author">
                                                                <div className="avatar">
                                                                    <img src={item.imgAuthor} alt="Axies" />
                                                                </div>
                                                                <div className="info">
                                                                    <span>Creator</span>
                                                                    <h6> <Link to="#">{item.nameAuthor}</Link> </h6>
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
                                                            <Link to="/activity" className="view-history reload">View History</Link>
                                                        </div>
                                                    </div>
                                                    ))
                                                }
                                                {
                                                    visible < data.dataContent.length && 
                                                    <div className="col-md-12 wrap-inner load-more text-center"> 
                                                        <Link to="#" id="load-more" className="sc-button loadmore fl-button pri-3" onClick={showMoreItems}><span>Load More</span></Link>
                                                    </div>
                                                }
                                            </TabPanel>
                                        ))
                                    }
                                </Tabs>
                            </div> 
                        </div>   
                    </div>
                </div>
            </div>
            <CardModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </Fragment>
    );
}

export default TodayPicks;
