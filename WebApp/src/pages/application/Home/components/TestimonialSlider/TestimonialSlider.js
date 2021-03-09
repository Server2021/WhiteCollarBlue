import React, { Component } from "react";
import Slider from "react-slick";
import SliderCard from "./sliderCard";
import NextArrowImg from "../../../../../assets/icons/arrow-right--yellow.svg";
import './TestimonialSlider.scss';
import testimonials from "./sliderData.js";


const SliderArrowPrev = ({className, to, onClick}) => (
  <button type="button" onClick={onClick} className={`button button--text button--icon ${className}`} aria-label={to}>
    <img src={NextArrowImg} alt="arrow" className="icon-horizontal-flipped"/>
  </button>
)

const SliderArrowNext = ({className, to, onClick}) => (
  <button type="button" onClick={onClick} className={`button button--text button--icon ${className}`} aria-label={to}>
    <img src={NextArrowImg} alt="arrow" />
  </button>
)

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  prevArrow: <SliderArrowPrev to="prev" />,
  nextArrow: <SliderArrowNext to="next" />,
  responsive: [
    {
      breakpoint: 1024,
      // variableWidth: true,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      arrows: false,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      arrows: false,
      variableHeight: true,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

export default class TestimonialSlider extends Component {

  state = {
    height: 0
  }

  componentDidMount() {
      setTimeout( 
        () => { 
          let newHeight = document.getElementsByClassName('slidercomponent').clientHeight;
          this.setState({ height : newHeight })
          console.log(document.getElementsByClassName('slidercomponent').clientHeight);
        }, 1000
    )
  }

   SliderList = (props) =>{
    const sliderlistNames = props.sliderlistName;
    const sliderCards = sliderlistNames.map((sliderlist, i) =>
      <SliderCard key={i}
        profile={sliderlist.image}
        name={sliderlist.name}
        companyName={sliderlist.companyName}
        text={sliderlist.text}
        className="slidercomponent"
      />
    );
    return (
      <Slider {...settings} >
        {sliderCards}
      </Slider>
    );
  }

  render() {

    return (
      <><this.SliderList sliderlistName={testimonials} /></>
    );
  }
}