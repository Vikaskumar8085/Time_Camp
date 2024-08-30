import React, { useState } from "react";
import { Box, Typography, Collapse, IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const faqs = [
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy on all items. To be eligible for a return, your item must be unused and in the same condition that you received it.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Shipping times vary based on your location. Generally, it takes 5-7 business days for domestic shipping and 10-15 business days for international shipping.",
  },
  {
    question: "Can I track my order?",
    answer:
      "Yes, once your order has shipped, you will receive a tracking number via email to track your shipment.",
  },
  // Add more FAQs as needed
];

const FrequentlyAskedQuestions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Box
      sx={{
        maxWidth: 800,
        margin: "auto",
        padding: 2,
        background: "#fff",
        borderRadius: 2,
        boxShadow: 2,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Frequently Asked Questions
      </Typography>
      {faqs.map((faq, index) => (
        <Box key={index} sx={{ marginBottom: 2 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              padding: 1,
              background: "#e0e0e0",
              border: "1px solid #ccc",
              borderRadius: 1,
            }}
            onClick={() => handleToggle(index)}
          >
            <Typography variant="h6" sx={{ flex: 1 }}>
              {faq.question}
            </Typography>
            <IconButton>
              {openIndex === index ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </Box>
          <Collapse in={openIndex === index}>
            <Box
              sx={{
                padding: 1,
                border: "1px solid #ddd",
                borderTop: "none",
                borderRadius: "0 0 4px 4px",
                background: "#f9f9f9",
              }}
            >
              <Typography>{faq.answer}</Typography>
            </Box>
          </Collapse>
        </Box>
      ))}
    </Box>
  );
};

export default FrequentlyAskedQuestions;
