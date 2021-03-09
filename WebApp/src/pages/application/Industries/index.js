import React from "react";
import App from "../../../App";

export default class IndustriesPage extends React.Component {
  render() {
    return (
      <div className="industries-article--main">
        <div className="container-maxwidth">
          <div className="industries-page__main">
            <h2>
              We can help with <br /> <b>lots of different industries</b>
            </h2>
            <p>
              WhiteCollarBlue provides HR Solutions including Talent Solutions to a
              wide range of industries. We pride ourselves in delivering excellence
              though hiring the best Talent specialist experienced in each and every
              field we provide solutions for, thereby giving you the confidence that
              the team at WhiteCollarBlue understand your business and its HR
              challenges so we can continue to add value as our partnership
              strengthens.
              <br />
              <br />
              There are too many industries to list yet none that we can't deliver
              solutions for, as whitecollarblue has well over 50 years experience
              within it's team tailoring talent solutions to businesses of all sizes
              across a broad range of industries.
            </p>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    App.Current.SetPageName("Industries");
  }

  componentWillUnmount() {
    App.Current.SetPageName(null);
  }
}
