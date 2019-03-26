import React from "react";
import Slider from "rc-slider";
import 'rc-slider/assets/index.css';


class Heart extends React.Component {
    state = {
        isClicked: false,
      };
    render() {
        return(

            <div className="box col-12 col-md-6 col-lg-3 heart">
                <i className="material-icons">favorite</i>
                <p>{this.props.num} BPM</p> 
                <button  class="btn" onClick={() => {
                      this.setState({
                      isClicked: !this.state.isClicked,
                    });
                  }}
                style={{
                  backgroundColor: this.state.isClicked ? '#909090' : '#ebebeb'
                }}><Slider min={0} max={120} onChange={(val) => this.props.onChangeFn(val)}/></button>

            </div>

        );
    }
}

export default Heart;

