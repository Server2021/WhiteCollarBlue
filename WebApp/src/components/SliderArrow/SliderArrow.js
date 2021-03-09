import React from "react";
import NextArrowImg from "../../assets/icons/arrow-right.svg";
import './SliderArrow.scss';


export const SliderArrowPrev = ({ className, to, onClick }) => (
    <button type="button" onClick={onClick} className={`button button--text button--icon ${className}`} aria-label={to}>
        <img src={NextArrowImg} alt="arrow" className="icon-horizontal-flipped"/>
    </button>
)

export const SliderArrowNext = ({ className, to, onClick }) => (
    <button type="button" onClick={onClick} className={`button button--text button--icon ${className}`} aria-label={to}>
        <img src={NextArrowImg} alt="arrow" />
    </button>
)
