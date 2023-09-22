import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';

const columns = [
  {
    id: 'monday',
    label: 'Hétfő',
    align: 'center',
  },
  {
    id: 'tuesday',
    label: 'Kedd',
    align: 'center',
  },
  {
    id: 'wednesday',
    label: 'Szerda',
    align: 'center',
  },
  { id: 'thursday', label: 'Csütörtök', align: 'center' },
  { id: 'friday', label: 'Péntek', align: 'center' },
  { id: 'saturday', label: 'Szombat', align: 'center' },
  { id: 'sunday', label: 'Vasárnap', align: 'center' },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  // Add more rows as needed
];

export default function InputTable() {
  return (
    <Paper style={{ width: '100%' }}>
      <div
        style={{
          maxHeight: '440px', // Set the maximum height for vertical scrolling
          overflowX: 'auto', // Enable horizontal scrolling
          overflowY: 'auto', // Enable vertical scrolling
        }}
      >
        {/* Wrap the TableContainer in a div with maxHeight and overflow */}
        <TableContainer>
          <Table aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align="center">
                          <TextField key={column.id} style={{ textAlign: 'center' }}>
                            {/* Display your data here */}
                          </TextField>
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Paper>
  );
}
