import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import {
  Container,
  Grid,
  Typography,
  TableCell,
  TableRow,
  TableBody,
  TableHead,
  Table,
 } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import { BoxPanel } from '../../style/styledComponents';
import { makeStyles } from '@mui/styles';

const CompletedTableRow = styled(TableRow)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  width:'100%',
  fontSize:'16px',
  "td, th": {
    color:'#219653'
  }
}));

//styles
const useStyles = makeStyles({
  table: { marginLeft:'16px', '& th, & td': {color:'#828282', paddingTop:'4px !important', paddingBottom:'4px !important' }},
  tableBody: { "& td, & th": { border: 0},},
});


const StockTable = ( props ) => {

    const classes = useStyles();

    const getSumByKey = (arr, key) => {
        return arr.reduce((accumulator, current) => accumulator + Number(current[key]), 0)
    }

    return (
        <Container>
        <BoxPanel width='50%' sx={{border:0}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <TableCell width='5%'>Id</TableCell>
                                    <TableCell width='15%' align="right">Date</TableCell>
                                    <TableCell width='15%' align="right">Completed</TableCell>
                                    <TableCell width='20%' align="right">Taskes done</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody className={classes.tableBody}>
                                {props.table.map((row, index) => (
                                    (row.Completed===1 && 
                                    <CompletedTableRow key={index}>
                                        <TableCell component="th" scope="row">{row.Id}</TableCell>
                                        <TableCell align="right">{row.Date}</TableCell>
                                        <TableCell align="right"><CheckIcon fontSize='0.875rem'/></TableCell>
                                        <TableCell align="right">{row.TasksDone}</TableCell>
                                    </CompletedTableRow>) ||
                                    <TableRow key={index}>
                                        <TableCell component="th" scope="row">{row.Id}</TableCell>
                                        <TableCell align="right">{row.Date}</TableCell>
                                        <TableCell align="right"><ClearIcon fontSize='0.875rem'/></TableCell>
                                        <TableCell align="right">{row.TasksDone}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <Grid item xs={12}>
                            <Grid container px={2}>
                                <Typography fontSize='0.875rem' flexGrow='1' ><b>Total</b></Typography>
                                <Typography fontSize='0.875rem' width='50%' align="right">
                                    <b>{getSumByKey(props.table, 'TasksDone').toLocaleString('en-US')}</b>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </BoxPanel>
        </Container>
    );
}

StockTable.propTypes = {
  children: PropTypes.any
}

export default StockTable;