import { createStyles } from "@mantine/core";

export const useHeadingStyle = createStyles((theme) => ({
  subHeading: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },

  text: {
    fontFamily: "Unna",
    fontWeight: 700,
    fontSize: "48px",
    lineHeight: "55.3px",
    marginBottom: "15px",
    [theme.fn.smallerThan("sm")]: {
      fontSize: '40px'
    },
    [theme.fn.smallerThan("xs")]: {
      fontSize: '33px'
    }
  },

  outline: {
    width: "200px",
    height: "0px",
    borderBottom: "2px solid #343434CC",
  },
}));

export const useParagraphStyle = createStyles(() => ({
  paragraphStyle: {
    whiteSpace: 'pre-line',
  }
}))
