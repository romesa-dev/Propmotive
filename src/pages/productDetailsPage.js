import React from "react";
import {
  Image,
  Button,
  Text,
  Input,
  Select,
  NativeSelect,
  TextInput,
  Box,
  Accordion,
  BackgroundImage,
  Tabs,
} from "@mantine/core";
import { UseProductDetailsPageStyle } from "./productDetailsPage.style";
// import "./productDetailsPage.css";
import { ArrowLeft, ArrowRight4, DownArrow } from "../components/Icons/icons";
import { Carousel } from "@mantine/carousel";
import { Paragraph } from "../components/Typography/text";
import HandlersWrapper from "../components/Number-Input/number-input";
import { useState } from "react";
import { ShopButton } from "../components/Buttons/shop-button";
import { SquareCardSm } from "./home";
import SectionCard from "../components/Cards/sectionCards";

export default function ProductDetailsPage() {
  const {
    classes: {
      productPage,
      details,
      productDetails,
      sectionHotSale,
      productImages,
      aboutProduct,
      quantity,
      productDeliveryResult,
      nativeSelect,
      tabs,
      detailsText,
      quantityIncludeWraper,
      productImgResponsiveSm,
    },
  } = UseProductDetailsPageStyle();

  const [dataVal, setDataVal] = useState(["Yes", "No"]);

  const inputString = `With rounded light green and white-striped leaves, the 
  Calathea Orbifolia is a decorative and unique houseplant.`;

  return (
    <div className={productPage}>
      <div className={details}>
        <div className={productImages}>
            <Image id="jgoe" w={"fit-content"} src={"ThumbnailImages/Image.png"} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: 560,
              height: 108,
            }}
          >
            <Carousel
              slidesToScroll={4}
              slideSize="20%"
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
              loop
              slideGap="md"
              // draggable={false}
              controlsOffset={0}
              align="start"
            >
              <Carousel.Slide>
                <Image
                  width={113}
                  height={108}
                  radius={8}
                  src={
                    "ThumbnailImages/8deb852af8b81607aca11939c1a509d9(1).jpg"
                  }
                />
              </Carousel.Slide>
              <Carousel.Slide>
                <Image
                  width={113}
                  height={108}
                  radius={8}
                  src={"ThumbnailImages/54317b5b76943df271ba7c0d48c39c4c.jpg"}
                />
              </Carousel.Slide>

              <Carousel.Slide>
                <Image
                  width={113}
                  height={108}
                  radius={8}
                  src={"ThumbnailImages/1c4feb9dfc8966175ba26e05db501435.jpg"}
                />
              </Carousel.Slide>

              <Carousel.Slide>
                <Image
                  width={113}
                  height={108}
                  radius={8}
                  src={"ThumbnailImages/c512f5ac8705073bdddf368c60c979fe.jpg"}
                />
              </Carousel.Slide>
            </Carousel>
          </div>
        </div>
        <div className={productImgResponsiveSm}>
          <Carousel
            slidesToScroll={1}
            slideSize="20%"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
            loop
            slideGap="md"
            // draggable={false}
            withIndicators
            align="start"
          >
            <Carousel.Slide>
              <Image
                width={560}
                height={553}
                src={"ThumbnailImages/8deb852af8b81607aca11939c1a509d9(1).jpg"}
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image
                width={560}
                height={553}
                src={"ThumbnailImages/54317b5b76943df271ba7c0d48c39c4c.jpg"}
              />
            </Carousel.Slide>

            <Carousel.Slide>
              <Image
                width={560}
                height={553}
                src={"ThumbnailImages/1c4feb9dfc8966175ba26e05db501435.jpg"}
              />
            </Carousel.Slide>

            <Carousel.Slide>
              <Image
                width={560}
                height={553}
                src={"ThumbnailImages/c512f5ac8705073bdddf368c60c979fe.jpg"}
              />
            </Carousel.Slide>
          </Carousel>
        </div>
        <div className={aboutProduct}>
          <div>
            <Text fw={700} fz={32}>
              Hoya Linearis
            </Text>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 16,
              }}
            >
              <Text fw={400} fz={32}>
                $ 350
              </Text>
              <Text
                fw={300}
                fz={24}
                color="red"
                pl={8}
                style={{ textDecorationLine: " line-through" }}
              >
                $ 450
              </Text>
            </div>

            <Text fz={20} color={"#34343499"}>
              <Paragraph inputString={inputString} />
            </Text>

            <div className={quantityIncludeWraper}
              style={{

              }}
            >
              <div className={quantity}>
                <Text fz={20}>Quantity</Text>
                <HandlersWrapper />
              </div>

              <div className={nativeSelect}>
                <Text fz={20}>Include Planter</Text>
                <NativeSelect
                  data={dataVal}
                  rightSection={<DownArrow />}
                  style={{
                    width: "76px",
                    border: "2px solid #343434",
                    borderRadius: "4px",
                  }}
                />
              </div>
            </div>

            <div style={{ width: 344 }}>
              <ShopButton>
                <Text fw={700} fz={20}>
                  Add to Cart
                </Text>
              </ShopButton>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <Text fw={600} fz={20}>
              Delivery
            </Text>
            <Text fw={400} fz={16} color={"#34343499"}>
              Enter your Pincode to check delivery time.
            </Text>
            <div
              style={{
                width: 225,
                display: "flex",
                alignItems: "center",
              }}
            >
              <div style={{ border: "2px solid #343434", borderRadius: 4 }}>
                <TextInput />
              </div>
              <Button
                style={{
                  fontWeight: 600,
                  fontSize: 20,
                  color: "#3B823E",
                  backgroundColor: "unset",
                }}
              >
                CHECK
              </Button>
            </div>
            <div className={productDeliveryResult}>
              <Text color={"#34343499"}>
                <p>Delivery available for this loaction.</p>
                <p>Typically delivered in 5-7 working days.</p>
                <p>Standard Delivery.</p>
              </Text>
            </div>
          </div>
        </div>
      </div>
      <div className={productDetails}>
        <BackgroundImage
          style={{
            backgroundColor: "#506b52",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "fit-content",
            paddingBottom: 50
          }}
          src="ThumbnailImages/Background.png "
        >
          <div id="jofienao" style={{ width: "90%", height: "fit-content" }}>
            <Tabs defaultValue="gallery" allowTabDeactivation={false}>
              <Tabs.List style={{ height: 67, borderBottom: "unset" }}>
                <Tabs.Tab className={tabs} value="gallery">
                  Gallery
                </Tabs.Tab>
                <Tabs.Tab className={tabs} value="messages">
                  Messages
                </Tabs.Tab>
                <Tabs.Tab className={tabs} value="settings">
                  Settings
                </Tabs.Tab>
              </Tabs.List>

              <Tabs.Panel value="gallery" pt="xs">
                <div className={detailsText}>
                  <div>
                    <Text fw={600} fz={20}>
                      Weekly Watering
                    </Text>
                    <Text fw={300} fz={20}>
                      Calatheas enjoy weekly waterings, allowing the top 2’ of
                      soil to dry out partially. In winter, we recommend
                      watering less frequently to prevent overwatering and root
                      rot. This plant is not very drought tolerant, and extended
                      periods of dryness will cause leaf edges to brown.
                    </Text>
                  </div>
                  <div>
                    <Text fw={600} fz={20}>
                      Light Requirements
                    </Text>
                    <Text fw={300} fz={20}>
                      Calatheas thrive in medium, indirect sunlight but tolerate
                      lower light levels too. Bright direct sunlight can cause
                      the stunning colours on their leaves to fade, with
                      prolonged exposure likely to burn and scorch their leaves.
                    </Text>
                  </div>
                  <div>
                    <Text fw={600} fz={20}>
                      Humidity
                    </Text>
                    <Text fw={300} fz={20}>
                      Your Calathea will also appreciate being placed in a humid
                      environment, which you can create with by misting it
                      frequently, placing it close to other plants or on a
                      pebble tray partly filled with water. Calatheas thrive in
                      steamy bathrooms and kitchens.
                    </Text>
                  </div>
                </div>
              </Tabs.Panel>

              <Tabs.Panel value="messages" pt="xs">
                <div className={detailsText}>
                  <div>
                    <Text fw={600} fz={20}>
                      Weekly Watering
                    </Text>
                    <Text fw={300} fz={20}>
                      Calatheas enjoy weekly waterings, allowing the top 2’ of
                      soil to dry out partially. In winter, we recommend
                      watering less frequently to prevent overwatering and root
                      rot. This plant is not very drought tolerant, and extended
                      periods of dryness will cause leaf edges to brown.
                    </Text>
                  </div>
                  <div>
                    <Text fw={600} fz={20}>
                      Light Requirements
                    </Text>
                    <Text fw={300} fz={20}>
                      Calatheas thrive in medium, indirect sunlight but tolerate
                      lower light levels too. Bright direct sunlight can cause
                      the stunning colours on their leaves to fade, with
                      prolonged exposure likely to burn and scorch their leaves.
                    </Text>
                  </div>
                  <div>
                    <Text fw={600} fz={20}>
                      Humidity
                    </Text>
                    <Text fw={300} fz={20}>
                      Your Calathea will also appreciate being placed in a humid
                      environment, which you can create with by misting it
                      frequently, placing it close to other plants or on a
                      pebble tray partly filled with water. Calatheas thrive in
                      steamy bathrooms and kitchens.
                    </Text>
                  </div>
                </div>
              </Tabs.Panel>

              <Tabs.Panel value="settings" pt="xs">
                <div className={detailsText}>
                  <div>
                    <Text fw={600} fz={20}>
                      Weekly Watering
                    </Text>
                    <Text fw={300} fz={20}>
                      Calatheas enjoy weekly waterings, allowing the top 2’ of
                      soil to dry out partially. In winter, we recommend
                      watering less frequently to prevent overwatering and root
                      rot. This plant is not very drought tolerant, and extended
                      periods of dryness will cause leaf edges to brown.
                    </Text>
                  </div>
                  <div>
                    <Text fw={600} fz={20}>
                      Light Requirements
                    </Text>
                    <Text fw={300} fz={20}>
                      Calatheas thrive in medium, indirect sunlight but tolerate
                      lower light levels too. Bright direct sunlight can cause
                      the stunning colours on their leaves to fade, with
                      prolonged exposure likely to burn and scorch their leaves.
                    </Text>
                  </div>
                  <div>
                    <Text fw={600} fz={20}>
                      Humidity
                    </Text>
                    <Text fw={300} fz={20}>
                      Your Calathea will also appreciate being placed in a humid
                      environment, which you can create with by misting it
                      frequently, placing it close to other plants or on a
                      pebble tray partly filled with water. Calatheas thrive in
                      steamy bathrooms and kitchens.
                    </Text>
                  </div>
                </div>
              </Tabs.Panel>
            </Tabs>
          </div>
        </BackgroundImage>
      </div>

      <div className={sectionHotSale}>
        <SectionCard text="You May Also Like...">
        <SquareCardSm
            origPrice={"$ 450"}
            plantName={"Adenium Plant"}
            imageUrl="./SqaureSmCardImg/adeniumPlant.png"
          />
          <SquareCardSm
            origPrice={"$ 450"}
            plantName={"Ficus Twilight"}
            imageUrl="./SqaureSmCardImg/ficusTwilight.png"
          />
          <SquareCardSm
            origPrice={"$ 450"}
            plantName={"Rhoeo Plant"}
            imageUrl="./SqaureSmCardImg/rhoeoPlant.png"
          />
          <SquareCardSm
            origPrice={"$ 450"}
            plantName={"Ctenanthe burle"}
            imageUrl="./SqaureSmCardImg/ctenantheburle.png"
          />
        </SectionCard>
      </div>
    </div>
  );
}
