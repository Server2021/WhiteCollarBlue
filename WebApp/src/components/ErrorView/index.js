import React, {Component} from "react";
import ErrorImage from "../../assets/error.svg";
import style from "./index.module.scss";

export default class ErrorView extends Component {
  constructor(props) {
    super(props);

    let message = "An Error has occurred";

    switch (parseInt(this.props.errorcode)) {
      case 404:
        message = "Page not Found";
        break;

      case 401:
      case 403:
        message = "You don't have access to this page";
        break;
    }

    this.state = {
      message: message
    };
  }

  render() {
    return (
      <main className={style.container}>
        <img src={ErrorImage} alt="Error" />
        <div>
          {!this.props.message && this.props.errorcode && (
            <h1>{this.props.errorcode}</h1>
          )}
          <h2>{this.props.message || this.state.message}</h2>
        </div>
      </main>
    );
  }
}
