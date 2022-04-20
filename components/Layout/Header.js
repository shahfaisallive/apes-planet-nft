import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import menus from "./menus";
import DarkMode from "./DarkMode";
import ConnectWallet from "./Wallet.tsx"
const Header = () => {
  const router = useRouter();
  const pathname = router.pathname;

  const headerRef = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });
  const isSticky = (e) => {
    const header = document.querySelector(".js-header");
    const scrollTop = window.scrollY;
    scrollTop >= 300
      ? header.classList.add("is-fixed")
      : header.classList.remove("is-fixed");
    scrollTop >= 400
      ? header.classList.add("is-small")
      : header.classList.remove("is-small");
  };

  const menuLeft = useRef(null);
  const btnToggle = useRef(null);
  const btnSearch = useRef(null);

  const menuToggle = () => {
    menuLeft.current.classList.toggle("active");
    btnToggle.current.classList.toggle("active");
  };

  const searchBtn = () => {
    btnSearch.current.classList.toggle("active");
  };

  const [activeIndex, setActiveIndex] = useState(null);
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <header id="header_main" className="header_1 js-header" ref={headerRef}>
      <div className="themesflat-container">
        <div className="row">
          <div className="col-md-12">
            <div id="site-header-inner">
              <div className="wrap-box flex">
                <div id="site-logo" className="clearfix">
                  <div id="site-logo-inner">
                    <Link href="/" rel="home" className="main-logo1">
                      <a>
                        <img
                          className="logo"
                          id="logo_header1"
                          src={"/assets/images/logo/logo1.png"}
                          alt="ape-planet-logo"
                        />
                      </a>

                      {/* <img className='logo-dark'  id="logo_header" src={logodark} srcSet={`${logodark2x}`} alt="nft-gaming" /> */}
                      {/* <img className='logo-light'  id="logo_header" src={logoheader} srcSet={`${logoheader2x}`} alt="nft-gaming" /> */}
                    </Link>
                  </div>
                </div>
                <div
                  className="mobile-button"
                  ref={btnToggle}
                  onClick={menuToggle}
                >
                  <span></span>
                </div>
                <nav id="main-nav" className="main-nav" ref={menuLeft}>
                  <ul id="menu-primary-menu" className="menu">
                    {menus.map((data, index) => (
                      <li
                        key={index}
                        onClick={() => handleOnClick(index)}
                        className={`menu-item ${
                          data.namesub ? "menu-item-has-children" : ""
                        } ${activeIndex === index ? "active" : ""} `}
                      >
                        <Link href={data.links}>
                          <a>{data.name}</a>
                        </Link>
                        {data.namesub && (
                          <ul className="sub-menu">
                            {data.namesub.map((submenu) => (
                              <li
                                key={submenu.id}
                                className={
                                  pathname === submenu.links
                                    ? "menu-item current-item"
                                    : "menu-item"
                                }
                              >
                                <Link href={submenu.links}>
                                  <a>{submenu.sub}</a>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="flat-search-btn flex">
                  <div className="header-search flat-show-search" id="s1">
                    <Link href="#">
                      <a
                        className="show-search header-search-trigger"
                        onClick={() => searchBtn()}
                      >
                        <i className="far fa-search"></i>
                      </a>
                    </Link>
                    <div className="top-search" ref={btnSearch}>
                      <form
                        action="#"
                        method="get"
                        role="search"
                        className="search-form"
                      >
                        <input
                          type="search"
                          id="s"
                          className="search-field"
                          placeholder="Search..."
                          name="s"
                          title="Search for"
                          required=""
                        />
                        <button
                          className="search search-submit"
                          type="submit"
                          title="Search"
                        >
                          <i className="icon-fl-search-filled"></i>
                        </button>
                      </form>
                    </div>
                  </div>

                  <ConnectWallet />

                  <div className="admin_active" id="header_admin">
                    <div className="header_avatar">
                      <div className="price">
                        <span>
                          2.45 <strong>SOL</strong>{" "}
                        </span>
                      </div>
                      <img
                        className="avatar"
                        src={"../../public/assets/images/avatar/avt-2.jpg"}
                        alt="avatar"
                      />
                      <div className="avatar_popup mt-20">
                        <div className="d-flex align-items-center copy-text justify-content-between">
                          <span> 13b9ebda035r178... </span>
                          <Link href="/" className="ml-2">
                            <a>
                              <i className="fal fa-copy"></i>
                            </a>
                          </Link>
                        </div>
                        <div className="d-flex align-items-center mt-10">
                          <img
                            className="coin"
                            src={"../../public/assets/images/icon/sun.png"}
                            alt="/"
                          />
                          <div className="info ml-10">
                            <p className="text-sm font-book text-gray-400">
                              Balance
                            </p>
                            <p className="w-full text-sm font-bold text-green-500">
                              16.58 SOL
                            </p>
                          </div>
                        </div>
                        <div className="hr"></div>
                        <div className="links mt-20">
                          <Link href="/">
                            <a>
                              <span>
                                {" "}
                                <i className="fab fa-accusoft"></i> My items
                              </span>
                            </a>
                          </Link>
                          <a className="mt-10" href="/edit-profile">
                            <i className="fas fa-pencil-alt"></i>{" "}
                            <span> Edit Profile</span>
                          </a>
                          <a className="mt-10" href="/login" id="logout">
                            <i className="fal fa-sign-out"></i>{" "}
                            <span> Logout</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DarkMode />
    </header>
  );
};

export default Header;
