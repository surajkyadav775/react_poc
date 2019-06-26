import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Home from './home';
import Admission from './Admission';
import Faculity from './faculity';
import {Router, Route,Link} from 'react-router-dom'; 
import history from './history';
import Student from './student';
import Crud from './crud';

class Welcome extends React.Component {
    render() {
        return (
          <div>

<div>
<Router history={history}> 
     <div >
  <div>
  <div class="split left">
  <div class="">
<div class="ui huge header">    
  <div  style={{fontSize : '45px'}} className="ui block header">
    <Link to="/" className="item" role="button"> <b  > Home </b></Link></div></div>
    <div class="ui relaxed divided list">
  <div class="item">
    <i class="large github middle aligned icon"></i>
    <div class="content">
      <div class="sub header">    
        
          <Link to="/Faculity" className="item" role="button"> <b class="sub header" style={{fontSize : '20px'}} > faculity </b></Link>
          </div>
      <div class="description">Updated 10 mins ago</div>
    </div>
  </div>
  <div class="item">
    <i class="large github middle aligned icon"></i>
    <div class="content">
    <div class="header">     
     
       <Link to="/Admission" className="item" role="button"> <b class="sub header"  style={{fontSize : '20px'}}> Admission </b></Link>
       </div>
      <div class="description">Updated 22 mins ago</div>
    </div>
  </div>
  <div class="item">
    <i class="large github middle aligned icon"></i>
    <div class="content">
    <div class="header">     
     
       <Link to="/Student" className="item" role="button"> <b class="sub header"  style={{fontSize : '20px'}}> Student </b></Link>
       </div>
      <div class="description">Updated 34 mins ago</div>
    </div>
  </div>
  <div class="item">
    <i class="large github middle aligned icon"></i>
    <div class="content">
    <div class="header">     
     
       <Link to="/crud" className="item" role="button"> <b class="sub header"  style={{fontSize : '20px'}}> Crud </b></Link>
       </div>
      <div class="description">Updated 34 mins ago</div>
    </div>
  </div>
</div> 
</div>
</div>

<div >
  
  <div class="centered">
    
    

  <div>
  <Route path="/" exact component={Home}/>
     <Route path="/Faculity" exact component={Faculity}/>
     <Route path="/Admission" exact  component={Admission}/>  
     <Route path="/Student" exact  component={Student}/>  
     <Route path="/crud" exact  component={Crud}/>  
    
  </div>
    
  
  </div>

  
  


  </div>
  </div>
     </div>   
  </Router>
</div>
           
          </div>
          
        );
      }
  
}




  //  app component written in JSX ,gets converted in JAVASCRIPT with the help of Babel, ES2015

//Take  the react component and show it on the screen
ReactDOM.render(
<Welcome />, //html or jsx tag
document.querySelector('#root')  //reference to a DOM element that exists in HTML file.
);
