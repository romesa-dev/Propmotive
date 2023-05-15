import { createStyles } from "@mantine/core";

export const UseMainCardStyle = createStyles(() => ({
  wraper: {
    display: "flex",
    // height: "17.1875em",
    marginTop:"30px",
    justifyContent: "center",
    alignItems: "center",
  },

  mainCard: {
    width: "11.25em",
    height: "14.4375em",
  },

  text: {
    display: "flex",
    justifyContent: "center",
    fontWeight: 700,
    fontSize: "1em",
  },
}));
