import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { GridView as GridViewIcon, List as ListIcon } from '@mui/icons-material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)(({ theme }) => ({
    margin: theme.spacing(1),
    width: 200,
  }));
  
const data = [
  { id: 1, name: "Item 1", description: "Description 1" },
  { id: 2, name: "Item 2", description: "Description 2" },
  // Add more items as needed
];
const GridListTable = () => {
  const [viewMode, setViewMode] = useState("grid"); // Default to grid view

  const handleViewChange = () => {
    setViewMode((prevMode) => (prevMode === "grid" ? "list" : "grid"));
  };
  return (
    <div>
    <IconButton onClick={handleViewChange} color="primary" style={{ marginBottom: 16 }}>
      {viewMode === 'grid' ? <ListIcon /> : <GridViewIcon />}
    </IconButton>
    {viewMode === 'grid' ? (
      <Grid container spacing={2}>
        {data.map((item) => (
          <Grid item key={item.id}>
            <StyledCard>
              <CardContent>
                <Typography variant="h6">{item.name}</Typography>
                <Typography variant="body2">{item.description}</Typography>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    ) : (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )}
  </div>
  );
};

export default GridListTable;

// export default GridListTable
