import React from "react";

import "./LoginAndRegister.scss";
import {Link} from "react-browser-router";
import App from "../../../App";

export default class LoginAndRegister extends React.Component {
  constructor(props) {
    super(props);
    const user = App.Current.CurrentUser;
    this.state = {
      authenticated: user ? true : false,
      admin: user && user.admin
    };

    App.Current.OnLoggedIn(user => {
      this.setState({
        authenticated: true,
        admin: user.admin
      });
    });

    App.Current.OnLoggedOut(() => {
      this.setState({
        authenticated: false,
        admin: false
      });
    });
  }
  
  render() {
  //  if (!this.state.authenticated) {
      return (
        <div className="login-and-register">
          {/* <span onClick={() => App.Current.RequestLogin()}>Login</span>
          <span className="login-and-register__divider">|</span> */}
           <Link to="/login">
            <span>Login</span>
          </Link>
          |
          <Link to="/registration">
            <span>Register</span>
          </Link>
        </div>
      );
    // } else {
    //   return (
    //     <div className="login-and-register">
    //       <span onClick={() => App.Current.Logout()}>Logout</span>
    //       <span className="login-and-register__divider">|</span>
    //       <Link to="/admin">
    //         <span>{this.state.admin ? "Admin" : "My Page"}</span>
    //       </Link>
    //     </div>
    //   );
    // }
  }
}
