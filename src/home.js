import React, { Component} from 'react';
import  School from './school.jpg';

class Home extends Component {
  render() {
    return (
        <div>
         <div><h3  tabIndex="0" class="ui block header">
  School Home Page
</h3 ></div>
           <div class="ui segment">
  <img class="ui fluid image" src={School} tabIndex="0" alt="Pic of School"/>
  <div id="InfoText" role="document" tabindex="0">
  <p    role="document">Wilson High School strives to build a safe, supportive, and welcoming community of dedicated and
self-reflective learners, equipped to joyfully embrace opportunities for growth on the path of active
citizenship. We make decisions based on student learning.</p>
  <p role="document">The Family Educational Rights and Privacy Act (FERPA)
    (20 U.S.C. § 1232g; 34 CFR Part 99) is a Federal law that protects 
     the privacy of student education records. For information about FERPA,
     visit the U.S. Department of Education website
     here: https://www2.ed.gov/policy/gen/guid/fpco/ferpa/index.html</p>
     </div>
</div>
</div>
    );
  }

}


export default Home;