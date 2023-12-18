import { createStyles } from "@mantine/core";

export const UseProductDetailsPageStyle = createStyles((theme) => ({
  details: {
    margin: "0 auto",
    marginTop: 56,
    marginBottom: 56,
    maxWidth: "90vw",
    width: "90vw",
    minWidth: "380px",
    height: "fit-content",
    display: "flex",
    gap: 80,
    justifyContent: "center",
    [theme.fn.smallerThan("lg")]: {
      flexDirection: "column",
    },
  },

  productImages: {
    height: "fit-content",
    display: "flex",
    gap: 24,
    flexDirection: "column",
    alignItems: "center",
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  productDetails: {
    marginBottom: 65,
  },
  tabs: {
    fontWeight: 600,
    fontSize: 20,
    color: "white",
    backgroundColor: "transparent",
    borderBottomColor: "transparent",
    "&:hover": {
      color: "white",
      backgroundColor: "transparent",
      borderBottomColor: "white",
    },
  },

  detailsText: {
    width: "100%",
    height: "fit-content",
    background: "#F0F5F0",
    gap: 27,
    marginTop: 20,
    borderRadius: 16,
    padding: 24,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  aboutProduct: {
    width: 560,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    [theme.fn.smallerThan("lg")]: {
      gap: 40,
      width: "100%",
    },
    [theme.fn.smallerThan("sm")]: {
      padding: 10,
    },
  },

  nativeSelect: {
    display: "flex",
    gap: 16,
    justifyContent: "space-between",
  },

  quantity: {
    display: "flex",
    gap: 16,
    justifyContent: "space-between",
  },

  productDeliveryResult: {
    padding: 8,
    border: "1px solid #343434",
    borderRadius: 8,
    height: 82,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  productImgResponsiveSm: {
    display: "none",
    [theme.fn.smallerThan("sm")]: {
      display: "flex",
      justifyContent: "space-between",
      height: 500,
    },
  },

  quantityIncludeWraper: {
    display: "flex",
    justifyContent: "space-between",
    width: 486,
    [theme.fn.smallerThan("lg")]: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      width: "100%",
    },
  },
}));
