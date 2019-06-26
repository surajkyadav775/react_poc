import React, { Component} from 'react';
import student from  './student.jpg';


class Student extends Component {
    
  render() {
    return (
        <div>
            <div><h3 tabIndex="0" class="ui block header">
  Student Page
</h3></div>
<div class="ui segment">      
<img  tabIndex="0" class="ui fluid image" src={student} alt="Walking student Pic"/>
<p  role="document">The Student Essay Writing Center provides you with help and advice in an easy-to-read and understandable format. Essay writing can be difficult, but it doesn't have to be. This resource is designed to make essay writing doable – even fun and exciting! Here you will learn how to brainstorm, write, structure, and revise your essay so that you can stand out from your peers..</p>
<p role="document">There are many different types of essay writing and, depending on what you are writing for, the format and approach can change. We’ve designed our Essay Writing Center to provide you with key tips and pointers so that you can get started in the right direction – no matter if your essay is designed to persuade the college admissions team that you’re the right candidate, if you are making your case to win a scholarship,
 or simply if you are looking for help with your homework.</p>
</div>
</div>
    ); 
  }

}
export default Student;