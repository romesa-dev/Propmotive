import React, { useState, useRef } from "react";
import { ActionIcon, Text, Title } from "@mantine/core";
import { UseNumberInputStyle } from "./number-input.style";

export default function NumberInput() {
  const [value, setValue] = useState(1);
  const {
    classes: { numberInput },
  } = UseNumberInputStyle();
  return (
    <div className={numberInput}>
      <ActionIcon
        size={28}
        onClick={() => {
          if (value > 1) {
            setValue(value - 1);
          } else {
            return "";
          }
        }}
      >
        <Text color={"black"}>-</Text>
      </ActionIcon>
      <Title order={5}>{value}</Title>
      <ActionIcon
        size={28}
        onClick={() => {
          if (value < 10) {
            setValue(value + 1);
          } else {
            alert("Limit Exced");
          }
        }}
      >
        <Text color={"black"}>+</Text>
      </ActionIcon>
    </div>
  );
}
