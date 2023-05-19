import { Button, Text } from "@mantine/core";
import { useButtonMdStyle } from "./shop-buttons.style";

export function ShopButton({children}) {
  const {
    classes: { buttonMd },
  } = useButtonMdStyle();
  return (
    <>
      <Button className={buttonMd} variant="">
        <Text color="white">{children}</Text>
      </Button>
    </>
  );
}
