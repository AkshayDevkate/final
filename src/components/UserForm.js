
import React, { Component } from 'react';
import FirstStep from './FormSteps/FirstStep';
import SecondStep from './FormSteps/SecondStep';
import ThirdStep from './FormSteps/ThirdStep';
import FourthStep from './FormSteps/FourthStep';
import FinalStep from './FormSteps/FinalStep';

export class UserForm extends Component {

    state = {
        step: 1,
        city: '',
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

// converting the sq meters area into number of solar modules
sqtopanel = () => {
  const {sq} = this.state;

// calculate solar modules and change state for meters
  this.setState({
    meters: (sq/1.9).toFixed()
  })  
}
      
// calculating final price function
handlenewChange = () => {
  const {meters,battery} = this.state;

      //Calculating the price with battery 
              if (battery === 'Ja')
              {   
              this.setState({
                total :  ((meters * 0.37 ) * 2400 ) 
              })
            }

            //calculating the price without battery 
              if (battery === 'Nein')
                {
    
                this.setState({
                  message: "Please enter value greater than 8"
                })
                
                this.setState({
                  total :  ((meters * 0.37 ) * 1400).toFixed() 
                })
              }

              console.log('i am in function 1 and price ='  )
            };          

    
// for slider
     handleBlur = () => {
      const {meters} = this.state;
      if ( meters < 0) {
        
      } else if (meters > 100) {
     
      }
    };



render() {
    const {step} = this.state;
    const { ptz, consume, wallbox, battery, meters, total, message, sq, option, city } = this.state;
    const values = { ptz, consume, wallbox, battery, meters, total, message, sq, option, city};

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
            handleChange={this.handleChange}
            values={values}
         
            />
        )
        
        case 3:
        return (       
          <ThirdStep
             nextStep={this.nextStep}
             prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
            handlenewChange={this.handlenewChange}
             sqtopanel={this.sqtopanel}
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
                 
                    <FinalStep
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                   
                    values={values}
                    
                  /> 
               
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