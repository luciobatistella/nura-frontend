import React, { useState } from 'react';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Chip, TablePagination, Button } from '@mui/material';

const createData = (name, status) => {
  return { name, status };
};

const rows = [
  createData('Project 1', 'Active'),
  createData('Project 2', 'Pause'),
  createData('Project 3', 'Closed'),
  createData('Project 4', 'Active'),
  createData('Project 5', 'Active'),
  createData('Project 6', 'Pause'),
  createData('Project 7', 'Closed'),
  createData('Project 8', 'Active'),
  createData('Project 9', 'Active'),
  createData('Project 10', 'Pause'),
];

const getStatusChip = (status) => {
  let color;
  switch (status) {
    case 'Active':
      color = '#E9E7FD';
      break;
    case 'Pause':
      color = '#FFE88E';
      break;
    case 'Closed':
      color = '#FFC2C2';
      break;
    default:
      color = 'default';
  }
  return <Chip label={status} sx={{ bgcolor: color }} />;
};

const ProjectsUser = ({ userName }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" gutterBottom>
          Hi {userName} !!
        </Typography>
        <Button variant="contained" color="primary" sx={{ borderRadius: '20px' }}>
          New Project
        </Button>
      </Box>
      <TableContainer>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Project Name</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow key={row.name}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{getStatusChip(row.status)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default ProjectsUser;
