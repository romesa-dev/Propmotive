import React from "react";
import Banner from "../components/Banner/banner";
import { SquareCardSm } from "./home";
import { UseShopPageStyle } from "./shopPage.style";
import { Accordion, Box, Flex, Group, List, Radio, Text } from "@mantine/core";

export default function ShopPage() {
  const {
    classes: {
      contaienr1,
      contaienr2,
      filterSideBar,
      priceFilter,
      filter2SideBar,
      mainWraper,
      list,
      responsive,
      accordionContainer,
      forResponsiveMd,
    },
  } = UseShopPageStyle();
  return (
    <div>
      <Banner imgUrl={"./HeroBanner.png"} />
      
      <div className={responsive} id="djhofe">
      <Accordion
            variant="filled"
            chevronPosition="left"
            defaultValue="customization"
      >
              <Accordion.Item value="customization">
                <Accordion.Control bg={"#d8e6d8cf"}>
                  <Text fw={600} fz={17}>
                    Customization
                  </Text>
                </Accordion.Control>
                <Accordion.Panel bg={"#d8e6d8cf"}></Accordion.Panel>
              </Accordion.Item>

              <div className={accordionContainer}>
                <Accordion.Item value="Indoor Plants">
                  <Accordion.Control bg={"#d8e6d8cf"}>
                    <Text fw={600}>Indoor Plants</Text>
                  </Accordion.Control>

                  <Accordion.Panel bg={"#d8e6d8cf"}>
                    <div className={list}>
                      <a href="">Maidenhair Fern</a>
                      <a href="">Kentia Palm</a>
                      <a href="">Snake Plant</a>
                      <a href="">Others</a>
                    </div>
                  </Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item value="Outdoor Plants" bg={"unset"}>
                  <Accordion.Control bg={"#d8e6d8cf"}>
                    <Text fw={600}>Outdoor Plants</Text>
                  </Accordion.Control>

                  <Accordion.Panel bg={"#d8e6d8cf"}></Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item value="Medicinal Plants">
                  <Accordion.Control bg={"#d8e6d8cf"}>
                    <Text fw={600}>Medicinal Plants</Text>
                  </Accordion.Control>
                  <Accordion.Panel bg={"#d8e6d8cf"}></Accordion.Panel>
                </Accordion.Item>
              </div>
            </Accordion>
      </div>

      <div className={mainWraper}>
        <div className={contaienr1}>
          <div className={filterSideBar}>
            <Accordion
              variant="filled"
              chevronPosition="left"
              defaultValue="customization"
            >
              <Accordion.Item value="customization">
                <Accordion.Control bg={"#F0F5F0"}>
                  <Text fw={400} fz={20}>
                    Customization
                  </Text>
                </Accordion.Control>
                <Accordion.Panel bg={"#F0F5F0"}></Accordion.Panel>
              </Accordion.Item>

              <div style={{ paddingLeft: 20 }}>
                <Accordion.Item value="Indoor Plants">
                  <Accordion.Control bg={"#F0F5F0"}>
                    <Text fw={600}>Indoor Plants</Text>
                  </Accordion.Control>

                  <Accordion.Panel bg={"#F0F5F0"}>
                    <div className={list}>
                      <a href="">Maidenhair Fern</a>
                      <a href="">Kentia Palm</a>
                      <a href="">Snake Plant</a>
                      <a href="">Others</a>
                    </div>
                  </Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item value="Outdoor Plants" bg={"unset"}>
                  <Accordion.Control bg={"#F0F5F0"}>
                    <Text fw={600}>Outdoor Plants</Text>
                  </Accordion.Control>

                  <Accordion.Panel bg={"#F0F5F0"}></Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item value="Medicinal Plants">
                  <Accordion.Control bg={"#F0F5F0"}>
                    <Text fw={600}>Medicinal Plants</Text>
                  </Accordion.Control>
                  <Accordion.Panel bg={"#F0F5F0"}></Accordion.Panel>
                </Accordion.Item>
              </div>
            </Accordion>
          </div>
          <div className={priceFilter}>
            <Accordion variant="filled" defaultValue="customization">
              <Accordion.Item value="price">
                <Accordion.Control bg={"#F0F5F0"}>
                  <Text fw={400} fz={20}>
                    Price
                  </Text>
                </Accordion.Control>
                <Accordion.Panel bg={"#F0F5F0"}></Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className={filter2SideBar}>
            <Radio.Group
              name="favoriteFramework"
              label={
                <Text fw={400} fz={20}>
                  Include
                </Text>
              }
              ml={24}
              lh={"24px"}
            >
              <Group mt="xs">
                <Flex direction={"column"} gap={4}>
                  <Radio value="planter" label="Planter" />
                  <Radio value="combo" label="Combo" />
                  <Radio value="flowers" label="Flowers" />
                  <Radio value="service" label="Service" />
                </Flex>
              </Group>
            </Radio.Group>
          </div>
        </div>
        <div className={contaienr2}>
          <SquareCardSm
            plantName={"Jade Terrarium"}
            imageUrl="./SqaureSmCardImg/jadeTerrarium.png"
          />
          <SquareCardSm
            plantName={"Ficus Benjamina"}
            imageUrl="./SqaureSmCardImg/ficusBenjamina.png"
          />
          <SquareCardSm
            plantName={"Syngorium Plant"}
            imageUrl="./SqaureSmCardImg/syngoriumPlant.png"
          />
          <SquareCardSm
            plantName={"Chlorophytu Lemon"}
            imageUrl="./SqaureSmCardImg/chlorophytumLemon.png"
          />
          <SquareCardSm
            plantName={"Aloe Rauhii"}
            imageUrl="./SqaureSmCardImg/sansevieriaBlack.png"
          />
          <SquareCardSm
            plantName={"Areca Palm"}
            imageUrl="./SqaureSmCardImg/arecaPalm.png"
          />
          <SquareCardSm
            plantName={"Sansevieria Black"}
            imageUrl="./SqaureSmCardImg/aloeRauhii.png"
          />
          <SquareCardSm
            plantName={"Syngorium Plant"}
            imageUrl="./SqaureSmCardImg/syngoriumPlant.png"
          />
          <SquareCardSm
            plantName={"Cactus Peruvianus"}
            imageUrl="./SqaureSmCardImg/cactusPeruvianus.png"
          />
        </div>
      </div>
    </div>
  );
}
