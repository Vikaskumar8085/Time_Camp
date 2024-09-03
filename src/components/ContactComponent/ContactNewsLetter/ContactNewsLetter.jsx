import React from "react";
import { useState } from "react";
import {
  Box,
  Container,
  Grid,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";

const FooterContainer = styled("footer")({
  backgroundColor: "#2c3e50",
  color: "#ecf0f1",
  padding: "3rem 0",
  marginTop: "auto",
  textAlign: "center",
});

const FooterTitle = styled(Typography)({
  marginBottom: "1rem",
  fontWeight: "bold",
  fontSize: "1.5rem",
});

const FooterDescription = styled(Typography)({
  marginBottom: "2rem",
  fontSize: "1rem",
  color: "#bdc3c7",
});

const SubscriptionForm = styled(Box)({
  maxWidth: 600,
  margin: "0 auto",
});
function ContactNewsLetter() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscription = (event) => {
    event.preventDefault();
    // Simulate an API call or subscription logic here
    setIsSubscribed(true);
    setEmail("");
  };

  return (
    <>
      <FooterContainer>
        <Container maxWidth="lg">
          <FooterTitle variant="h4">Stay in the Loop</FooterTitle>
          <FooterDescription variant="body1">
            Subscribe to our newsletter for the latest updates, tips, and
            exclusive offers delivered straight to your inbox.
          </FooterDescription>
          <SubscriptionForm
            component="form"
            onSubmit={handleSubscription}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <TextField
              label="Email Address"
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              sx={{
                "& .MuiInputLabel-root": { color: "#ecf0f1" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#ecf0f1" },
                  "&:hover fieldset": { borderColor: "#ecf0f1" },
                  "&.Mui-focused fieldset": { borderColor: "#ecf0f1" },
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                mt: 2,
                bgcolor: "#3498db",
                "&:hover": { bgcolor: "#2980b9" },
              }}
            >
              Subscribe
            </Button>
            {isSubscribed && (
              <Typography variant="body2" color="success.main" sx={{ mt: 2 }}>
                Thank you for subscribing!
              </Typography>
            )}
          </SubscriptionForm>
        </Container>
      </FooterContainer>
    </>
  );
}

export default ContactNewsLetter;
