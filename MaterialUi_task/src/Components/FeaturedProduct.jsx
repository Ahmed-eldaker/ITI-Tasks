import React from "react";
import {
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@mui/material";

const FeaturedCategories = () => {
  return (
    <div style={{ padding: "20px 0" }}>
      <Typography variant="h4" gutterBottom>
        Featured Categories
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <CategoryCard
            image="/src/assets/th (7).jpeg"
            title="Category 1"
            description="Description of Category 1"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CategoryCard
            image="/src/assets/th (6).jpeg"
            title="Category 2"
            description="Description of Category 2"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CategoryCard
            image="/src/assets/th (5).jpeg"
            title="Category 3"
            description="Description of Category 3"
          />
        </Grid>
      </Grid>
    </div>
  );
};

const CategoryCard = ({ image, title, description }) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia component="img" height="140" image={image} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default FeaturedCategories;
