import React, {Component} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

/** Image */
import clockImg from "../../assets/kb/read-time.svg";
import ThumbExample from "../../assets/kb/card-sample.png";
import videoCircleImg from "../../assets/kb/video-circle.svg";
import newsArticleCircleImg from "../../assets/kb/newsArticles-circle.svg";
import templateCircleImg from "../../assets/kb/templates-circle.svg";
import ebookCircleImg from "../../assets/kb/ebooks-circle.svg";
import BlogPostCircleImg from "../../assets/kb/blogPost-circle.svg";
import infographicCircleImg from "../../assets/kb/infographic-circle.svg";

import "./KBEntry.scss";
import MDPlainTextConverter from "../MDPlainTextConverter";
import App from "../../App";

export default class KBEntry extends Component {
  constructor(props) {
    super(props);
    this.entry = props.entry;
  }

  render() {
    if (!this.entry) {
      return null;
    }

    return (
      <div>
        <Link to={`/knowledgebase/${this.entry.slug}`}>
          <div className="kb-entry__container">
            <img
              src={this.getThumb()}
              alt={this.entry.title}
              className="kb-entry__thumbnail"
            />
            <img
              src={this.getSymbol()}
              alt={this.entry.type}
              className="kb-entry__circle"
            />
            <div className="kb-entry__panelbody">
              <h5>{this.entry.title}</h5>
              {/* <b className="author">{`${this.entry.author.firstname} ${this.entry.author.lastname}`}</b> */}
              <p>
                <MDPlainTextConverter content={this.entry.summary} />
              </p>

              <div className="kb-entry__panelbody-bottom">
                {this.entry.readtime && (
                  <div className="readtime">
                    <img src={clockImg} alt="read time" />
                    <span>{this.entry.readtime} min read</span>
                  </div>
                )}
                {this.entry.type == "article" && this.entry.articleSource && (
                  <p>{this.entry.articleSource}</p>
                )}
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }

  getThumb() {
    return App.Current.API.KnowledgeBase.GetThumbUrl(this.entry.slug);
  }

  getSymbol() {
    switch (this.entry.type) {
      case "video":
        return videoCircleImg;

      case "article":
        return newsArticleCircleImg;

      case "template":
        return templateCircleImg;

      case "infographic":
        return infographicCircleImg;

      case "ebook":
        return ebookCircleImg;

      case "blogpost":
        return BlogPostCircleImg;

      default:
        return null;
    }
  }
}

KBEntry.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string
};
