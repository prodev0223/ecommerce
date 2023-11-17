import * as React from 'react';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListDivider from '@mui/joy/ListDivider';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';

export default function BillingAddress() {
  return (
    <Box sx={{ minWidth: 240 , marginBottom: "228px" }}>
      <RadioGroup
        aria-labelledby="example-payment-channel-label"
        overlay
        name="example-payment-channel"
        defaultValue="Paypal"
      >
        <List
          component="div"
          variant="outlined"
          orientation={'vertical'}
          sx={{
            borderRadius: 'sm',
            boxShadow: 'sm',
          }}
        >
          {['Same as shipping address', 'Use a different billing address'].map((value, index) => (
            <React.Fragment key={value}>
              {index !== 0 && <ListDivider />}
              <ListItem>
                <Radio id={value} value={value} label={value} />
              </ListItem>
            </React.Fragment>
          ))}
        </List>
      </RadioGroup>
    </Box>
  );
}



// import * as React from 'react';
// import Box from '@mui/joy/Box';
// import List, { ListProps } from '@mui/joy/List';
// import ListItem from '@mui/joy/ListItem';
// import ListDivider from '@mui/joy/ListDivider';
// import Radio from '@mui/joy/Radio';
// import RadioGroup from '@mui/joy/RadioGroup';
// import Typography from '@mui/joy/Typography';
// import Switch from '@mui/joy/Switch';

// import {ReactComponent as ApplePayIcon} from '../../../assets/images/logos/apple-pay.svg'
// // import {ReactComponent as PaypalIcon} from '../../assets/images/logos/paypal.svg'
// // import {ReactComponent as CoinbaseIcon} from '../../assets/images/logos/coinbase.svg'



// export default function BillingAddress() {
//   const [orientation, setOrientation] =
//     React.useState<ListProps['orientation']>('vertical');
//   return (
//     <Box sx={{ minWidth: 240 }}>
//       <RadioGroup
//         aria-labelledby="example-payment-channel-label"
//         overlay
//         name="example-payment-channel"
//         defaultValue="Paypal"
//       >
//         <List
//           component="div"
//           variant="outlined"
//           orientation={'vertical'}
//           sx={{
//             borderRadius: 'sm',
//             boxShadow: 'sm',
//           }}
//         >
//           {['Credit Card', 'Paypal', 'QR Code'].map((value, index) => (
//             <React.Fragment key={value}>
//               {index !== 0 && <ListDivider />}
//               <ListItem>
//                 <Radio id={value} value={value} label={<ApplePayIcon />} />
//               </ListItem>
//             </React.Fragment>
//           ))}
//         </List>
//       </RadioGroup>
//     </Box>
//   );
// }