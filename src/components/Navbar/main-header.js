import { Box, Flex, Group, Image, Input } from "@mantine/core";
import React from "react";
import { useMainHeaderStyles } from "./navbar.style";
import MenuItem, { PlainMenu } from "./Menu-Item/menuItem";
import { SearchIcon } from "../Icons/icons";
import { BiDotsVerticalRounded } from "react-icons/bi";

export default function MainHeader() {
  const {
    classes: {
      mainHeader,
      wraper,
      logo,
      menuItems,
      searchBar,
      input,
      menuItemsButton,
    },
    cx,
  } = useMainHeaderStyles();
  return (
    <Box className={mainHeader}>
      <Flex className={wraper}>
        <div className={logo}>
          <Image src={"./papLogo.png"} />
        </div>
        <div className={menuItems}>
          <Group h="56px">
            <PlainMenu>Home</PlainMenu>
            <MenuItem>Plants</MenuItem>
            <MenuItem>Planters</MenuItem>
            <MenuItem>Essentials</MenuItem>
            <MenuItem>Services</MenuItem>
          </Group>
        </div>
        <div className={searchBar}>
          <Input className={input} placeholder="search" icon={<SearchIcon />} />
        </div>
        <div className={menuItemsButton}>
          <BiDotsVerticalRounded fontSize={25} />
        </div>
      </Flex>
    </Box>
  );
}
