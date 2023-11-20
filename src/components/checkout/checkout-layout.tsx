import CheckoutHeader from "./checkout-header";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import React from "react";
import OrderSummary from "./order-summary";

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box
      sx={{
        backgroundColor: "#449FDC",
        maxHeight: { md: "100vh" },
        overflow: "hidden",
      }}
    >
      <CheckoutHeader />

      <Stack
        sx={{
          flexDirection: { xs: "column-reverse", md: "row" },
          gap: { xs: "0", md: "25px" },
          bgcolor: { xs: "#fff", md: "transparent" },
        }}
      >
        {children}
        <OrderSummary />
      </Stack>
    </Box>
  );
}
