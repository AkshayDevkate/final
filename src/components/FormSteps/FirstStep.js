
import React, { Component } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export class FirstStep extends Component {
 
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };
    
     
    render () {
    
      const { values, handleChange } = this.props;

        return (
       <>
       
       <h1> Please Enter City Name  </h1>

       <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={values.city }
          label="Age"
          onChange={handleChange('city')}
        >
          <MenuItem value={10}>Berlin</MenuItem>
          <MenuItem value={20}>Hamburg</MenuItem>
          <MenuItem value={30}>Frankfurt</MenuItem>
        </Select>
      </FormControl>
    </Box>
       

    <button onClick={this.continue}> Continue </button>
       </>
            
            );

    }

}

export default FirstStep;