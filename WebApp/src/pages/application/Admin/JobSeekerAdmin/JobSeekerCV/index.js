import React, {Component} from "react";
import SubtitleWithLine from "../../../../../components/SubtitleWithLine/SubtitleWithLine";
import UserCVs from "../../components/UserCVs";

export default class JobSeekerCV extends Component {
  state = {
    loading: true,
    errored: false,
    error: null,
    cvs: []
  };

  render() {
    return (
      <>
        <SubtitleWithLine title="My CVs" />
        <UserCVs />
      </>
    );
  }
}
