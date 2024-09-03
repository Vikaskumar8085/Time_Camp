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

const HomeComponent = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Grid container spacing={4} alignItems="center">
        {/* Left Column */}
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h4" gutterBottom>
              Why Choose TimeCamp?
            </Typography>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
              alias atque, laborum ab beatae obcaecati et recusandae numquam
              dolorum delectus aliquid, sunt vel? Perferendis iste facilis,
              minima quisquam quaerat dolorem, similique totam natus repellendus
              pariatur voluptatum! Natus, voluptates quo. Suscipit voluptas
              nobis fugit eos omnis quaerat est, dolorum veritatis commodi animi
              magni deserunt rem vero consequuntur ipsam, sit similique.
              Incidunt ut blanditiis voluptate vitae neque impedit nulla,
              commodi, adipisci aliquid aliquam iure atque. Mollitia nobis sit
              voluptatem, corrupti rem illo odio quo officia molestiae
              exercitationem fuga magnam quibusdam ut cum unde, ipsam repellat
              blanditiis animi aliquam praesentium. Optio, incidunt illum?
            </Typography>

            {/* Inner Counters Section */}
            <Grid container spacing={4}>
              {[
                { number: "213+", label: "Developers" },
                { number: "197+", label: "Clients" },
                { number: "34+", label: "AI Solutions" },
                { number: "14+", label: "Experience" },
              ].map((counter, index) => (
                <Grid item xs={6} sm={3} key={index}>
                  <Box textAlign="center">
                    <Typography variant="h4" component="span" color="primary">
                      {counter.number}
                    </Typography>
                    <Typography variant="h6">{counter.label}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
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
              {
                title: "Our Values",
                img: "https://engitech.s3.amazonaws.com/images/image-box3.jpg",
              },
              {
                title: "Our Vision",
                img: "https://engitech.s3.amazonaws.com/images/image-box2.jpg",
              },
              {
                title: "Our Strategy",
                img: "https://engitech.s3.amazonaws.com/images/image-box4.jpg",
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
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {item.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomeComponent;
