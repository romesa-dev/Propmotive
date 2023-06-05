import { createStyles } from "@mantine/core";

export const useFooterStyle = createStyles((theme) => ({
  mainFooter: {
    width: "100%",
    height: "15.5625em",
    backgroundColor: "#436E35",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    [theme.fn.smallerThan("sm")]: {
      height: "auto",
      width: "100%",
    },
  },

  footer: {
    width: "90%",
    height: "auto",
    display: "flex",
    justifyContent: "center",
    [theme.fn.smallerThan("md")]: {
      transform: "scale(.75)",
      alignItems: "center",
      width: "100%",
      height: "100%",
    },
    [theme.fn.smallerThan("sm")]: {
      transform: "unset",
      flexDirection: "row",
      flexWrap: "wrap",
    },
  },

  textContainer: {
    // width: "47.01625em",
    // height: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    flexBasis: "40%",
    flexShrink: 1,
    paddingLeft: 10,
    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      width: "unset",
      marginTop: 20,
      paddingLeft: 20,
      flexBasis: "50%",
      maxWidth: "50%",
      alignItems: "center",
    },
  },

  logo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
    flex: "1 1 216px",
    ["& > div"]: {
      width: 216,
    },
    [theme.fn.smallerThan("sm")]: {
      flex: "1 1 100%",
      justifyContent: "start",
      paddingLeft: 20,
      marginTop: 20,
    },
  },

  badgContainer: {
    display: "flex",
    flexGrow: 1,
    // flexDirection:"column",
    justifyContent: "space-between",
    [theme.fn.smallerThan("sm")]: {
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      flexBasis: "50%",
      maxWidth: "50%",
    },
  },

  links: {
    width: "7.4375em",
    height: "100%",
    ["& > a"]: {
      width: "100%",
      display: "flex",
      textDecoration: "none",
      color: "white",
    },
    [theme.fn.smallerThan("sm")]: {
      marginBottom: 8,
      ["& > a"]: {
        fontSize: 16,
      },
      ["& > div > Text"]: {
        fontSize: 20,
      },
    },
  },

  badgText: {
    width: "176px",
    height: "140px",
    position: "relative",
    display: "flex",
    justifyContent: "end",
    ["& > p"]: {
      width: 148,
      fontSize: 16,
      fontWeight: 400,
      margin: 0,
      fontWeight: 400,
      color: "white",
    },
    [theme.fn.smallerThan("sm")]: {},
  },

  icons: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    height: "3em",
    position: "absolute",
    bottom: 0,
    ["& > div"]: {
      width: "100%",
      height: "100%",
    },
  },

  compantBadge: {
    width: "178px",
    flexBasis: "178px",
    display: "flex",
    alignItems: "start",
    ["& > div"]: {
      width: "178px",
      width: "160px",
    },
    [theme.fn.smallerThan("sm")]: {
      justifyContent: "center",
    },
  },

  miniFooter: {
    height: "3.5625em",
    backgroundColor: "#01370C",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "3em",
    [theme.fn.smallerThan("sm")]: {
      height: "auto",
      gap: 20,
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
    },
  },

  paymentLogos: {
    width: "15em",
    height: "2.0625em",
    display: "flex",
    justifyContent: "space-between",
    ["& > div"]: {
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
}));
