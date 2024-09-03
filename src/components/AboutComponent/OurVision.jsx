import React from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

const OurVision = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Grid container spacing={4} alignItems="center">
        {/* Left Column */}
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h4" gutterBottom>
              Our Vision
            </Typography>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
              alias atque, laborum ab beatae obcaecati et recusandae numquam
              dolorum delectus aliquid, sunt vel? Perferendis iste facilis,
              minima quisquam quaerat dolorem, similique totam natus repellendus
              pariatur voluptatum! Natus, voluptates quo. Suscipit voluptas
              nobis fugit eos omnis quaerat est,
            </Typography>
          </Box>
        </Grid>

        {/* Right Column */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={4}>
            {[
              {
                title: "Our Mission",
                img: "https://engitech.s3.amazonaws.com/images/image-box1.jpg",
              },
            ].map((item, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.img}
                    alt={item.title}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default OurVision;
