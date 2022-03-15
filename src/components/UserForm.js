
import React, { Component } from 'react';
import FirstStep from './FormSteps/FirstStep';
import SecondStep from './FormSteps/SecondStep';
import ThirdStep from './FormSteps/ThirdStep';
import FourthStep from './FormSteps/FourthStep';
import FinalStep from './FormSteps/FinalStep';

export class UserForm extends Component {

    state = {
        step: 1,
    }

     // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

   // Go back to prev step
   prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };



render() {
    const {step} = this.state;
    


    switch (step) {
        case 1:
            return (
                <>
                <FirstStep
                nextStep={this.nextStep}
                
                />
                </>    
                );
                

        case 2: 
        return (
            <SecondStep
            nextStep={this.nextStep}
            handleChange={this.prevStep}
            />
        )
        
        case 3:
        return (       
          <ThirdStep
             nextStep={this.nextStep}
             prevStep={this.prevStep}
          
          />
        );

        case 4:
            return(
              
                <FourthStep
                nextStep={this.nextStep}
                prevStep={this.prevStep}
               
              />
             
            );
        
            case 5:
                return(
                  <div className='form'>
                    <FinalStep
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    
                  /> 
                  </div>
                );

        default: 
          return (
                <>
                <h1>Not imported
                    
                </h1>
                </>
          );      
    }
   
           
}
}
export default UserForm;