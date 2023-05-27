import React, { Component } from 'react'
import HOC from './ArmyTrainingClass'

class Manish extends Component {
  render() {
    return (
      <div>    
            <h3 onMouseOver={this.props.hocHandleGunShots}>
                Manish {this.props.hocGunName} Gunshots : {this.props.hocGunShots}
            </h3>
      </div>
    );
  }
}
export default HOC(Manish)