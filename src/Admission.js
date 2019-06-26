import React, { Component } from 'react';

class Admission extends Component {
        render() {

            return (
                <div>
                <div>
                <div><h2  tabIndex="0" class="ui block header">
                            Admission Form
                </h2></div>
                    </div>
                    <div>
                    <form class="ui form">
                    <div class="field">
                    <label tabIndex="0" style={{ fontSize: '18px' }}>First Name</label>
                    <input  tabIndex="0"type="text" name="first-name" placeholder="First Name" />
                    </div>
                    <div class="field">
                                <label  tabIndex="0"style={{ fontSize: '18px' }}>Last Name</label>
                                <input  tabIndex="0" type="text" name="last-name" placeholder="Last Name" />
                    </div>
                    <div class="field">
                     <div class="ui checkbox">
                    <input type="checkbox" tabindex="0" class="hidden" />
                     <label>I agree to the Terms and Conditions</label>
                     </div>
                     </div>
                     <button tabIndex="0" class="ui button" type="submit">Submit</button>
                      </form>
                   </div>
                </div>
            );
       }
    }
export default Admission;