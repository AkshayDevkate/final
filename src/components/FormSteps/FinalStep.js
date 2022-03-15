import React, { Component } from 'react';

export class FinalStep extends Component {
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
            <h1> We are in final step</h1>
         
            <button onChange={this.back}>Back</button>
            </>
          
        );
    }

}

export default FinalStep;