import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
    return (
        <TableContainer component={Paper}>
            <h2>Product Sell</h2>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Product Name</TableCell>
                        <TableCell align="right">Stock</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Total Sales</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                Abstract 3D
                            </TableCell>
                            <TableCell align="right">32 in Stock</TableCell>
                            <TableCell align="right">$45.99</TableCell>
                            <TableCell align="right">20</TableCell>
                        </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row">
                            Sarphens Illustration
                        </TableCell>
                        <TableCell align="right">32 in Stock</TableCell>
                        <TableCell align="right">$45.99</TableCell>
                        <TableCell align="right">20</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}