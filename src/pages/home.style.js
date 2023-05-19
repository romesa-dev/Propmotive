import { createStyles } from "@mantine/core";

export const useSquareCardMdStyle = createStyles((theme) => ({
  squareCardMd: {
    width: 384,
    boxSizing: "border-box",
    padding: 10,
    ["& > div"]: {
      borderRadius: 16,
      padding: 20,
      width: "100%",
      backgroundColor: "white",
      boxShadow:"0px 0px 23px rgba(80, 107, 82, 0.13)",
    },
    [theme.fn.smallerThan("sm")]: {
      width: 250,
      ["& > div"]: {
        width: "100%",
      }}
    },
}));

export const useSquareCardSmStyle = createStyles((theme) => ({
  squareCardSm: {
    display: 'flex',
    width: 282,
    boxSizing: "border-box",
    padding: 10,
    ["& > div"]: {
      borderRadius: 16,
      padding: 20,
      width: "100%",
      backgroundColor: "white",
      boxShadow:"0px 0px 23px rgba(80, 107, 82, 0.13)",
    },
    [theme.fn.smallerThan("sm")]: {
      width: 170,
      ["& > div"]: {
        width: "100%",
      }}
  }
}))

export const useSquareCardLgStyle = createStyles((theme) => ({
  squareCardLg: {
    width: 588,
    height: 286,
    backgroundColor: 'white', 
    boxSizing: "border-box",
    position: 'relative',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 48,

    [theme.fn.smallerThan("sm")]: {
      width: 350,
      ["& > div"]: {
        width: "100%",
      }}
    },
}))

export const useInfoSectionStyle = createStyles((theme) => ({
  mainContainer:{
    display:'flex',
    [theme.fn.smallerThan("sm")]: {
      flexDirection: 'column',
      },
    [theme.fn.smallerThan("md")]: {
        flexDirection: 'column',
      }
  },

  infoParagraph1:{
    color: "#343434",
    fontWeight: 400,
    fontSize: 24,
    [theme.fn.smallerThan("sm")]: {
        fontSize: 15,
    }
  },

  infoParagraph2:{
    color: "#D11F1F",
    fontWeight: 300,
    fontSize: 20,
    fontStyle: "italic",
    [theme.fn.smallerThan("sm")]: {
        fontSize: 14,
    }
  },

  InfoSection: {
    width: 588,
    display: 'flex',
    [theme.fn.smallerThan("sm")]: {
      width: 388,
      marginLeft: 17,
    },
    [theme.fn.smallerThan("md")]: {
      marginLeft: 25,
    }
  },

  infoSectionHeading: {
    display: "flex",
    alignItems: "start",
    flexDirection: "column",
  },

  heading: {
    fontFamily: "Unna",
    fontWeight: 700,
    fontSize: "48px",
    lineHeight: "55.3px",
    marginBottom: "15px",
    [theme.fn.smallerThan("sm")]: {
     fontSize: 36,
      }
  },

  outline: {
    width: "200px",
    height: "0px",
    borderBottom: "2px solid #343434CC",
  },

  buttonSm: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#3B823E",
    height: 64,
    width: 282,
    borderRadius: 8,
    padding: 8,
    boxShadow: "0px 8px 23px rgba(80, 107, 82, 0.13)",
    marginTop: 20,
    [theme.fn.smallerThan("sm")]: {
      width: 230,
      }
  },
}))

export const useImageSectionStyle = createStyles((theme) => ({
  smImage: {
    display: 'flex',
    boxSizing: "border-box",
    padding: 10,
    [theme.fn.smallerThan("sm")]: {
      width: 200,
      ["& > div"]: {
        width: "100%",
      }},
    [theme.fn.smallerThan("xs")]: {
      width: 'unset',
    }
  }
}))

