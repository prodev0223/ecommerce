import { Box, Stack, Typography } from "@mui/material";
import InputBlock from "../../../common/input-block";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";


export default function ContactInformation() {
    return(
        <Box>
        <Typography
          variant="h2"
          sx={{
            fontSize: "18px",
            fontWeight: "400",
            lineHeight: "27px",
            marginBottom: "14px",
          }}
        >
          Contact Information
        </Typography>
        <Stack sx={{ gap: "14px" }}>
          <InputBlock icon={<PhoneOutlinedIcon />} label="Phone number" />
          <InputBlock label="Email" />
        </Stack>
      </Box>
    )
}