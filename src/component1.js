import React, { Component} from 'react';
import {Link } from 'react-router-dom';
import Home from './home';
class Component1 extends Component {

    state = { ShowMe:true }
    
opertion=()=>{
    this.setState({
        ShowMe:!this.state.ShowMe
    })
}
  render() {
    return (
        <div>
            <div> <button onClick={()=>this.opertion()}><b> HOME </b></button> </div>

            <div>{this.state.ShowMe?
            <div>
                <Home/>
            </div>
            :null
            } </div>
</div>
    );
  }
}
export default Component1;