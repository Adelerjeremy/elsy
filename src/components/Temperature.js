import React from "react";
import Slider from "rc-slider";
import 'rc-slider/assets/index.css';

class Temperature extends React.Component {
    state = {
        isClicked: false,
      };

    render() {
        return(
            <div className="box col-12 col-md-6 col-lg-3 temperature">
            <i className="material-icons">wb_sunny</i>
                <p>{this.props.num}°C</p>
                <button  className="btn" onClick={() => {
                      this.setState({
                      isClicked: !this.state.isClicked,
                    });
                  }}
                style={{
                  backgroundColor: this.state.isClicked ? '#656565' : '#ebebeb'
                }}> <Slider min={-10} max={60} onChange={(val) => this.props.onChangeFn(val)}/></button>
            </div>
        );
    }
}

export default Temperature;