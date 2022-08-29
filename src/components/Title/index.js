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

const TitleTable = styled(Table)(({ theme }) => ({
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

const Title = ( props ) => {

    const getSumByKey = (arr, key) => {
        return arr.reduce((accumulator, current) => accumulator + Number(current[key]), 0)
    }

    return (
        <Container>
        <BoxPanel>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Stack direction='row' spacing={2} className="align-items-center">
                        <TypoItem variant="subtitle2">Title</TypoItem>
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
                    <TitleTable>
                        <TableHead>
                            <TableRow >
                                <TableCell width='35%'>Type</TableCell>
                                <TableCell width='25%'>Col 1</TableCell>
                                <TableCell width='25%'>Col 2</TableCell>
                                <TableCell width='15%'>Col 3</TableCell>
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
                    </TitleTable>
                </Grid>
            </Grid>
        </BoxPanel>
        </Container>
    );
}

Title.propTypes = {
  children: PropTypes.any
}

export default Title;