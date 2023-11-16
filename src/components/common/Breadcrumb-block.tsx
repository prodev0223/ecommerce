import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useNavigate } from 'react-router-dom';



export default function BreadcrumbBlock() {
  const navigate = useNavigate()

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent> , target:string) => {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
    navigate(target)
  }
  
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/" onClick={(e) => handleClick(e , "/")}>
      Cart
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      onClick={(e) => handleClick(e , "/information")}
    >
      Information
    </Link>,
    <Link
    underline="hover"
    key="2"
    color="inherit"
    onClick={(e) => handleClick(e , "/shipping")}
  >
    Shipping
  </Link>,
   <Link
   underline="hover"
   key="2"
   color="inherit"
   onClick={(e) => handleClick(e , "/payment")}
 >
   Payment
 </Link>,
  ];

  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}
