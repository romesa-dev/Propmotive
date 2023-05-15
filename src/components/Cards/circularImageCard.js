import { Image, Paper, Text } from "@mantine/core";
import { UseMainCardStyle } from "./circularImageCard.style";

export default function CircularImageCard() {
  const {
    classes: { mainCard, text, wraper },
  } = UseMainCardStyle();
  return (
    
    <Paper className={wraper}>
      <div className={mainCard}>
        <Image src={"./bonsai.png"} />
        <Text className={text}>BONSAI</Text>
      </div>
      <div className={mainCard}>
        <Image src={"./cactus.png"} />
        <Text className={text}>CACTUS</Text>
      </div>
      <div className={mainCard}>
        <Image src={"./creepers.png"} />
        <Text className={text}>CREEPERS</Text>
      </div>
      <div className={mainCard}>
        <Image src={"./succulents.png"} />
        <Text className={text}>SUCCULENTS</Text>
      </div>
      <div className={mainCard}>
        <Image src={"./seeds.png"} />
        <Text className={text}>SEEDS</Text>
      </div>
      <div className={mainCard}>
        <Image src={"./gifting.png"} />
        <Text className={text}>GIFTING</Text>
      </div>
    </Paper>
  );
}
