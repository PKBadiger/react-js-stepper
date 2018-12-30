# react-js-stepper
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![npm download][download-image]][download-url]

Steppers display progress through a sequence of logical and numbered steps. They may also be used for navigation

# React Stepper Demo
https://pkbadiger.github.io/react-js-stepper/ 

## Installation

The package can be installed via NPM:

```
npm install react-js-stepper --save
```
You will need to install and configure sass-loader withing webpack.config.js, since all the styles required for react-js-stepper component is written using css preprocessor "SASS".

## Usage

The most basic use of the react-js-stepper can be described with:

```
import React from 'react';
import ReactDOM from 'react-dom';
import Stepper from 'react-js-stepper'

const steps = [{title: 'Stage - 1'}, {title: 'Stage - 2'}, {title: 'Stage - 3'},]

export default class App extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            activeStep: 1,
        }
    }

    handleOnClickStepper = (step) => {
        this.setState({activeStep: step});
    }

    handleOnClickNext = () => {
        let nextStep = this.state.activeStep + 1;
        this.setState({activeStep: nextStep})
    }

    handleOnClickBack = () => {
        let prevStep = this.state.activeStep - 1;
        this.setState({activeStep:prevStep})
    }

    render(){
        return(
            <React.Fragment>
                <Stepper 
                    steps={steps} 
                    activeStep={this.state.activeStep}
                    onSelect={this.handleOnClickStepper}
                    showNumber={false} 
                />

                <div style={{marginTop: '40px'}}>
                {this.state.activeStep === 1 ? <div> You are in Stage {this.state.activeStep} </div> : 
                 this.state.activeStep === 2 ? <div> You are in Stage {this.state.activeStep} </div> :
                 <div> You are in Stage {this.state.activeStep} </div>
                }
                </div>

                <div style={{marginTop: '40px'}}>
                    <input type="button" value={this.state.activeStep === steps.length ? 'Finish' : 'Next'} 
                            onClick={this.state.activeStep === steps.length ? null : this.handleOnClickNext}/>
                    {this.state.activeStep ===1 ? '' : <input type="button" value="Back" onClick={this.handleOnClickBack} /> }
                </div>
            </React.Fragment>
        )
    }
}
```

## Configuration

The most basic use of the react-js-stepper can be described with:
```
    <Stepper 
        steps={steps} 
        activeStep={this.state.activeStep}
        onSelect={this.handleOnClickStepper}
        showNumber={false} 
    />
```

`steps` array of objects with property name called `title` passed to stepper to display number of steps or stages.

`activeStep` is a number passed to stepper to highlight or show active step among list of steps.

`onSelect` You can use onSelect event handler which fires each time when you click on each step.

`showNumber` is a boolean, this is to enable/disable step number within circle.


## Props

| Name     | Type           | Default     | Description  |
|----------|----------------|-------------|--------------|
| steps| array of objects | steps = [{title: 'Stage - 1'}, {title: 'Stage - 2'}, {title: 'Stage - 3'},] | Constants passed to display stepper|
|activeStep | number | 2 |  |
| onSelect | func | | callback fired when select stepper |
|showNumber| boolean | false | To enable/disable step/stage number within circle






