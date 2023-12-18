import { createStyles } from "@mantine/core";

export const UseCartPageStyle = createStyles((theme) => ({
  cartItems: {
    boxShadow: "0px 8px 23px rgba(80, 107, 82, 0.13)",
    borderRadius: "16px",
    padding: "24px",
    marginTop: 48,
    marginBottom: 36,
  },
  section: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    height: "51px",
    borderBottom: "1px solid rgba(52, 52, 52, 0.4)",
  },
  wraper1: {
    display: "flex",
    width: "50%",
    justifyContent: "space-around",
  },

  items: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    borderBottom: "1px solid rgba(52, 52, 52, 0.4)",
    height: "144px",
  },

  itemInfo: {
    display: "flex",
    gap: "24px",
  },
  total: {
    display: "flex",
    flexDirection: "column",
    alignItems: "end",
    gap: 18.5,
  },
  countAndPrice: {
    display: "flex",
    justifyContent: "space-around",
    width: "50%",
    alignItems: "center",
  },

  deliveryInfo: {
    width: "40%",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    height: "94px",
    paddingLeft: "48px",
    paddingRight: "48px",
    borderBottom: "1px solid rgba(52, 52, 52, 0.4)",
  },

  info: {
    display: "flex",
    justifyContent: "space-between",
  },

  totalPrice: {
    display: "flex",
    width: "40%",
    justifyContent: "space-between",
    paddingLeft: "48px",
    paddingRight: "48px",
  },

  login: {
    boxShadow: "0px 8px 23px rgba(80, 107, 82, 0.13)",
    borderRadius: "16px",
    padding: "24px",
    marginBottom: 48,
  },

  billingDetails: {
    boxShadow: "0px 8px 23px rgba(80, 107, 82, 0.13)",
    borderRadius: "16px",
    padding: "24px",
    marginBottom: 93,
    display: "flex",
    justifyContent: "space-between",
  },

  information: {
    display: "flex",
    flexDirection: "column",
    gap: "32px",
    width: "40%",
    justifyContent: "space-between"
  },

  Input: {
    display: "flex",
    justifyContent: "space-between",
    gap: "16px",
  },
}));
