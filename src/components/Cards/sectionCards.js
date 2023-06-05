import { Box } from "@mantine/core";
import { SubHeading } from "../Typography/text";
import { UseRoundCardStyle } from "./sectionCards.style";
import { useSmImgSectionStyle } from "../../pages/home.style";

export default function SectionCard({ children, text = "" }) {
  const {
    classes: { cardsWraper, mainWraper },
  } = UseRoundCardStyle();
  const {
    classes: { smImage },
    cx,
  } = useSmImgSectionStyle();

  return (
    <div className={mainWraper} data-masonry={`{ "itemSelector": ${smImage}, "columnWidth": 100 }`}>
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
