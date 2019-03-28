import React from "react";

class Water extends React.Component {
    state = {
        isClicked: false,
      };
    render() {
        return(
            <div className="box col-12 col-md-6 col-lg-3 water">

                <i className="material-icons drinkIcon">local_drink</i>
                <p>{this.props.onChangeFn}L</p>
                <button  className="btn " onClick={() => {
                      this.setState({
                      isClicked: !this.state.isClicked,
                    });
                  }}
                style={{
                  backgroundColor: this.state.isClicked ? '#909090' : '#ebebeb'
                }}></button>
                      
            </div>
        );
    }
}

export default Water;