import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductsPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="media/images/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="#"
        learnMore="#"
        googlePlay="#"
        appStore="#"
      />
      <RightSection
        image1URL="media/images/console.png"
        product1Name="Console"
        product1Description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learn1More="#"
      />
      <LeftSection
        imageURL="media/images/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        Coin="#"
        googlePlay="#"
        appStore="#"
      />
      <RightSection
        image1URL="media/images/console.png"
        product1Name="Kite Connect API"
        product1Description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." kite1Connect="#"
      />
      <LeftSection
        imageURL="media/images/kite.png"
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        googlePlay="#"
        appStore="#"
      />

      <Universe />
    </>
  );
}

export default ProductsPage;
