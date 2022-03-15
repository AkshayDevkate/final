import React, { Component } from "react";

export class ThirdStep extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };
    
      back = e => {
        e.preventDefault();
        this.props.prevStep();
      };
    render () {
       
        return (
            <>
            <h1> We are in third step</h1>
            <h1>Hello world </h1>
            <button onClick={this.continue}> Continue </button>
            <button onClick={this.back}> Back</button>
            </>
            

        );

    }
}

export default ThirdStep;