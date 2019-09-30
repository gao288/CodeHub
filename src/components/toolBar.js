import React, { Component } from 'react';
import styles from './toolBar.module.css';
import lottie from 'lottie-web';
import animationData from '../Icon_Lottie/data.json';

let animObj = null;

class ToolBar extends Component {
    
    componentDidMount() {
        console.log('componentDidMount');
        
        //call the loadAnimation to start the animation
        animObj = lottie.loadAnimation({
          container: this.animBox, // the dom element that will contain the animation
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: animationData // the path to the animation json
        });
      }

    handleStop = () => {
    animObj.stop();
    }
    handlePlay() {
    animObj.play();
    }
    render() { 
        return(
            <div className={styles.toolbar}>
                
                <div className={styles.icon}
                    ref={ ref => this.animBox = ref}
                >

                </div>
                <h1 style={{height:50}}>123</h1>
            </div>
        );
    }
}
 
export default ToolBar;