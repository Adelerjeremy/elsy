import React from "react";
import Slider from "rc-slider";
import 'rc-slider/assets/index.css';

class Person extends React.Component {
    state = {
        isClicked: false,
      };
    render() {
        return(
            <div className="box col-12 col-md-6 col-lg-3 person">
                <i className="material-icons">directions_run</i>
                <p>{this.props.num}</p>
                <button  class="btn" onClick={() => {
                      this.setState({
                      isClicked: !this.state.isClicked,
                    });
                  }}
                style={{
                  backgroundColor: this.state.isClicked ? '#656565' : '#ebebeb'
                }}><Slider min={3000} max={120000} onChange={(val) => this.props.onChangeFn(val)}/></button>

            </div>
        );
    }
}

export default Person;