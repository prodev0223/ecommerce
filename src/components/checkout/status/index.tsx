import {Typography} from "@mui/joy";
import MainColumn from "./main-column";
import { useParams } from 'react-router-dom';

import { ReactComponent as PendingPaymentIcon } from "../../../assets/images/icons/pending-payment.svg";
import { ReactComponent as CheckmarkIcon } from "../../../assets/images/icons/checkmark.svg";
import { ReactComponent as VanIcon } from "../../../assets/images/icons/van.svg";
import { ReactComponent as CancelledIcon } from "../../../assets/images/icons/cancelled.svg";
import CheckoutLayout from "../checkout-layout";


const mapCardData : Record<string, {title: string , description:  string, icon: React.ReactElement}> = {
  pending: {
    title:"Your payment is pending",
    description:"We’ve received your order, and we’re waiting for the payment to arrive. This is most likely because you paid with eCheck or Bank Transfer. In 4-7 business days, your payment should be completed, and we will process your order. If you need any help reach out to our 24/7 customer support team here, or reply to this email.",
    icon: <PendingPaymentIcon />  
  },
  processing: {
    title:"Your order is being processed",
    description:"We’ve received your order, and we’re getting it ready. In 1-3 business days we will reach out with tracking information, and if you need any help reach out to our 24/7 customer support team here, or reply to this email.",
    icon: <CheckmarkIcon />  
  },
  confirmed: {
    title:"Your order is confirmed",
    description:"We’ve accepted your order, and we’re getting it ready. You can track your order below, however, it may take a few days to update with shipping carriers. If you need any help reach out to our 24/7 customer support team here, or reply to this email.",
    icon: <VanIcon />  
  },
  cancelled: {
    title:"Your order was cancelled",
    description:"Unfortunately, your order has been cancelled. This may be due to an item that you ordered being sold out, your payment failing, or your personal request. Your refund will be processed ASAP, however it may take 5-10 business days to appear on your credit statement, depending on your payment method. If you need any help contact us here, or reply to this email.",
    icon: <CancelledIcon />  
  }
}

export default function PaymentStatusMain() {
  const {status} = useParams()

  if(status=== undefined || !(status in mapCardData)){
    return <Typography>Undefined Route</Typography>
  }


    return (
        <CheckoutLayout>
                <MainColumn status={status} mapCardData={mapCardData} />
          </CheckoutLayout>
    )
}