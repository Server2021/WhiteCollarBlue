import React from "react";
import IndustriesBody from "./Components/IndustriesBody";

export const ITPage = () => {
  return (
    <IndustriesBody
      title="Information Technology"
      image={require("../../../assets/industries/IT.jpeg")}
      disciplines={[
        "Developers",
        "Programmers",
        "Solution and Application Architects",
        "Network Engineers",
        "Data Architect",
        "Hardware Engineers",
        "Network Administrators"
      ]}
      applications={[
        "System Design",
        "Engineering",
        "Business Analysis",
        "Software Engineering",
        "Applications Development",
        "Web development",
        "Computer programming"
      ]}>
      <p>
        For our clients, WhiteCollarBlue offers information technology specialists
        who understand the complexities of sourcing and selecting the right skill set
        for the right application. Whether you are looking for casual, fixed term
        contractors or permanent technical staff WhiteCollarBlue can offer access to
        a broad range of technology professionals locally or across Australia.
        <br />
        <br />
        For our candidates the team of I.T professionals at WhiteCollarBlue are
        equipped to assist you in navigating your career pathway. Whatever your ideal
        next role is, our job is to appreciate your ambitions whilst assessing your
        technical competencies so we may place you in a well-matched environment
        allowing you to grow and achieve your professional goals.
      </p>
    </IndustriesBody>
  );
};
