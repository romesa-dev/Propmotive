import { Box, Breadcrumbs, Button, Image, Text } from "@mantine/core";
import Banner from "../components/Banner/banner";
import SectionCards from "../components/Cards/sectionCards";
import { UseRoundCardStyle } from "../components/Cards/sectionCards.style";
import { ArrowRight } from "../components/Icons/icons";
import { Anchor } from "@mantine/core";
import {
  infoSection,
  useImageSectionStyle,
  useInfoSectionStyle,
  useSquareCardLgStyle,
  useSquareCardMdStyle,
  useSquareCardSmStyle,
} from "./home.style";
import { ShopButton } from "../components/Buttons/shop-button";
import { Paragraph } from "../components/Typography/text";

export default function Home() {
  const {
    classes: { breadCrumb },
  } = UseRoundCardStyle();

  const items = [{ title: "See all", href: "#" }].map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));
  return (
    <>
      <Banner />
      <Breadcrumbs className={breadCrumb} separator="" mt="xs">
        {items}
        <ArrowRight />
      </Breadcrumbs>
      <div
        style={{
          margin: "0 auto",
          //  border: "thin solid black",
          maxWidth: "90%",
          minWidth: "380px",
        }}
      >
        <SectionCards>
          <RoundImageCard
            caption="BONSAI"
            imageUrl="./RoundCardImg/bonsai.png"
          />
          <RoundImageCard
            caption="CACTUS"
            imageUrl="./RoundCardImg/cactus.png"
          />
          <RoundImageCard
            caption="CREEPERS"
            imageUrl="./RoundCardImg/creepers.png"
          />
          <RoundImageCard
            caption="SUCCULENTS"
            imageUrl="./RoundCardImg/succulents.png"
          />
          <RoundImageCard caption="SEEDS" imageUrl="./RoundCardImg/seeds.png" />
          <RoundImageCard
            caption="GIFTING"
            imageUrl="./RoundCardImg/gifting.png"
          />
        </SectionCards>

        <SectionCards text="Best Selling">
          <SquareCardMd imageUrl="./SquareMdCardImg/frame61.png" />
          <SquareCardMd imageUrl="./SquareMdCardImg/indoorPlants.png" />
          <SquareCardMd imageUrl="./SquareMdCardImg/floweringPlants.png" />
        </SectionCards>

        <SectionCards text="Trending Plants">
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
            plantName={"Cactus Peruvianus"}
            imageUrl="./SqaureSmCardImg/cactusPeruvianus.png"
          />
          <SquareCardSm
            plantName={"Chlorophytu Lemon"}
            imageUrl="./SqaureSmCardImg/chlorophytumLemon.png"
          />
          <SquareCardSm
            plantName={"Sansevieria Black"}
            imageUrl="./SqaureSmCardImg/aloeRauhii.png"
          />
          <SquareCardSm
            plantName={"Areca Palm"}
            imageUrl="./SqaureSmCardImg/arecaPalm.png"
          />
          <SquareCardSm
            plantName={"Aloe Rauhii"}
            imageUrl="./SqaureSmCardImg/sansevieriaBlack.png"
          />
        </SectionCards>

        <SectionCards text="Blogs">
          <SquareCardLg
            text={"8 Best Low Maintenance Plants For a Busy Home"}
            imageUrl="./SquareLgCardImg/blogCard1.jpg"
          />
          <SquareCardLg
            text={"Air Purifying Plants You Should Take Home Today"}
            imageUrl="./SquareLgCardImg/blogCard2.jpg"
          />
        </SectionCards>

        <SectionCards text="Hot Sale">
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
        </SectionCards>

        <SectionCards text="Planters">
          <SquareCardSm
            origPrice={"$ 450"}
            plantName={"Mint Fusion"}
            imageUrl="./SqaureSmCardImg/mintFusion.png"
          />
          <SquareCardSm
            origPrice={"$ 450"}
            plantName={"Ice Cream Pot"}
            imageUrl="./SqaureSmCardImg/iceCreamPot.png"
          />
          <SquareCardSm
            origPrice={"$ 450"}
            plantName={"Beige Fracture"}
            imageUrl="./SqaureSmCardImg/beigeFracture.png"
          />
          <SquareCardSm
            origPrice={"$ 450"}
            plantName={"Tale Pot"}
            imageUrl="./SqaureSmCardImg/talePot.png"
          />
        </SectionCards>

        <SectionCards>
          <InfoSection imageUrl="./SquareLgCardImg/infoImage.png" />
        </SectionCards>

        <SectionCards text="Celebs You Love, Love Us ">
          <SmImageContainer imageUrl="./ImageSection/Caleb1.png"/>
          <SmImageContainer imageUrl="./ImageSection/Caleb2.png"/>
          <SmImageContainer imageUrl="./ImageSection/Caleb3.png"/>
          <SmImageContainer imageUrl="./ImageSection/Caleb4.png"/>
        </SectionCards>
      </div>
    </>
  );
}

function RoundImageCard({ imageUrl, caption }) {
  const {
    classes: { mainCard, text },
    cx,
  } = UseRoundCardStyle();
  return (
    <div className={mainCard}>
      <Image src={imageUrl} />
      <Text className={text}>{caption}</Text>
    </div>
  );
}

function SquareCardMd({ imageUrl }) {
  const {
    classes: { squareCardMd },
    cx,
  } = useSquareCardMdStyle();

  return (
    <div className={squareCardMd}>
      <div id="10">
        <Image src={imageUrl} />
        <ShopButton>
          <Text>Shop Now</Text>
        </ShopButton>
      </div>
    </div>
  );
}

function SquareCardSm({ imageUrl, plantName, origPrice }) {
  const {
    classes: { squareCardSm },
    cx,
  } = useSquareCardSmStyle();
  return (
    <div className={squareCardSm}>
      <div>
        <Image src={imageUrl}></Image>
        <Text fw={700} fz={20}>
          {plantName}
        </Text>
        <div style={{ display: "flex" }}>
          <Text fw={400} fz={20}>
            $ 350
          </Text>
          <Text
            fw={400}
            fz={20}
            color="red"
            pl={8}
            style={{ textDecorationLine: " line-through" }}
          >
            {origPrice}
          </Text>
        </div>
        <ShopButton>
          <Text>Buy</Text>
        </ShopButton>
      </div>
    </div>
  );
}

function SquareCardLg({ imageUrl, text }) {
  const {
    classes: { squareCardLg },
    cx,
  } = useSquareCardLgStyle();

  return (
    <div style={{ padding: 10 }}>
      <div
        className={squareCardLg}
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "100%",
          borderRadius: 16,
          overflow: " auto",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden",
        }}
      >
        <div>
          <div>
            <Text fw={400} fz={28} ta={"center"} color="white">
              {text}
            </Text>
            <ShopButton>
              <Text>Read</Text>
            </ShopButton>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoSection({ imageUrl }) {
  const {
    classes: { InfoSection, infoSectionHeading, heading, outline, buttonSm, mainContainer, infoParagraph1, infoParagraph2 },
  } = useInfoSectionStyle();
  const inputString = `Whether it is growing your own food or setting up your roof-top garden, we provide the highest quality landscaping services,contributing to a greener world and substantial living!

                       Schedule your service appointment today!`;
  return (
    <Box className={mainContainer}>
      <div className={InfoSection}>
        <div>
          <div className={infoSectionHeading}>
            <div className={heading}>Landscape Gardening</div>
            <div className={outline}></div>
          </div>

          <div>
            <Text className={infoParagraph1}>
              <Paragraph inputString={inputString} />
            </Text>
            <Text className={infoParagraph2}>
              *Schedule your service appointment today!
            </Text>
          </div>

          <Button className={buttonSm} variant="">
            <Text color="white">Book Now!</Text>
          </Button>
        </div>
      </div>

      <div>
        <Image  miw={355} maw={588} mah={439} mih={388} src={imageUrl} />
      </div>
      
    </Box>
  );
}

function SmImageContainer({ imageUrl }){
  const {
    classes: { smImage },
    cx,
  } = useImageSectionStyle();
  return(
      <div className={smImage}>
        <div>
          <Image miw={200} maw={285} src={imageUrl}/>
        </div>
      </div>
  )
}
