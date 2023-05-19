import { createStyles } from "@mantine/core";

export const UseRoundCardStyle = createStyles((theme) => ({
  mainWraper: {
    marginBottom: 120,
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "column",
  },
  breadCrumb: {
    justifyContent: "end",
    marginTop: "20px",
    marginRight: "40px",
  },
  cardsWraper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    width: "100%",
    [theme.fn.smallerThan("sm")]: {
      minWidth: "390px",
      marginBottom: "10px",
    },
  },

  mainCard: {
    [theme.fn.smallerThan("sm")]: {
      width: "115px",
      height: "9.4375em",
      ["& > img"]: {
        width: "100px",
        height: "100px",
        margin: "0 auto",
      },
    },
  },

  text: {
    display: "flex",
    justifyContent: "center",
    fontWeight: 700,
    fontSize: "1em",
  },
}));
