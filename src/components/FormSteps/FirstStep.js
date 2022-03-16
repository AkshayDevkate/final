
import React, { Component } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@material-ui/core/Button';


export class FirstStep extends Component {
 

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };
    
     
    render () {
    
      const { values, handleChange } = this.props;

        return (
       <>

        <div className="progressBar">
        <ProgressBar>
          <ProgressBar striped variant="success" now={2} key={1} />
         </ProgressBar>
      </div>

      <>
       <h1> Please Enter City Name  </h1>
      <Box sx={{ minWidth: 60}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">City</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={values.city }
          label="City Name"
          onChange={handleChange('city')}
        >
          <MenuItem value={10}>Berlin</MenuItem>
          <MenuItem value={20}>Hamburg</MenuItem>
          <MenuItem value={30}>Frankfurt</MenuItem>
        </Select>
      </FormControl>
    </Box>
       
    </>

    <Button
              style={{background: "#5a875c",color:"white"}}
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
   
     
       </>   
            );

    }

}

export default FirstStep;