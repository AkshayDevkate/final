import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export class FinalStep extends Component {

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
        <>
        <div className="progressBar">
        <ProgressBar>
          <ProgressBar striped variant="success" now={100} key={1} />
         </ProgressBar>
      </div>
      <MuiThemeProvider>
        <>
            <AppBar title="Kontaktdaten für die Zustellung unabhängiger Angebote von verschiedener Installationsfirmen" />
            <TextField
              placeholder="Name"
              label="Name"
              onChange={handleChange('name')}
              defaultValue={values.name}
              margin="normal"
              fullWidth
              required
            />
            <br />
            <TextField
              placeholder="E-mail"
              label="E-mail"
              onChange={handleChange('email')}
              defaultValue={values.email}
              margin="normal"
              fullWidth
              required
            />
            <br />
            <TextField
              placeholder="Phone Number"
              label="Phone"
              onChange={handleChange('phone')}
              defaultValue={values.phone}
              margin="normal"
              fullWidth
              required
            />
            <br />
            <div className='buttonsForm'>
            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>

          
            </div>
        </>
      </MuiThemeProvider>
      </>
    );
  }
}

export default FinalStep;