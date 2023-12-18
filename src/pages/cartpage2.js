import { createStyles, Card, Box } from '@mantine/core';


const useCardWrapperStyles = createStyles((theme) => ({
    cardWrapper: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'flex-start',
      padding: 24,
      gap: 120,
      position: 'absolute',
      height: 927,
      left: 120,
      right: 120,
      top: 1054,
      background: '#F0F5F0',
      boxShadow: '0px 8px 23px rgba(80, 107, 82, 0.13)',
      borderRadius: 16,
    },
    wrapperBox: {
      width: (wrapperWidth) => `${wrapperWidth}%`,
    },
  }));
  
  const CardWrapper = ({ children, wrapperWidth, align, flexDirection, flexWrap, justify }) => {
    const { classes } = useCardWrapperStyles(wrapperWidth);
  
    return (
      <Box className={classes.wrapperBox}>
        <Card className={classes.cardWrapper}>{children}</Card>
      </Box>
    );
  };
  



export const CardAlone =   ()=> {
  return (
    // <Page>
        <CardWrapper wrapperWidth={80}>
            HELLO

        </CardWrapper>
    // </Page>
    
  )
}
const usePageStyle = createStyles((theme) => ({
    page: {
      position: 'relative',
      width: '100%',
      minHeight: 200,
    //   background: '#F0F5F0',
        background:'yellow'
    },
  }));

const Page = ({ children }) => {
  const {classes} = usePageStyle()

  return <Box className={classes.page}>{children}</Box>;
};



export default CardWrapper;


 