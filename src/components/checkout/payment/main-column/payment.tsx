import * as React from "react";
import Box from "@mui/joy/Box";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListDivider from "@mui/joy/ListDivider";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";

import { ReactComponent as PaypalIcon } from "../../../../assets/images/logos/paypal.svg";
import { ReactComponent as CoinbaseIcon } from "../../../../assets/images/logos/coinbase.svg";
import { ReactComponent as CashAppIcon } from "../../../../assets/images/logos/cash-app.svg";
import { ReactComponent as VenmoIcon } from "../../../../assets/images/logos/venmo.svg";
import { ReactComponent as ApplePayIcon } from "../../../../assets/images/logos/apple-pay.svg";
import { ReactComponent as GooglePayIcon } from "../../../../assets/images/logos/google-pay.svg";
import { ReactComponent as BankTransferIcon } from "../../../../assets/images/logos/bank-transfer.svg";
import { ReactComponent as CreditCardsIcon } from "../../../../assets/images/icons/credit-cards.svg";

import LockIcon from "@mui/icons-material/Lock";
import HelpIcon from "@mui/icons-material/Help";

import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import { StyledFlexContainerRowCentered } from "../../../common/flex-container";
import { Text14 } from "../../../common/text-block";
import { Grid, Stack } from "@mui/material";
import InputBlock from "../../../common/input-block";
import { FormikProps } from "formik";
import { IFormValues } from ".";

const paymentData = [
  { name: "Paypal", label: <PaypalIcon /> },
  { name: "Coinbase", label: <CoinbaseIcon /> },
  { name: "Cash App", label: <CashAppIcon /> },
  { name: "Venmo", label: <VenmoIcon /> },
  { name: "Apple Pay", label: <ApplePayIcon /> },
  { name: "Google Pay", label: <GooglePayIcon /> },
  { name: "Bank Transfer", label: <BankTransferIcon /> },
];

export default function Payment({
  formik,
}: {
  formik: FormikProps<IFormValues>;
}) {
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
          }}
        >
          <ListItem>
            <FormControl
              sx={{ p: 2, flexDirection: "row", gap: 2, width: "100%" }}
            >
              <Radio overlay value="medium" />
              <StyledFlexContainerRowCentered sx={{ width: "100%" }}>
                <FormLabel sx={{ margin: "0" }}>Credit Card</FormLabel>
                <Stack
                  sx={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "7px",
                  }}
                >
                  <CreditCardsIcon />
                  <Text14>and more...</Text14>
                </Stack>
              </StyledFlexContainerRowCentered>
            </FormControl>
          </ListItem>

          <ListItem
            sx={{
              bgcolor: "#F6ECE5",
              borderTop: "1px solid #D9D9D9",
              padding: "17px",
            }}
          >
            <Stack>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <InputBlock
                    sx={{ width: "100%" }}
                    endIcon={<LockIcon />}
                    id="card_number"
                    name="card_number"
                    label="Card number"
                    fullWidth
                    value={formik.values.card_number}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.card_number &&
                      Boolean(formik.errors.card_number)
                    }
                    helperText={
                      formik.touched.card_number && formik.errors.card_number
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputBlock
                    sx={{ width: "100%" }}
                    id="name"
                    name="name"
                    label="Name on card"
                    fullWidth
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputBlock
                    id="expire_date"
                    name="expire_date"
                    label="Expiration date (MM / YY)"
                    fullWidth
                    value={formik.values.expire_date}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.expire_date &&
                      Boolean(formik.errors.expire_date)
                    }
                    helperText={
                      formik.touched.expire_date && formik.errors.expire_date
                    }
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputBlock
                    endIcon={<HelpIcon />}
                    id="security_code"
                    name="security_code"
                    label="Security code"
                    fullWidth
                    value={formik.values.security_code}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.security_code &&
                      Boolean(formik.errors.security_code)
                    }
                    helperText={
                      formik.touched.security_code &&
                      formik.errors.security_code
                    }
                  />
                </Grid>
              </Grid>
            </Stack>
          </ListItem>

          <ListDivider sx={{ marginTop: "0" }} />

          {paymentData.map(({ name, label }, index) => (
            <React.Fragment key={name}>
              {index !== 0 && <ListDivider />}
              <ListItem>
                <FormControl
                  sx={{ flexDirection: "row", alignItems: "center", gap: 2 }}
                >
                  <Radio overlay value={name} />
                  <FormLabel sx={{ margin: "0", maxHeight: "34px" }}>
                    {label}
                  </FormLabel>
                </FormControl>
              </ListItem>
            </React.Fragment>
          ))}
        </List>
      </RadioGroup>
    </Box>
  );
}
