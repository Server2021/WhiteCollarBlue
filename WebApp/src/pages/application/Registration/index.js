import React, {Component} from "react";

import HeroSection from "../../../components/Hero/Hero";
import "../../../components/Hero/Hero.scss";
import BackgroundImage from "../../../assets/bluebg.jpg";
import RegistrationForm from "./Form";
import App from "../../../App";


export default class Registration extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
    App.Current.SetPageName("Register");
  }

  componentWillUnmount() {
    App.Current.SetPageName(null);
  }

  componentWillMount() {
  // this.loadData("https://cors-anywhere.herokuapp.com/https://whitecollarblue.vincere.io/careers");
  // this.loadData("https://whitecollarblue.vincere.io/careers");
  // this.loadData("http://localhost:3000/jobseeker/board");
  this.getGitHubUserWithFetch();
  }

  getGitHubUserWithFetch = async () => {
    const response = await fetch("https://whitecollarblue.vincere.io/careers/");
    console.log('Here is response');
    const finaldata = Promise.resolve(response.text());
    finaldata.then(function(val) { 
      console.log(val);
    }); 
  };

  loadData = (url) => {
      fetch(url, {
        mode: 'cors',
       //  method: "get",
        // credentials: 'include'
        // headers: {
              //"Content-Type": "application/json",
            // "Origin": null
        //}
      }
    )
      .then(function (response) {
        console.log('ABC');
              const finaldata = Promise.resolve(response.text());
              finaldata.then(function(val) { 
                console.log(val);
              }); 
      })
      .then(function (data) {
        console.log('XYZ');
        console.log("data: ", data);
      }.bind(this))
      .catch(function (err) {
        console.log("failed to load ", url, err.stack);
      });
  }

  render() {
    return (
      <>
        {/* 01. hero */}
        <HeroSection backgroundImage={BackgroundImage} title="WCB Registration" />
        {/* 02. body */}
        <section className="body__bg">
          <div className="container-maxwidth body__container">
            {/* article */}
            <article className="body__article body__article--padding">
              <iframe src="https://whitecollarblue.vincere.io/careers/candidate/register" width="1100px" height="1000px"></iframe>
            </article>
          </div>
        </section>
      </>
    );
  }
}
