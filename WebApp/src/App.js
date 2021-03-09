import React, {Component} from "react";
import {createBrowserHistory} from "history";
import WhiteCollarBlueAPI from "./Services/api/WhiteCollarBlueAPI";

import "./styles/style.scss";
import Layout from "./layouts/components/Layout/layout";

import {MuiThemeProvider} from "@material-ui/core/styles";
import {createMuiTheme} from "@material-ui/core/styles";

import {Router, Route, Switch} from "react-router-dom";

import Home from "./pages/application/Home";
import AboutUs from "./pages/application/About";
import Registration from "./pages/application/Registration";
import Login from "./pages/application/Login";
import SetPassword from "./pages/application/SetPassword";
import Sitemap from "./pages/application/Sitemap";
import PrivacyPolicy from "./pages/application/PrivacyPolicy";
import TermsOfUse from "./pages/application/TermsOfUse";
import IndustriesLayout from "./layouts/Industries/IndustriesLayout";
import JobSeekerLayout from "./layouts/JobSeeker/JobSeekerLayout";
import EmployerLayout from "./layouts/Employer/EmployerLayout";
import ContactLayout from "./layouts/Contact/ContactLayout";
import AdminLayout from "./layouts/Admin/AdminLayout";
import {Metadata} from "./Utilities";
import GenericModal from "./components/GenericModal";
import SuccessModal from "./components/SuccessModal/SuccessModal";
import FWBModal from "./components/FWB/FWBModal";

// Extend Formsy
import {ExtendFormsy} from "./Utilities/formsyExtensions";
import LoginModal from "./components/Login/LoginModal";
import ForgotPasswordModal from "./components/Login/ForgotPasswordModal";
import ErrorView from "./components/ErrorView";
ExtendFormsy();

const theme = createMuiTheme({
  typography: {
    // Use 'Lato' instead of the default Material Design font(Roboto).
    fontFamily: ['"Lato"', '"Helvetica"', "sans-serif"].join(","),
    fontSize: 16
  },
  palette: {
    primary: {
      light: "#F7F9FA",
      main: "#0D56A4",
      dark: "#0c4d92"
    },
    // error: '#912D2B',
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2
  }
});

export default class App extends Component {
  constructor() {
    super();
    App.Current = this;

    /**
     * The API for this Application
     * @typedef {WhiteCollarBlueAPI}
     * */
    this.API = new WhiteCollarBlueAPI();

    /**
     * App Info Metadata.
     */
    this.Info = this.API.Metadata.GetMetadata();

    // Create browser history to use in the Redux store
    const base = document.getElementsByTagName("base")[0];
    const baseUrl = base ? base.getAttribute("href") : "/";
    this.history = createBrowserHistory({basename: baseUrl});

    // Callback Storage.
    this._LoggedInCallbacks = [];
    this._LogoutCallbacks = [];

    // Check/Prefill login metadata.
    Promise.resolve(this.Info).then(info => {
      Metadata("signedIn", info.signedIn);
      if (info.signedIn) {
        Metadata("admin", info.admin);
        Metadata("email", info.email);
        Metadata("firstname", info.firstname);
        Metadata("lastname", info.lastname);
        Metadata("phone", info.phone);
        Metadata("registered", info.registered);
        Metadata("type", info.type);

        this.LoginSuccessful();
      } else {
        // Trigger Logged Out State.
        this.TriggerLogoutState();
      }
    });
  }

  /**
   * @type {App}
   **/
  static Current;

  /**
   * Get the current User
   *
   * @returns {User}
   **/
  get CurrentUser() {
    return this.API.CurrentUser;
  }

  get UserFormData() {
    const user = this.CurrentUser;
    if (user) {
      user.surname = user.lastname;
      return user;
    }
    return null;
  }

  /**
   * Sets the Name of the Page.
   * @param {*} name
   */
  SetPageName(name = null) {
    let title = "White Collar Blue";
    if (name) {
      title = name + " | " + title;
    }
    document.title = title;
  }

  /**
   * Pops an Alert for the Application, styled like an App Message.
   * @param {*} title The Title of the Modal.
   * @param {*} message The Message of the Modal.
   */
  Alert(title, message) {
    this.refs.alertModal.open(title, message);
  }

  /**
   * Pops a Success Modal for the Application.
   * @param {*} message Message for the Alert.
   * @param {*} title Title for the Alert.
   * @param {*} redirect Redirect, if redirecting, otherwise null.
   */
  AlertSuccess(message = null, title = "Success!", redirect = null) {
    this.refs.successModal.open(message, title, redirect);
  }

  /**
   * Navigates the router to the provided page.
   *
   * @param {string} page Page to Navigate to
   */
  Navigate(page) {
    this.history.push(page);
  }

  /**
   * Redirects the router to the provided page.
   *
   * @param {string} page Page to Redirect to
   */
  Redirect(page) {
    this.history.replace(page);
  }

  /**
   * Request Sign Up.
   */
  RequestSignUp() {
    this.Navigate("/registration");
  }

  /**
   * Request Login.
   */
  RequestLogin() {
    this.refs.loginModal.open();
   // this.Navigate("/login");
  }

  /**
   * Request Login.
   */
  RequestForgotPassword() {
    this.refs.forgotModal.open();
  }

  /**
   * Login Successed.
   */
  LoginSuccessful() {
    this._LoggedInCallbacks.forEach(callback => {
      try {
        callback(this.CurrentUser);
      } catch (e) {}
    });
  }

  /**
   * On Logged In Callback.
   * @param {*} callback
   */
  OnLoggedIn(callback) {
    this._LoggedInCallbacks.push(callback);
  }

  /**
   * On Logged Out Callback.
   * @param {*} callback
   */
  OnLoggedOut(callback) {
    this._LogoutCallbacks.push(callback);
  }

  /**
   * Logout User and go back to Login Page.
   */
  async Logout() {
    await this.API.Authentication.logout();
    this.TriggerLogoutState();
  }

  TriggerLogoutState() {
    this._LogoutCallbacks.forEach(callback => {
      try {
        callback();
      } catch (e) {}
    });
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router history={this.history}>
          <Layout>
            <GenericModal ref="alertModal" yesLabelName="OK" />
            <SuccessModal ref="successModal" />
            <LoginModal ref="loginModal" />
            <ForgotPasswordModal ref="forgotModal" />
            <FWBModal />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={AboutUs} />
              <Route path="/sitemap" component={Sitemap} />
              <Route path="/privacypolicy" component={PrivacyPolicy} />
              <Route path="/termsofuse" component={TermsOfUse} />

              {/* Layouts */}
              <Route path="/jobseeker" component={JobSeekerLayout} />
              <Route path="/employer" component={EmployerLayout} />
              <Route path="/industries" component={IndustriesLayout} />
              <Route path="/contact" component={ContactLayout} />
              <Route path="/admin" component={AdminLayout} />

              {/* Auth Pages. */}
              <Route path="/registration" component={Registration} />
              <Route path="/login" component={Login} />
              <Route path="/setpassword" component={SetPassword} />

              {/* Not Found */}
              <Route
                exact
                path="*"
                render={props => <ErrorView {...props} errorcode="404" />}
              />
            </Switch>
          </Layout>
        </Router>
      </MuiThemeProvider>
    );
  }
}
