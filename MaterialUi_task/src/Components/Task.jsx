import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Navbar = () => {
  return (
    <AppBar
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "row",
      }}
      position="static"
    >
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Storna
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <IconButton color="inherit">
            <FacebookIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton color="inherit">
            <TwitterIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton color="inherit">
            <InstagramIcon />
          </IconButton>
        </Grid>
      </Grid>
    </AppBar>
  );
};
export default Navbar;
