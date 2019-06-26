import React, { Component} from 'react';

import  faculity from './faculity.jpg';




class Faculity extends Component {
    
  render() {
    return (
        <div>
           <div>
         <div><h3 tabIndex="0" class="ui block header">
  Faculity Page
</h3></div>
           <div class="ui segment">

           
  <img class="ui fluid image" tabIndex="0" src={faculity}  alt="faculity of school"/>
  <p tabIndex="0" role="document">aculty noun (ABILITY) ... Even at the age of 100, she still had all her faculties. ... Any opinions in the examples do not represent the opinion of the Cambridge Dictionary editors or of Cambridge University Press or its licensors</p>
  <p tabIndex="0" role="document">The Family Educational Rights and Privacy Act (FERPA) (20 U.S.C. § 1232g; 34 CFR Part 99) is a Federal law that protects the privacy of student education records. For information about FERPA, visit the U.S. Department of Education website here: https://www2.ed.gov/policy/gen/guid/fpco/ferpa/index.html</p>
 
  
</div>

</div>


</div>

    );

     
    
  }

}


export default Faculity;