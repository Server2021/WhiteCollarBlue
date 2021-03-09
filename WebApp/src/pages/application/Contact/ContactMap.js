import React, {Component} from "react";
import "./style.scss";

export default class ContactMap extends Component {
  static defaultProps = {
    center: {
      lat: -33.81946,
      lng: 151.00572
    },
    zoom: 14
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="contact__map">
        <iframe
          src={this.props.mapUrl}
          title=""
          width="600"
          height="300"
          frameBorder="0"
          style={{border: 0}}></iframe>
      </div>
    );
  }
}
