import React from "react";
import IndustriesBody from "./Components/IndustriesBody";

export const HealthcarePage = () => {
  return (
    <IndustriesBody
      title="Healthcare"
      image={require("../../../assets/industries/healthcare.jpeg")}
      disciplines={[
        "Registered Nurses, Enrolled Nurses & AIN's",
        "Clinical, Facility & Practice Managers",
        "VR / Non VR General Practitioners",
        "Allied Health Professionals - Speech Pathologists, Dieticians, Podiatrists, Psychologists, Radiotherapists, etc.",
        "Medical Administrative Staff",
        "Care Managers",
        "Residential Managers"
      ]}
      applications={[
        "Aged Care",
        "Allied Health",
        "Dental",
        "Medical Imaging",
        "Social Work",
        "Public & Private Hospitals",
        "Mental Health"
      ]}>
      <p>
        For our clients we offer a Healthcare specialist Team at within
        WhiteCollarBlue who have a combined experience of more than 15 years in the
        Healthcare sector both in Acute and Residential care. We understand that
        finding the right Healthcare talent enables you to provide the level of care
        your patients deserve.We offer various solutions such us sick leave cover, casual,
        contract or permanent placements.
        <br /><br/>For Our Healthcare candidates we offer experienced and dedicated
        Healthcare professionals to guide and support your next career move. Whether
        you are interested in casual, fixed term or a permanent placement
        WhiteCollarBlue can offer a national network of Healthcare opportunities
        across all sectors.
      </p>
    </IndustriesBody>
  );
};
