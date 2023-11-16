import * as React from "react";
import Box from "@mui/joy/Box";
import List, { ListProps } from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListDivider from "@mui/joy/ListDivider";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";

import { ReactComponent as PaypalIcon } from "../../../assets/images/logos/paypal.svg";
import { ReactComponent as CoinbaseIcon } from "../../../assets/images/logos/coinbase.svg";
import { ReactComponent as CashAppIcon } from "../../../assets/images/logos/cash-app.svg";
import { ReactComponent as VenmoIcon } from "../../../assets/images/logos/venmo.svg";
import { ReactComponent as ApplePayIcon } from "../../../assets/images/logos/apple-pay.svg";
import { ReactComponent as GooglePayIcon } from "../../../assets/images/logos/google-pay.svg";
import { ReactComponent as BankTransferIcon } from "../../../assets/images/logos/bank-transfer.svg";
import { ReactComponent as CreditCardsIcon } from "../../../assets/images/icons/credit-cards.svg";

import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import { StyledFlexContainerRowCentered } from "../../common/flex-container";
import { Text14 } from "../../common/text-block";
import { Grid, Stack } from "@mui/material";
import InputBlock from "../../common/input-block";
import ButtonBlock from "../../common/button-block";
import AddTipRadio from "./add-tip-radio";

export default function AddTip() {
  return (
    <Box sx={{ minWidth: 240 }}>
      <RadioGroup
        aria-labelledby="example-payment-channel-label"
        overlay
        name="example-payment-channel"
        defaultValue="Paypal"
      >
        <List
          component="div"
          variant="outlined"
          orientation={"vertical"}
          sx={{
            borderRadius: "sm",
            boxShadow: "sm",
            padding:"0"
          }}
        >
          <ListItem sx={{width:"100%" , padding: "17px"}}>
              <Text14>Show your support for the customer support team</Text14>
          </ListItem>

          <ListItem
            sx={{
              bgcolor: "#F6ECE5",
              borderTop: "1px solid #D9D9D9",
              padding: "17px",
            }}
          >


            <Stack sx={{gap:"14px" , width:"100%"}}>
<AddTipRadio />
<Stack sx={{ flexDirection: "row", gap: "14px" }}>
        <InputBlock sx={{ flex: "1" }}  />
        <ButtonBlock title="Apply" disabled={true}/>
      </Stack>
          <Text14>Keep in mind that we see if you left a tip when handling your support requests&lt;3</Text14>
            </Stack>
          </ListItem>

        </List>
      </RadioGroup>
    </Box>
  );
}
