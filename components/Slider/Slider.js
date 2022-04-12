import React,{useEffect,useState} from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Navigation, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import heroSliderData from "./data_slider";

const Slider = () => {
  const data = heroSliderData;
  const [isLoading,setLoading] = useState(true)
  useEffect(()=>{
    if(typeof window !== undefined){
      setLoading(false)
    }
  },[typeof window])
  return (
    <div className="mainslider">
      <Swiper
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        scrollbar={{ draggable: true }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index} className={isLoading ? "" :item.class}>
            <SliderItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

Slider.propTypes = {
  data: PropTypes.array.isRequired,
  control: PropTypes.bool,
  auto: PropTypes.bool,
  timeOut: PropTypes.number,
};
const SliderItem = (props) => (
  <div className="flat-title-page">
    <img
      className="bgr-gradient gradient1"
      src={"/assets/images/backgroup-secsion/bg-gradient1.png"}
      alt="Axies"
    />
    <img
      className="bgr-gradient gradient2"
      src={"/assets/images/backgroup-secsion/bg-gradient2.png"}
      alt="Axies"
    />
    <img
      className="bgr-gradient gradient3"
      src={"/assets/images/backgroup-secsion/bg-gradient3.png"}
      alt="Axies"
    />
    <div className="shape item-w-16"></div>
    <div className="shape item-w-22"></div>
    <div className="shape item-w-32"></div>
    <div className="shape item-w-48"></div>
    <div className="shape style2 item-w-51"></div>
    <div className="shape style2 item-w-51 position2"></div>
    <div className="shape item-w-68"></div>
    <div className="overlay"></div>
    <div
      className="swiper-container mainslider home"
      style={{ marginTop: "45px" }}
    >
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <div className="slider-item">
            <div className="themesflat-container ">
              <div className="wrap-heading flat-slider flex">
                <div className="content">
                  <h1 className="heading" style={{ color: "#73DE4E" }}>
                    {props.item.title_1}
                  </h1>
                  <h3 className=" mb-style text-gray">
                    {/* <span className="tf-text s1">{props.item.title_2}</span>                                           */}
                    is an entire unique
                  </h3>
                  <div className="mt-3">
                    <span>
                      <span className="f-32 ftw-600">{props.item.title_3}</span>{" "}
                      <span className="text-gray solana-text ml-2">
                        {" "}
                        based in
                      </span>
                    </span>
                  </div>
                  <h3 className=" mb-style text-gray mt-3">
                    {" "}
                    Solana blockchain.
                  </h3>
                  <div className="flat-bt-slider flex style2 mt-5">
                    <Link href="/explore">
                      <a className="sc-button header-slider style style-1 rocket fl-button pri-1">
                        <span>Explore</span>
                      </a>
                    </Link>
                    {/* <Link to="/create-item" className="sc-button header-slider style style-1 note fl-button pri-1"><span>Create
                                        </span></Link> */}
                  </div>
                </div>
                <div className="image">
                  {/* <img className="img-bg" src={props.item.imgbg} alt="axies" /> */}
                  <img src={props.item.img} alt="axies" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Slider;
