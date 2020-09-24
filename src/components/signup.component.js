import React, { Component } from "react";
import FacebookLoginBtn from 'react-facebook-login';

export default class SignUp extends Component {
    state= {
        auth: false,
        name: '',
        picture:''
    }

     responseFacebook = (response) => {
        console.log(response);
      }
     componentClicked= () => {
        console.log('fb button clicked');
    }

    render() {
       
                let facebookData;

                this.state.auth?
                facebookData = (
                    <div>
                        Hi!
                        </div>
                ) :
                    facebookData = (
                    <FacebookLoginBtn
                    appId= "2852438368320447"
                    autoLoad={true}
                    fields="name,picture"
                    onClick={this.componentClicked}
                    callback={this.responseFacebook} />

                );
                    
               
                return (

                <form>      
                <h3>Sign Up</h3>
                
                <div>
                    {facebookData}
                 </div>

                <div className="form-group">
                                       
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                   
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="sign-in">sign in?</a>
                </p>
            </form>
        );
    }
}
