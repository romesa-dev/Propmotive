import { Box } from "@mantine/core";
import { SubHeading } from "../Typography/text";
import { UseRoundCardStyle } from "./sectionCards.style";

export default function SectionCard({ children, text = "" }) {
  const {
    classes: { cardsWraper, mainWraper },
  } = UseRoundCardStyle();

  return (
    <div className={mainWraper}>
      {text ? (
        <Box mb={20}>
          <SubHeading>{text}</SubHeading>
        </Box>
      ) : (
        ""
      )}

      <div className={cardsWraper}>{children}</div>
    </div>
  );
}
