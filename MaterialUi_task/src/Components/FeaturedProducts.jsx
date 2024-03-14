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
  Rating,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ProductCard from "./Productcard";
const FeaturedProducts = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Featured Products
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <ProductCard
          image="/src/assets/257fa295a43fc66db683a469051ad31c.png"
          title="Product 1"
          description="Description of Product 1"
          price={49.99}
          rating={4.5}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <ProductCard
          image="/src/assets/7410689a5940f31fc7e7589ca508b297.jpg"
          title="Product 2"
          description="Description of Product 2"
          price={29.99}
          rating={3.8}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <ProductCard
          image="/src/assets/th (3).jpeg"
          title="Product 3"
          description="Description of Product 3"
          price={39.99}
          rating={4.2}
        />
      </Grid>
    </Grid>
  );
};
export default FeaturedProducts;
