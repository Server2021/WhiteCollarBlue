import React, {Component} from "react";
import {YellowLine} from "../../../../components/StyledTitle/StyledTitle";
import "./style.scss";
import App from "../../../../App";

export default class IndustriesBody extends Component {
  componentDidMount() {
    App.Current.SetPageName(this.props.title);
  }

  componentWillUnmount() {
    App.Current.SetPageName(null);
  }

  render() {
    return (
      <>
        <div className="industries-page__wrapper">
          <div className="container-maxwidth">
            <div className="industries-page__intro">
              <div>
                <img src={this.props.image} alt={this.props.title} />
              </div>

              <div className="industries-page__intro-right">
                <div className="industries-page__intro-title">
                  <h3>{this.props.title}</h3>
                  <YellowLine />
                </div>
                <p className="industries-page__intro-paragraph">
                  {this.props.children}
                </p>
              </div>
            </div>
            <div className="industries-page__body">
              <div className="industries-page__body__column">
                <div>
                  <h4>Disciplines</h4>
                  <YellowLine />
                </div>
                <div>
                  <ul>
                    {this.props.disciplines.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="industries-page__body__column">
                <div>
                  <h4>Applications</h4>
                  <YellowLine />
                </div>
                <div>
                  <ul>
                    {this.props.applications &&
                      this.props.applications.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
