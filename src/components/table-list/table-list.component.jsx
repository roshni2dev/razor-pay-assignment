import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Grid } from '@mui/material';

import { data } from './table-data';


const TableList = () => {
    return (
        <div className='px-8 pt-4'>
            <Grid container style={{ maxWidth: '1300px', margin: 'auto', width: 'auto' }}>
                <Grid item xs={12}>
                    <TableContainer style={{ background: 'none' }} >
                        <Table sx={{ minWidth: 650, background: 'none' }} aria-label="simple table">
                            <TableHead >
                                <TableRow >
                                    <TableCell style={{ borderBottom: 0 }}>
                                        <p className='text-xs text-[#f5f6f7] uppercase'>
                                            Created At
                                        </p>
                                    </TableCell>
                                    <TableCell style={{ borderBottom: 0 }} align="start">
                                        <p className='text-xs text-[#f5f6f7] uppercase'>
                                            Amount
                                        </p>
                                    </TableCell>
                                    <TableCell style={{ borderBottom: 0 }} align="start">
                                        <p className='text-xs text-[#f5f6f7] uppercase'>
                                            Status
                                        </p>
                                    </TableCell>
                                    <TableCell style={{ borderBottom: 0 }} align="start">

                                        <p className='text-xs text-[#f5f6f7] uppercase'>
                                            Contact
                                        </p>
                                    </TableCell>
                                    <TableCell style={{ borderBottom: 0 }} align="start">
                                        <p className='text-xs text-[#f5f6f7] uppercase'>
                                            Created by
                                        </p>
                                    </TableCell>
                                    <TableCell style={{ borderBottom: 0 }} align="right">
                                        <p className='text-xs text-[#f5f6f7] uppercase'>
                                            UTR
                                        </p>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((data) => (
                                    <TableRow
                                        key={data.id}
                                    >
                                        <TableCell style={{ borderBottom: 0 }} component="th" scope="row">
                                            <p className='text-xs text-[#f5f6f7]  '>
                                                {data.date}
                                            </p>
                                        </TableCell>
                                        <TableCell style={{ borderBottom: 0 }} align="start">
                                            <p className='text-xs text-[#f5f6f7] '>
                                                &#8377;{data.amount}
                                            </p>
                                        </TableCell>
                                        <TableCell style={{ borderBottom: 0 }} align="start">
                                            <p className='bg-[#403539] text-[#b87702] capitalize text-xs px-2  py-1 w-fit rounded-xl'>
                                                {data.status} </p></TableCell>
                                        <TableCell style={{ borderBottom: 0 }} align="start">
                                            <p className='text-xs text-[#f5f6f7] capitalize '>
                                                {data.contact}
                                            </p></TableCell>
                                        <TableCell style={{ borderBottom: 0 }} align="start">
                                            <p className='text-xs text-[#7f8396] capitalize '>
                                                {data.createdBy}
                                            </p></TableCell>
                                        <TableCell style={{ borderBottom: 0 }} align="right">
                                            <p className='text-xs text-[#7f8396] capitalize '>
                                                --
                                            </p>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </div>
    );
}

export default TableList