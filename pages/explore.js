import Head from "next/head";
import React from "react";
import Link from "next/link";
import Footer from "./../components/Layout/Footer";
import Header from "./../components/Layout/Header";
import ExploreData from "./../components/Explore/ExploreData";
const Explore = () => {
  return (
    <>
      <Head>
        <title>Explore </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="./assets/icon/Favicon.png" />
      </Head>
      <div className="explore">
        <Header />
        <section className="flat-title-page inner">
          <div className="overlay"></div>
          <div className="themesflat-container">
            <div className="row">
              <div className="col-md-12">
                <div className="page-title-heading mg-bt-12">
                  <h1 className="heading text-center">Explore</h1>
                </div>
                <div className="breadcrumbs style2">
                  <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="#">Explore</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ExploreData />
        <Footer />
      </div>
    </>
  );
};

export default Explore;
