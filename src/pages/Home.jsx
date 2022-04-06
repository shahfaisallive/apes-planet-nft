import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import heroSliderData from '../assets/fake-data/data-slider';
import Slider from '../components/slider/Slider';
import liveAuctionData from '../assets/fake-data/data-live-auction';
import LiveAuction from '../components/layouts/LiveAuction';
import TopSeller from '../components/layouts/TopSeller';
import topSellerData from '../assets/fake-data/data-top-seller'
import TodayPicks from '../components/layouts/TodayPicks';
import todayPickData from '../assets/fake-data/data-today-pick';
import PopularCollection from '../components/layouts/PopularCollection';
import popularCollectionData from '../assets/fake-data/data-popular-collection';
import Create from '../components/layouts/Create';
import CoinSecond from "../assets/svg/coin2.png"
import Coin from "../assets/svg/coin1.png"
import Talwar from "../assets/svg/talwar.png"

const Home = () => {

    return (
        <div className='home-1'>
            <img src={Coin} className="first-coin" alt='bgimg'/>
            <img src={CoinSecond} className="second-coin" alt='bgimg'/>
            <img src={Talwar} className="talwar-svg" alt='bgimg'/>

            <Header />
            <Slider data={heroSliderData} />
            <LiveAuction data={liveAuctionData} />
            <TopSeller data={topSellerData} />
            <TodayPicks data={todayPickData} />
            <PopularCollection data={popularCollectionData} />
            <Create />
            <Footer />
        </div>
    );
}

export default Home;
