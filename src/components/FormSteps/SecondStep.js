import React, { Component } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export class SecondStep extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };
    
      back = e => {
        e.preventDefault();
        this.props.prevStep();
      };


    render () {
        
      const { values, handleChange } = this.props;
        return (
            <>
            


<h2> We are in step 2</h2>
          <p>What is your current average annual consumption?</p>
      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">City</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={values.consume }
          label="Age"
          onChange={handleChange('consume')}
        >
          <MenuItem value={"< 2.500 kWh (1-2 Per)"}>Berlin</MenuItem>
          <MenuItem value={20}>Brandenburg</MenuItem>
          <MenuItem value={30}>Hamburg</MenuItem>
        </Select>
      </FormControl>
      </Box>

      <button onClick={this.continue}> Continue </button>
      </>
           
        );
    }
}

export default SecondStep;