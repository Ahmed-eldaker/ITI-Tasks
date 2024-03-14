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

const ProductCard = ({ image, title, description, price, rating }) => {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia component="img" height="140" image={image} alt={title} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
            <Typography variant="h6" color="text.primary" sx={{ mt: 2 }}>
              Price: ${price}
            </Typography>
            <Rating name="product-rating" value="4" precision={0.5} />
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};
export default ProductCard;
