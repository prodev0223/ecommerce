import { Box, Stack } from "@mui/material";
import InputBlock from "../../../common/input-block";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import { Text18 } from "../../../common/text-block";


export default function ContactInformation() {
    return(
        <Box>
        <Text18
          variant="h2"
          mb="14px"
        >
          Contact Information
        </Text18>
        <Stack gap="14px">
          <InputBlock icon={<PhoneOutlinedIcon />} label="Phone number" />
          <InputBlock label="Email" />
        </Stack>
      </Box>
    )
}