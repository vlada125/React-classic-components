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
  Stack,
  Link,
  TableFooter,
 } from '@mui/material';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import { BoxPanel, TypoItem } from '../commons/styledComponents';
import { Box } from '@mui/system';

const BreakdownTable = styled(Table)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  width:'100%',
  "td, th": {
    padding:'8px 0px', 
    fontSize:'16px',
    border:0 
  },
  "thead th": {
    color:'#828282',
  },
  "tfoot td": {
    color:'#000',
    fontWeight:'700'
  },
}));

const Breakdown = ( props ) => {

    const getSumByKey = (arr, key) => {
        return arr.reduce((accumulator, current) => accumulator + Number(current[key]), 0)
    }

    return (
        <Container>
        <BoxPanel>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Stack direction='row' spacing={2} sx={{alignItems:'center'}}>
                        <TypoItem variant="subtitle2">Breakdown</TypoItem>
                        <Stack direction='row' flexGrow='1' pt='5px'>
                            <Stack direction='row' spacing='5px'>
                                <Typography fontSize='12px' lineHeight="14.52px" color="#828282">
                                Last updated 15 days ago ·
                                </Typography>
                            </Stack>
                            <Stack direction='row' color='#828282' >
                                <Link color='#828282' className='cursor text-decoration-gray' display='flex' >
                                    <RefreshOutlinedIcon fontSize="9px" />
                                    <Typography fontSize='12px' lineHeight="15px">
                                        Update
                                    </Typography>
                                </Link>
                            </Stack>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    <BreakdownTable>
                        <TableHead>
                            <TableRow >
                                <TableCell width='35%'>Type</TableCell>
                                <TableCell width='25%'>Column 1</TableCell>
                                <TableCell width='25%'>Column 2</TableCell>
                                <TableCell width='15%'>Column 3</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.breakdown.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell component="th" scope="row">{row.Type}</TableCell>
                                    <TableCell>${row.Column1.toLocaleString('en-US')}</TableCell>
                                    <TableCell>${row.Column2.toLocaleString('en-US')}</TableCell>
                                    <TableCell>{row.Column3}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        <TableFooter>
                            <TableRow >
                                <TableCell></TableCell>
                                <TableCell>
                                    <Box width='60%' pt='16px' borderTop={'1px solid #000'}>
                                        ${getSumByKey(props.breakdown, 'Column1').toLocaleString('en-US')}
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Box width='60%' pt='16px' borderTop={'1px solid #000'}>
                                        ${getSumByKey(props.breakdown, 'Column2').toLocaleString('en-US')}
                                    </Box>
                                </TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableFooter>
                    </BreakdownTable>
                </Grid>
                <Grid item xs={12}>
                    <Stack direction='row' spacing={2}>
                        <TypoItem variant="subtitle2">Breakdown 2</TypoItem>
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    <BreakdownTable>
                        <TableHead>
                            <TableRow >
                                <TableCell width='35%'>Type</TableCell>
                                <TableCell width='25%'></TableCell>
                                <TableCell width='25%'>Column 2</TableCell>
                                <TableCell width='15%'>Column 3</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.breakdown2.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell component="th" scope="row">{row.Type}</TableCell>
                                    <TableCell></TableCell>
                                    <TableCell>${row.Column2.toLocaleString('en-US')}</TableCell>
                                    <TableCell>{row.Column3}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        <TableFooter>
                            <TableRow >
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell>
                                    <Box width='60%' pt='16px' borderTop={'1px solid #000'}>
                                        ${getSumByKey(props.breakdown2, 'Column2').toLocaleString('en-US')}
                                    </Box>
                                </TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableFooter>
                    </BreakdownTable>
                </Grid>
            </Grid>
        </BoxPanel>
        </Container>
    );
}

Breakdown.propTypes = {
  children: PropTypes.any
}

export default Breakdown;