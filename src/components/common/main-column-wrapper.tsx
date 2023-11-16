import { Box, Paper } from "@mui/material";


interface IMainColumnWrapperProps {
    children: React.ReactNode
}

export default function MainColumnWrapper({children}:IMainColumnWrapperProps) {
    return (
        <Paper
        sx={{
          bgcolor: "#fff",
          width: {xs:"100%" , md:"808px"},
          maxWidth: "808px",
          minHeight: "100vh",
          boxShadow: {xs:"none" , md:"-5px 0px 20px 0px #449FDCF2"},
        }}
      >
        <Box
          sx={{
            margin:{xs:"17px 14px 0 14px" , md:"17px 66px 0 170px"}
          }}
        >
        {children}
        </Box>
      </Paper>
        )
}