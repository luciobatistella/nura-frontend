import React, { useState } from 'react';
import {
  Grid,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Pagination
} from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const Payments = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  // Sample data to display in the table
  const data = [
    { date: "14/06/2024", payment: "Pix", value: "R$ 42,28" },
    { date: "14/05/2024", payment: "PIX", value: "R$ 42,28" },
    { date: "17/04/2024", payment: "Boleto Bancário", value: "R$ 68,37" },
    { date: "24/03/2024", payment: "Cartão de Crédito", value: "R$ 50,00" },
    { date: "04/03/2024", payment: "Cartão de Crédito", value: "R$ 50,00" },
    { date: "22/01/2024", payment: "Cartão de Crédito", value: "R$ 105,00" },
    { date: "26/12/2023", payment: "Cartão de Crédito", value: "R$ 50,00" },
    { date: "22/11/2023", payment: "Cartão de Crédito", value: "R$ 60,00" },
    { date: "02/11/2023", payment: "Cartão de Crédito", value: "R$ 50,00" },
    { date: "10/09/2023", payment: "Cartão de Crédito", value: "R$ 100,00" },
  ];

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setPage(1); // Reset to the first page when searching
  };

  // Handle pagination change
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  // Filtered data based on search term
  const filteredData = data.filter((row) =>
    row.date.includes(searchTerm) ||
    row.payment.toLowerCase().includes(searchTerm.toLowerCase()) ||
    row.value.includes(searchTerm)
  );

  // Paginate the filtered data
  const startIndex = (page - 1) * rowsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + rowsPerPage);

  return (
    <Grid container spacing={2}>
      {/* Search Field */}
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Search..."
          variant="outlined"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </Grid>

      {/* Table */}
      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Data</TableCell>
                <TableCell>Forma de pagamento principal</TableCell>
                <TableCell>Valor</TableCell>
                <TableCell>NFe</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.payment}</TableCell>
                  <TableCell>{row.value}</TableCell>
                  <TableCell>
                    <AttachMoneyIcon />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>

      {/* Pagination */}
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Pagination
          count={Math.ceil(filteredData.length / rowsPerPage)}
          page={page}
          onChange={handlePageChange}
          color="primary"
          sx={{ marginTop: 2 }}
        />
      </Grid>
    </Grid>
  );
};

export default Payments;
