import React from "react";
import Water from "./components/Water.js";
import Person from "./components/Person.js";
import Heart from "./components/Heart";
import Temperature from "./components/Temperature.js";
import "./App.css";

const MIN_DRINK = 1
const MAX_DRINK = 3
const MIN_TEMPERATURE = -20
const MAX_TEMPERATURE = 40
const MIN_HEART = 80
const MAX_HEART = 180
const MIN_STEPS = 0
const MAX_STEPS = 50000


class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      heart: 0,
      temperature: -10,
      person: 3000
    };
  }

  onChangeHeart = (value) => {
    console.log("onChangeHeart value: ", value);
    this.setState({heart:value});
  }

  onChangeTemperature  = (value) => {
    console.log('onChangeTemperature value: ', value);
    this.setState({temperature:value});
  }
  onChangePerson  = (value) => {
    console.log('onChangePerson value: ', value);
    this.setState({person:value});
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">

            <Water num={MIN_DRINK + " L "} />
            <Person num={this.state.person} person={this.state.person} onChangeFn={this.onChangePerson}/>
            <Heart num={this.state.heart} heart={this.state.heart} onChangeFn={this.onChangeHeart}/>
            <Temperature num={this.state.temperature} temperature={this.state.temperature} onChangeFn={this.onChangeTemperature}/>

        </div>
      </div>  

    



  
    );
  }
}

export default App;

// <div className="App">
// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <p>
//     Edit <code>src/App.js</code> and save to reload.
//   </p>
//   <a
//     className="App-link"
//     href="https://reactjs.org"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     Learn React
//   </a>
// </header>
// </div>
