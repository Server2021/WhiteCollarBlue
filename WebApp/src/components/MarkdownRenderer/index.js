import React from "react";
import ReactMarkdown from "react-markdown";
import styles from "./MarkdownRenderer.module.scss";

export default class MarkdownRenderer extends React.Component {
  render() {
    return (
      <div className={styles.renderer}>
        <ReactMarkdown source={this.props.content} />
      </div>
    );
  }
}
