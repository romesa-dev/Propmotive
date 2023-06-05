import { createStyles } from "@mantine/core";

export const useNavbarStyle = createStyles(() => ({
  navbar: {
    width: "100%",
  },
}));
export const useMainHeaderStyles = createStyles((theme) => ({
  mainHeader: {
    backgroundColor: "#F0F5F0",
    borderBottom: "1px solid #343434",
   
  },

  wraper: {
    height: "80px",
    alignItems: "center",
    justifyContent: "space-arround",
    paddingLeft: "20px",
    paddingRight: "20px",
  },

  logo: {
    height: "51px",
    width: " 133px",
    minWidth: "133px",
    maxWidth: 133,
    [theme.fn.smallerThan("md")]: {
      height: "35px",
      minWidth: "80px",
      maxWidth: "80px",
    },
  },

  menuItems: {
    flex: "1 1 auto",
    height: "56px",
    minWidth: "fit-content",
    justifyContent: "space-even",

    ["& > div"]: {
      justifyContent: "center",
    },
    [theme.fn.smallerThan("md")]: {
      ["& > div"]: {
        ["& > div, & > button"]: {
          padding: "5px",
        },
        gap: "unset",
      },
    },
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  menuItemsButton: {
    display: "none",
    [theme.fn.smallerThan("sm")]: {
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      height: "80px",
    },
  },

  searchBar: {
    flex: "1 0 203px",
    height: "51px",
    minWidth: 203,
    [theme.fn.smallerThan("md")]: {
      minWidth: 'unset',
      flex: "1 1 auto",    },
    [theme.fn.smallerThan("sm")]: {
      paddingLeft: "20px",
      paddingRight: "20px",
    },

    input: {
      height: "52px",
      borderRadius: "6px",
      fontWeight: 600,
      fontSize: "16px",
    },
  },
}));

export const useMiniHeaderStyles = createStyles((theme) => ({
  miniHeader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#01370C",
    position: "relative",

    [theme.fn.smallerThan("md")]: {
      justifyContent: "spaceAround",
      lineHeight: "17px",
      paddingLeft: "5px",
      paddingRight: "5px",
    },
  },

  icon: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    width: "230px",
    height: "40px",
    top: "0px",
    right: "0px",
    position: "absolute",
    background: "transparent",

    ["& div"]: {
      display: "flex",
      justifyContent: "start",
      alignItems: "center",
      flex: "1 1 50%",
    },

    [theme.fn.smallerThan("md")]: {
      width: "80px",
      position: "unset",
      justifyContent: "space-between",

      ["& div"]: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: "1 1 50%",
      },
    },
  },

  text: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Open Sans'",
    fontWeight: 400,
    color: "#FFFFFF",
    height: "40px",
    textAlign: "center",
    [theme.fn.smallerThan("md")]: {
      flex: "1 1 50%",
    },
  },
}));
