import React, { Component } from 'react';
import styles from './App.module.css';
import ToolBar from './components/toolBar';
import ControlColumn from './components/ControlColumn'

class App extends Component {
    render() { 
        return(
            <body className={styles.body}>
                <ToolBar> 
                    
                </ToolBar>
                <div style={{width:'50px',height:'100%'}}>
            
                    {/* <ControlColumn>
                        
                    </ControlColumn> */}
                </div>

            </body>
        );
    }
}
 
export default App;