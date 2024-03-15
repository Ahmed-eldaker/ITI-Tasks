import React from "react";
import { Typography, Grid, Card, CardContent } from "@mui/material";

const TestimonialSection = () => {
  return (
    <div style={{ padding: "20px 0" }}>
      <Typography variant="h4" gutterBottom>
        What They're Saying
      </Typography>
      <Grid container spacing={2}>
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <TestimonialCard {...testimonial} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

const TestimonialCard = ({ name, role, content }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="body1">{content}</Typography>
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          {name}
        </Typography>
        <Typography variant="subtitle2" color="textSecondary">
          {role}
        </Typography>
      </CardContent>
    </Card>
  );
};

const testimonials = [
  {
    name: "Kelly Preston",
    role: "Developer",
    content: `Cum sociis natoque penatibus magnis dis parturienmontes, nasceturridiculus musestibulum ultricies aliquam convallis. Lorem ipsum dolor sit amet, consectetur a elit. In ut ullamcorper leo, eget euismod orci aliquenenan penatibus dis parturienmontes ultricies.`,
  },
];

export default TestimonialSection;
