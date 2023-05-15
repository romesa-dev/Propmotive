import { CartIcon, UserIcon } from "../Icons/icons"
import {useMiniHeaderStyles} from './navbar.style'

export default function MiniHeader () {
   
    const {classes:{miniHeader, icon, text}, cx} = useMiniHeaderStyles()
    return (
        
        <div className={miniHeader}>
            <div className={text}>Use code FIRST50 for a 50% discount on your first order!</div>
            <div className={icon}>
                <div>
                    <CartIcon />
                </div>
                <div>
                    <UserIcon />
                </div>
            </div>
        </div> 
    )
}


// import React from 'react';
// import { Container, Text, Button, Group, Header } from '@mantine/core';
// // import { UserIcon, ShoppingCartIcon } from '@modulz/radix-icons';

// const MiniHeader = () => {
//   return (
//     <Header style={{ height: '30px', backgroundColor: 'green' }}>
//       <Container >
//         <Group align="center" justify="space-aroun">
//           <Text align="center" size="sm">
//             The discount Token is 699390, please use this token
//           </Text>
//           <Group align="flex-end">
//             <Button size="sm" variant="outline" style={{ height: '100%' }}>
//               <UserIcon />
//             </Button>
//             <Button size="sm" variant="outline" style={{ height: '100%' }}>
//               <CartIcon />
//             </Button>
//           </Group>
//         </Group>
//       </Container>
//     </Header>
//   );
// };

// export default MiniHeader;



