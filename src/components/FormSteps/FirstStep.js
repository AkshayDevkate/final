
import React, { Component } from 'react';

export class FirstStep extends Component {
 
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };
    
     
    render () {
    

        return (
       <>
       
       <h1> We are in first Step </h1>
            <button onClick={this.continue}> Continue </button>
       </>
            
            );

    }

}

export default FirstStep;