import React from "react";
import { Image, Button, Text, Input, Select } from "@mantine/core";
import { UseProductDetailsPageStyle } from "./productDetailsPage.style";
// import "./productDetailsPage.css";
import { ArrowLeft, ArrowRight4 } from "../components/Icons/icons";
import { useState } from 'react';
import { Carousel, Image } from '@mantine/core';

export default function ProductDetailsPage() {
  const {
    classes: {
      productPage,
      details,
      productImages,
      imageIcon,
      thumbnails,
      rectangleParent,
      frameChild,
      frameItem,
      navigateBeforeIcon,
      navigateNextIcon,
      frameParent,
      frameGroup,
      hoyaLinearisParent,
      hoyaLinearis,
      parent,
      div,
      div1,
      l,
      quantityParent,
      quantity,
      quantityChild,
      frameSelect,
      addToCartButton,
      addToCart,
      deliveryInfo,
      deliveryEnterYourPincodeToParent,
      delivery,
      enterYourPincode,
      pincode,
      pincodeChild,
      check,
      deliveryCheckResult,
      deliveryAvailableFor,

      productDetails,
      sectionHotSale
    },
  } = UseProductDetailsPageStyle();

  const [selectedImage, setSelectedImage] = useState('/ThumbnailImages/Rectangle-63.png');

  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className={productPage}>
      <div className={details}>
        <div className={productImages}>
        <Image className="image-icon" alt="" src={selectedImage} />
        <div className="thumbnails">
          <Carousel>
            <Image
              className="frame-child"
              alt=""
              src="/ThumbnailImages/Rectangle-63.png"
              onClick={() => handleThumbnailClick('/ThumbnailImages/Rectangle-63.png')}
            />
            <Image
              className="frame-item"
              alt=""
              src="/ThumbnailImages/Rectangle-62.png"
              onClick={() => handleThumbnailClick('/ThumbnailImages/Rectangle-62.png')}
            />
            <Image
              className="frame-item"
              alt=""
              src="/ThumbnailImages/Rectangle-64.png"
              onClick={() => handleThumbnailClick('/ThumbnailImages/Rectangle-64.png')}
            />
            <Image
              className="frame-item"
              alt=""
              src="/ThumbnailImages/Rectangle-65.png"
              onClick={() => handleThumbnailClick('/ThumbnailImages/Rectangle-65.png')}
            />
            </Carousel>
            <ArrowLeft className={navigateBeforeIcon} />
          </div>
        </div>
        <div className={productDetails}>
          <div className={frameParent}>
            <div className={frameGroup}>
              <div className={hoyaLinearisParent}>
                <Text className={hoyaLinearis} component="b">
                  Hoya Linearis
                </Text>
                <div className={parent}>
                  <Text component="div" className={div}>
                    $ 350
                  </Text>
                  <Text component="div" className={div1}>
                    $ 450
                  </Text>
                </div>
              </div>
              <div className={l}>
                With rounded light green and white-striped leaves, the Calathea
                Orbifolia is a decorative and unique houseplant.
              </div>
            </div>
            <div className={quantityParent}>
              <div className={quantity}>
                <div className={div}>Quantity</div>
                <Input
                  className={quantityChild}
                  type="number"
                  placeholder="1"
                />
              </div>
              <div className={quantity}>
                <div className={div}>Include Planter</div>
                <Select className={frameSelect} />
              </div>
            </div>
            <Button className={addToCartButton}>
              <Text className={addToCart} component="b">
                Add to Cart
              </Text>
            </Button>
          </div>
          <div className={deliveryInfo}>
            <div className={deliveryEnterYourPincodeToParent}>
              <div className={div}>
                <Text className={delivery} component="p">
                  Delivery
                </Text>
                <Text className={enterYourPincode} component="p">
                  Enter your Pincode to check delivery time.
                </Text>
              </div>
              <div className={pincode}>
                <Input
                  className={pincodeChild}
                  type="text"
                  placeholder="500009"
                />
                <Button className={check}>CHECK</Button>
              </div>
            </div>
            <div className={deliveryCheckResult}>
              <div className={div}>
                <Text className={deliveryAvailableFor} component="p">
                  Delivery available for this location.
                </Text>
                <Text className={deliveryAvailableFor} component="p">
                  Typically delivered in 5-7 working days.
                </Text>
                <Text className={deliveryAvailableFor} component="p">
                  Standard Delivery.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className={productDetails}></div> */}

      <div className={sectionHotSale}></div>
    </div>
  );
}

{
  /* <div className="details">
<div className="product-images">
  <img className="image-icon" alt="" src="/ImageSection/Image.png" />
  <div className="thumbnails">

    <ArrowRight4 className="navigate-next-black-24dp-icon"/>
    <div className="rectangle-parent">
      <img className="frame-child" alt="" src="/ThumbnailImages/Rectangle-63.png" />
      <img className="frame-item" alt="" src="/ThumbnailImages/Rectangle-62.png" />
      <img className="frame-item" alt="" src="/ThumbnailImages/Rectangle-64.png" />
      <img className="frame-item" alt="" src="/ThumbnailImages/Rectangle-65.png" />
    </div>
    <ArrowLeft className="navigate-before-black-24dp-icon"/>
  </div>
</div>
<div className="product-details">
  <div className="frame-parent">
    <div className="frame-group">
      <div className="hoya-linearis-parent">
        <b className="hoya-linearis">Hoya Linearis</b>
        <div className="parent">
          <div className="div">$ 350</div>
          <div className="div1">$ 450</div>
        </div>
      </div>
      <div className="l">
        With rounded light green and white-striped leaves, the Calathea
        Orbifolia is a decorative and unique houseplant.
      </div>
    </div>
    <div className="quantity-parent">
      <div className="quantity">
        <div className="div">Quantity</div>
        <input className="quantity-child" type="number" placeholder="1" />
      </div>
      <div className="quantity">
        <div className="div">Include Planter</div>
        <select className="frame-select" />
      </div>
    </div>
    <button className="add-to-cart-button">
      <b className="add-to-cart">Add to Cart</b>
    </button>
  </div>
  <div className="delivery-info">
    <div className="delivery-enter-your-pincode-to-parent">
      <div className="div">
        <p className="delivery">Delivery</p>
        <p className="enter-your-pincode">
          Enter your Pincode to check delivery time.
        </p>
      </div>
      <div className="pincode">
        <input
          className="pincode-child"
          type="text"
          placeholder="500009"
        />
        <button className="check">CHECK</button>
      </div>
    </div>
    <div className="delivery-check-result">
      <div className="div">
        <p className="delivery-available-for">
          Delivery available for this loaction.
        </p>
        <p className="delivery-available-for">
          Typically delivered in 5-7 working days.
        </p>
        <p className="delivery-available-for">Standard Delivery.</p>
      </div>
    </div>
  </div>
</div>
</div> */
}
