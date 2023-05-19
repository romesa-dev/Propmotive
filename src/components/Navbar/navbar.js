import { Box, Button, Flex, Group, Image, Header } from "@mantine/core";
import MiniHeader from "./min-header";
import MainHeader from "./main-header";
import { useNavbarStyle } from "./navbar.style";
export default function NavBar() {
  const {
    classes: { navbar },
  } = useNavbarStyle();
  return (
    <div className={navbar}>
      <MiniHeader />
      <MainHeader />
    </div>
  );
}
