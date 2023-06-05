import { createStyles } from "@mantine/core";

export const UseShopPageStyle = createStyles((theme) => ({
  mainWraper: {
    display: "flex",
    width: "90%",
    margin: "0 auto",
    marginTop: 87,
    marginBottom: 115,
  },

  contaienr1: {
    [theme.fn.smallerThan("sm")]: {
      display: "none"
    }
  },

  responsive: {
    display: "none",

    [theme.fn.smallerThan("sm")]: {
      display: "flex",
      height: "fit-content",
      justifyContent: "center",
      backgroundColor: "#d8e6d8cf",
    },
  },

  filterSideBar: {
    width: 248,
    height: "fit-content",
    borderRadius: 10,
    background: "#F0F5F0",
    border: "1px solid #E3E5E6",
    boxShadow: "0px 8px 23px rgba(80, 107, 82, 0.13)",
    marginBottom: 20,
  },

  priceFilter: {
    width: 248,
    height: "fit-content",
    background: "#F0F5F0",
    border: "1px solid #E3E5E6",
    boxShadow: "0px 8px 23px rgba(80, 107, 82, 0.13)",
    borderRadius: 10,
    marginBottom: 20,
  },

  filter2SideBar: {
    display: "flex",
    alignItems: "center",
    height: 187,
    background: "#F0F5F0",
    border: "1px solid #E3E5E6",
    boxShadow: "0px 8px 23px rgba(80, 107, 82, 0.13)",
    borderRadius: 10,
  },

  contaienr2: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  list: {
    ["& > a"]: {
      width: "max-content",
      display: "flex",
      textDecoration: "none",
      color: "black",
      paddingLeft: "40px",
      flexWrap: "wrap",
      marginBottom: "16px",
    },

  accordionContainer: {
      paddingLeft: 20,
      [theme.fn.smallerThan("sm")]: {
        paddingLeft: "unset",
      },
    },
  },
}));
