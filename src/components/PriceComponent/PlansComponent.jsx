import React, { useState } from 'react';
import {
  Box,
  Tabs,
  Tab,
  Grid,
  Typography,
  Button,
  List,
  ListItem,
  Collapse,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Link,
} from '@mui/material';

const plans = [
  {
    id: 'team',
    title: 'Team',
    monthlyPrice: '$399/mo',
    annuallyPrice: '$333/mo',
    annuallyInfo: '(billed annually)',
    description: 'Robust toolset for small to medium-sized teams',
    features: [
      'Team-level license to Trymata usability testing suite',
      '10 Trymata panel testers/mo',
      '10 invites/mo to test with your own users',
      'UX Diagnostics metrics',
      '36 highlight reels/yr',
      '2 total seats',
    ],
    demoLink: 'https://calendly.com/trymata/team-plan-demo',
  },
  {
    id: 'enterprise',
    title: 'Enterprise',
    monthlyPrice: '$1,667/mo',
    annuallyInfo: '(billed annually)',
    description: 'Advanced toolset for large firms with diverse testing needs',
    features: [
      'Enterprise-level license to Trymata usability testing suite',
      '360 Trymata panel testers/yr',
      'Unlimited testing with your own users',
      'Up to 16 multi-choice screeners',
      'Video transcripts',
      
     
    ],
    demoLink: 'https://calendly.com/trymata/enterprise-plan-demo',
  },
  {
    id: 'unlimited',
    title: 'Unlimited',
    monthlyPrice: '$3,333/mo',
    annuallyInfo: '(billed annually)',
    description: 'Comprehensive solution for organizations testing at scale',
    features: [
      'Unlimited-level license to Trymata usability testing suite',
      'All Enterprise-level features & benefits',
      'Unlimited Trymata panel testers',
      'Unlimited seats',
      'Early access to new features',
    ],
    demoLink: 'https://calendly.com/trymata/unlimited-plan-demo',
  },
  {
    id: 'agency',
    title: 'Agency',
    monthlyPrice: 'Custom',
    annuallyInfo: '(billed annually)',
    description: 'Flexible and secure solution for agencies to test for clients',
    features: [
      'Manage unique testing licenses for all your clients',
      "Keep each client's test data & billing separate",
      'Seamlessly switch between client dashboards',
      "Gate access to each client's data for different users",
      
    ],
    demoLink: 'https://calendly.com/trymata/agency-plan-demo',
  },
];

const PlansComponent = () => {
  const [selectedTab, setSelectedTab] = useState('monthly');

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        User Testing Pricing
      </Typography>
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        centered
        sx={{ mb: 4 }}
      >
        <Tab label="Monthly" value="monthly" />
        <Tab label="Annually" value="annually" />
      </Tabs>

      <Grid container spacing={4} justifyContent="center">
        {plans.map((plan) => (
          <Grid item xs={12} md={3} key={plan.id}>
            <Box sx={{ border: 1, borderRadius: 2, p: 3 ,height: '100%',position:'relative'}}>
              <Typography variant="h5" gutterBottom>
                {plan.title}
              </Typography>
              <Typography variant="h6" gutterBottom>
                {selectedTab === 'monthly' ? plan.monthlyPrice : plan.annuallyPrice}
                {selectedTab === 'annually' && (
                  <Typography variant="body2">{plan.annuallyInfo}</Typography>
                )}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {plan.description}
              </Typography>
              <List>
                {plan.features.map((feature, index) => (
                  <ListItem key={index}>{feature}</ListItem>
                ))}
              </List>
              <Box
  sx={{
    mt: 2,
    position: 'absolute', 
    bottom: 5,
    left: 0, 
    right: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}
>
  <Button variant="contained" sx={{borderRadius:50}}>Get free trial</Button>
</Box>

            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Plan Comparison Table */}
      <Box sx={{ mt: 4}}>
        <Typography variant="h6" gutterBottom>
          Full Plan Comparison
        </Typography>
        <TableContainer sx={{ border: 1, borderRadius: 2, }}>    
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Features</TableCell>
                <TableCell align="center">Team</TableCell>
                <TableCell align="center">Enterprise</TableCell>
                <TableCell align="center">Unlimited</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Multi-member login</TableCell>
                <TableCell align="center">2 seats</TableCell>
                <TableCell align="center">5 seats</TableCell>
                <TableCell align="center">Unlimited seats</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Additional seat purchasing</TableCell>
                <TableCell align="center">$100/mo per seat</TableCell>
                <TableCell align="center">$300/mo per seat</TableCell>
                <TableCell align="center">N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Video annotations</TableCell>
                <TableCell align="center">Unlimited</TableCell>
                <TableCell align="center">Unlimited</TableCell>
                <TableCell align="center">Unlimited</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Highlight reels</TableCell>
                <TableCell align="center">36/yr</TableCell>
                <TableCell align="center">Unlimited</TableCell>
                <TableCell align="center">Unlimited</TableCell>
              </TableRow>
              {/* Add more rows as needed */}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default PlansComponent;
