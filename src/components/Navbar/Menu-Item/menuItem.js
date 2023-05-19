import { Box, Button, Flex, Group, Menu, Text } from "@mantine/core";
import { DownArrow } from "../../Icons/icons";

export default function dropDownMenu({ children, MenuDropdownComponent }) {
  return (
    <Menu withArrow arrowPosition="bottom">
      <Menu.Target>
        <Button rightIcon={<DownArrow />} variant="#343434">
          <Text fw={"600"} h={"25px"} mw={"71px"} fz={"18px"}>
            {children}
          </Text>
        </Button>
      </Menu.Target>
      {MenuDropdownComponent ? <MenuDropdownComponent /> : ""}
    </Menu>
  );
}

export function PlainMenu({ children }) {
  return (
    <Menu>
      <div>
        <Button variant="#343434">
          <Text fw={"600"} h={"25px"} w={51} fz={"18px"}>
            {children}
          </Text>
        </Button>
      </div>
    </Menu>
  );
}
