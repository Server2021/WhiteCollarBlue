import React from "react";
import ReactMarkdown from "react-markdown";

export default class MDPlainTextConverter extends React.Component {
  render() {
    return (
      <ReactMarkdown
        source={this.props.content}
        allowedTypes={["text"]}
        unwrapDisallowed={true}
      />
    );
  }
}
