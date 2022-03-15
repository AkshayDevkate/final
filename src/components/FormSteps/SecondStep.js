import React, { Component } from "react";


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
            
            <h2>We are in step two</h2>
           <button onClick={this.continue}> Continue </button>
           <button onClick={this.back}> Back </button> 
            </>
           

           
        );
    }
}

export default SecondStep;