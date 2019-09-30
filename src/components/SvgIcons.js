import React, { Component } from 'react';

class SvgIcons extends Component {
  constructor(){
    this.state={
      opacity: 1
    }
  }
  mouseEnter() {
    console.log('mouse enter')
    this.setState({opacity: 0.5})
  }

  mouseLeave() {
      console.log('mouse leave')
      this.setState({opacity: 1})
  }

  render() { 
      <div style={{opacity: this.state.opacity}}>
        
      </div>
  }
}
 
export default SvgIcons;