
import React, { Component } from 'react';
import FirstStep from './FormSteps/FirstStep';
import SecondStep from './FormSteps/SecondStep';
import ThirdStep from './FormSteps/ThirdStep';
import FourthStep from './FormSteps/FourthStep';
import FinalStep from './FormSteps/FinalStep';

export class UserForm extends Component {

    state = {
        step: 1,
        ptz: '',
        consume: '',
        wallbox: '',
        battery: '',
        meters: '',
        name:'',
        email:'',
        phone:'',
        total: 0,
        message: '',
        sq: 0,
        option: true,
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

    // Handle fields change
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
      };

render() {
    const {step} = this.state;
    const { ptz, consume, wallbox, battery, meters, total, message, sq, option } = this.state;
    const values = { ptz, consume, wallbox, battery, meters, total, message, sq, option};


    switch (step) {
        case 1:
            return (
                <>
                <FirstStep
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
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
             handleChange={this.handleChange}
             handlenewChange={this.handlenewChange}
             sqtopanel={this.sqtopanel}
             values={values}
             meters={meters}
             message={message}
             sq={sq} 
          />
        );

        case 4:
            return(
              
                <FourthStep
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
              />
             
            );
        
            case 5:
                return(
                  <div className='form'>
                    <FinalStep
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
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