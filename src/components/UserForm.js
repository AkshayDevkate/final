
import React, { Component } from 'react';
import FirstStep from './FormSteps/FirstStep';


export class UserForm extends Component {

    state = {
        step: 1,
    }

render() {
    const {step} = this.state;

    switch (step) {
        case 1:
            return (
                <>
                <FirstStep/>
                <div>

                     <h1> Trying to call h1</h1>
                </div>
                </>
                
                );
    }
   
           
}
}
export default UserForm;