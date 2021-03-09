import React, { Component } from "react";
import PropTypes from 'prop-types';

import "./Hero.scss";
import StyledTitle from "../StyledTitle/StyledTitle";

export default class HeroSection extends Component {
    render() {
        return (
            <section>
                <div className="hero__bg" style={{ backgroundImage: `url(${this.props.backgroundImage})`}}>
                    <div className="container-maxwidth">
                        <div className={
                            `hero__container 
                            ${this.props.leftAlign && " hero__bg--left-align"}
                            ${this.props.withSubMenu && " hero__bg--extra-menu"}`}>
                            <div className="hero__title">
                                <StyledTitle title={this.props.title} light left={this.props.leftAlign ? true : false} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

HeroSection.propTypes = {
    backgroundImage : PropTypes.string,
    leftAlign : PropTypes.bool,
    withSubMenu : PropTypes.bool,
    title : PropTypes.string
}