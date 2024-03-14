import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Grid,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#f0f0f0", padding: "20px 0" }}>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={6}>
          <Typography variant="body1" align="center" gutterBottom>
            © 2024 Your E-Commerce Website. All rights reserved.
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
};
export default Footer;
