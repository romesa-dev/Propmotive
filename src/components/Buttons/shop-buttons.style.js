import { createStyles } from "@mantine/core";

export const useButtonMdStyle = createStyles(() => ({
  buttonMd: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#3B823E",
    height: 64,
    width: "100%",
    borderRadius: 8,
    padding: 8,
    boxShadow: "0px 8px 23px rgba(80, 107, 82, 0.13)",
    marginTop: 20,
  },
}));
