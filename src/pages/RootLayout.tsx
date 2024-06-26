import { Box, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <Box
      sx={{
        height: "fit-content",
        minHeight: "100vh",
        padding: "3rem",
        display: "flex",
        flexDirection: "column",
        gap: "6rem",
      }}
    >
      <Typography variant="h3" component="h1">
        Stackoverflow Tag Browser
      </Typography>
      <Box sx={{ flexGrow: "1", display: "flex", justifyContent: "center", alignItems: "center" }} component={"main"}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default RootLayout;
