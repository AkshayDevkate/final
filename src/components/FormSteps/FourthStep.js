import React, { Component } from 'react';

export class FourthStep extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };
    
      back = e => {
        e.preventDefault();
        this.props.prevStep();
      };

    render () {
     

        return(
            <>

            <h1>We are in Fourth step</h1>
            
            <button onClick={this.continue}>  Continue </button>

            <button onChange={this.back}>Back</button>
            </>
        );
    }
}

export default FourthStep;