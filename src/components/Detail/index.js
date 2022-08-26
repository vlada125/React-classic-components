import * as React from "react";
import PropTypes from "prop-types";
import { Container, Grid, OutlinedInput, InputAdornment, TextField } from "@mui/material";

import { SelectIcon } from "../commons/icon/multipleIcons";
import {
  GrayBoxPanel,
  TypoItem,
  PriceLabel,
  StockInput,
  StockSelect,
  PriceNumberFormatCustom,
} from "../commons/styledComponents";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  numberInput: {
    backgroundColor: '#fff',
    borderRadius:'4px',
    width:'100%',
    "& input": { padding:'6px 8px' },
  },
});

const Detail = ( props ) => {

  const classes = useStyles();
  //Values States
  const [values, setValues] = React.useState({
    instanceName: props.instanceName,
    user: props.user.default,
    company: props.company.default,
    currentPrice: props.currentPrice,
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    console.log('pppp', values)
  };


  return (
    <Container>
      <GrayBoxPanel>
        <Grid container spacing="8px">
          <Grid item xs={12}>
            <TypoItem variant="subtitle2" gutterBottom>
              Detail
            </TypoItem>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Grid container spacing="10px">
                  <Grid item xs={12}>
                    <PriceLabel>Instance Name</PriceLabel>
                  </Grid>
                  <Grid item xs={12}>
                    <StockInput 
                      value={values.instanceName}
                      name='instanceName'
                      onChange={handleChange} 
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={5} md={2.5}>
                <Grid container spacing="10px">
                  <Grid item xs={12}>
                    <PriceLabel>User</PriceLabel>
                  </Grid>
                  <Grid item xs={12}>
                    <StockSelect
                      input={<OutlinedInput />}
                      IconComponent={SelectIcon}
                      value={values.user}
                      name='user'
                      onChange={handleChange}
                    >
                      {props.user.options.map((item, index)=>(
                        <option key={index}>{item}</option>
                      ))}
                    </StockSelect>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={4} md={2}>
                <Grid container spacing="10px">
                  <Grid item xs={12}>
                    <PriceLabel>Company</PriceLabel>
                  </Grid>
                  <Grid item xs={12}>
                    <StockSelect
                      input={<OutlinedInput />}
                      IconComponent={SelectIcon}
                      value={values.company}
                      name='company'
                      onChange={handleChange}
                    >
                      {props.company.options.map((item, index)=>(
                        <option key={index}>{item}</option>
                      ))}
                    </StockSelect>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3} md={1.5}>
                <Grid container spacing="10px">
                  <Grid item xs={12}>
                    <PriceLabel>Current Price</PriceLabel>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField 
                    className={classes.numberInput}
                    variant="outlined" 
                    value={values.currentPrice}
                    onChange={handleChange}
                    name="currentPrice"
                    InputProps={{
                      inputComponent: PriceNumberFormatCustom,
                    }} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </GrayBoxPanel>
    </Container>
  );
};

Detail.propTypes = {
  children: PropTypes.any,
};

export default Detail;
