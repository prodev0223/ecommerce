import {
  Grid,
  Paper,
  Stack,
} from "@mui/material";

import { Text14, Text18 } from "../../../common/text-block";


export default function CustomerInformation() {
    return(
        <Paper variant="outlined" sx={{ padding: "14px" , marginBottom: "228px"}}>
        <Text18 sx={{ marginBottom: "14px" }}>Customer information</Text18>

        <Grid container spacing={"14px"}>
          <Grid
            item
            xs={6}
            sx={{ display: "flex", flexDirection: "column", gap: "14px" }}
          >
            <Stack sx={{ gap: "7px" }}>
              <Text14 sx={{ color: "#000" }}>Contact information</Text14>
              <Text14 sx={{ color: "#545454" }}>name@example.com</Text14>
            </Stack>
            <Stack sx={{ gap: "7px" }}>
              <Text14 sx={{ color: "#000" }}>Shipping address</Text14>
              <Text14 sx={{ color: "#545454" }}>
                John Smith 151 O’Connor St Ground floor Ottawa ON K2P 2L8 Canada
              </Text14>
            </Stack>
            <Stack sx={{ gap: "7px" }}>
              <Text14 sx={{ color: "#000" }}>Shipping method</Text14>
              <Text14 sx={{ color: "#545454" }}>
                Canada Post Expedited Parcel
              </Text14>
            </Stack>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{ display: "flex", flexDirection: "column", gap: "14px" }}
          >
            <Stack sx={{ gap: "7px" }}>
              <Text14 sx={{ color: "#000" }}>Payment method</Text14>
              <Text14 sx={{ color: "#545454" }}>
                ending with 4242 - $336.80
              </Text14>
            </Stack>
            <Stack sx={{ gap: "7px" }}>
              <Text14 sx={{ color: "#000" }}>Billing Address</Text14>
              <Text14 sx={{ color: "#545454" }}>
                John Smith 151 O’Connor St Ground floor Ottawa ON K2P 2L8 Canada
              </Text14>
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    )
}