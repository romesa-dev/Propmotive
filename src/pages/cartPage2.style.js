import { Paper, Text, Button, Badge, Box, Flex } from '@mantine/core';
import { createStyles, useStyles } from '@mantine/core';
import { CartIcon, UserIcon } from '../components/Icons/icons';

const useMiniMenu = createStyles((theme) => ({
  root: {
    background: '#01370C',
  },
  topBarContent: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '40px',
  },
  cartAccountIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: '56px',
    width: '104px',
    height: '32px',
  },
  icon: {
    width: '24px',
    height: '24px',
  },
  documentText: {
    flex: 1,
    textAlign: 'center',
    color: '#FFFFFF',
  },
}));

const useBody = createStyles((theme) => ({
  root: {
    position: 'relative',
    width: '100wh',
    minHeight: '100vh',
    background: '#F0F5F0',
    display: 'flex',
    justifyContent: 'center',
    // alignItems: 'center',
  },
}));

export const MyComponent = ({ cartIcon, accountIcon }) => {
  const { classes: miniMenuClasses } = useMiniMenu();
  const { classes: bodyClasses } = useBody();

  const { root, topBarContent, cartAccountIcon, icon, documentText } = miniMenuClasses;

  return (
    <Box className={bodyClasses.root}>
      <Flex direction="column" gap="10px" className={root}>
        <Box padding="0px 120px">
          <Flex className={topBarContent}>
            <Flex className={cartAccountIcon}>
              <Box className={icon}>{cartIcon}</Box>
              <Box className={icon}>{accountIcon}</Box>
            </Flex>
            <Text className={documentText}>Use code FIRST50 for a 50% discount on your first order!</Text>
            <Flex className={cartAccountIcon}>
              <Box className={icon}><CartIcon/></Box>
              <Box className={icon}><UserIcon/></Box>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};