
import React, { Component } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@material-ui/core/Button';

//Autocomplete
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';



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
    
    <Autocomplete
      id="highlights-demo"
      sx={{ minwidth: 60 }}
      options={top100Films}
      onChange={handleChange('ptz')}
      getOptionLabel={(option) => option.title}
      renderInput={(params) => (
        <TextField {...params} label="Enter cuty name" margin="normal" />
      )}
      renderOption={(props, option, { inputValue }) => {
        const matches = match(option.title, inputValue);
        const parts = parse(option.title, matches);

        return (
          <li {...props}>
            <div>
              {parts.map((part, index) => (
                <span
                  key={index}
                  style={{
                    fontWeight: part.highlight ? 700 : 400,
                  }}
                >
                  {part.text}
                </span>
              ))}
            </div>
          </li>
        );
      }}
    />




    <Button
              style={{background: "#5a875c",color:"white"}}
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
   
     
       </>   
       </>
            );

    }

}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: '10055 Berlin - Westend', year: 1994 },
  { label: '10062 Berlin', year: 1972 },
  { label: '10115 Berlin - Mitte', year: 1974 },
  { label: '10117 Berlin - Mitte', year: 2008 },
  { label: '10119 Berlin - Mitte', year: 1957 },
  { label: "10119 Berlin - Prenzlauer Berg", year: 1993 },
  { label: '10178 Berlin - Mitte', year: 1994 },
  {
    label: '10179 Berlin - Mitte',
    year: 2003,
  },
  { label: '10217 Berlin', year: 1966 },
  { label: '10234 Berlin - Tiergarten', year: 1999 },
  {
    label: '10243 Berlin - Friedrichshain ',
    year: 2001,
  },
  {
    label: '10245 Berlin - Friedrichshain',
    year: 1980,
  },
  { label: '10247 Berlin - Friedrichshain ', year: 1994 },
  { label: 'In10247 Berlin - Prenzlauer Berg ', year: 2010 },
  {
    label: '10249 Berlin - Friedrichshain ',
    year: 2002,
  },
  { label: "10249 Berlin - Prenzlauer Berg", year: 1975 },
  { label: '10267 Berlin - Charlottenburg ', year: 1990 },
  { label: '10315 Berlin - Lichtenberg', year: 1999 },
  { label: '10317 Berlin - Lichtenberg', year: 1954 },
  {
    label: '10318 Berlin - Lichtenberg',
    year: 1977,
  },
  { label: '10319 Berlin - Lichtenberg', year: 2002 },


  { label: '10324 Berlin - Lichtenberg (Region Berlin)', year: 2002 },
  { label: '10365 Berlin - Lichtenberg (Region Berlin)', year: 2002 },
  { label: '10367 Berlin - Lichtenberg (Region Berlin)', year: 2002 },
  { label: '10369 Berlin - Lichtenberg (Region Berlin)', year: 2002 },
  { label: '10405 Berlin - Prenzlauer Berg (Region Berlin)', year: 2002 },
  { label: '10407 Berlin - Prenzlauer Berg (Region Berlin)', year: 2002 },
  { label: '10409 Berlin - Prenzlauer Berg (Region Berlin)', year: 2002 },
  { label: '10414 Berlin (Region Berlin)', year: 2002 },
  { label: '10435 Berlin - Mitte (Region Berlin)', year: 2002 },
  { label: '10435 Berlin - Prenzlauer Berg (Region Berlin)', year: 2002 },
  { label: '10435 Berlin (Region Berlin)', year: 2002 },
  { label: '10437 Berlin - Prenzlauer Berg (Region Berlin)', year: 2002 },
  { label: '10439 Berlin - Prenzlauer Berg (Region Berlin)', year: 2002 },
  { label: '10439 Berlin - Pankow (Region Berlin)', year: 2002 },
  { label: '10551 Berlin - Tiergarten (Region Berlin)', year: 2002 },
  { label: '10551 Berlin - Wedding (Region Berlin', year: 2002 },
  { label: '10553 Berlin (Region Berlin)', year: 2002 },
  { label: '10553 Berlin - Tiergarten (Region Berlin)', year: 2002 },
  { label: '10553 Berlin - Wedding (Region Berlin)', year: 2002 },
  { label: '10555 Berlin - Mitte (Region Berlin)', year: 2002 },
  { label: '10555 Berlin - Wedding (Region Berlin)', year: 2002 },
  { label: '10555 Berlin - Tiergarten (Region Berlin)', year: 2002 },
  { label: '10557 Berlin (Region Berlin)', year: 2002 },
  { label: '10557 Berlin - Wedding (Region Berlin)', year: 2002 },

]




export default FirstStep;