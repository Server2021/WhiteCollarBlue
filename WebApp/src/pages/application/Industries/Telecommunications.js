import React from "react";
import IndustriesBody from "./Components/IndustriesBody";

export const TelecommunicationsPage = () => {
  return (
    <IndustriesBody
      title="Telecommunications"
      image={require("../../../assets/industries/Telecommunications.jpeg")}
      disciplines={[
        "Network Systems Analyst",
        "Data Communications Analyst",
        "Data Technicians",
        "Electronic Engineers",
        "Technical Manager",
        "Network Designer",
        "Broadcast Technician"
      ]}
      applications={[
        "Telecoms",
        "NBN",
        "Satellite",
        "Television",
        "Radio Broadcasting",
        "Computer Networking",
        "V.O.I.P"
      ]}>
      <p>
        For our clients the WhiteCollarBlue Telecommunications specialists continue
        to source talented professionals in the ever-evolving telecommunications
        industry. we understand that each business faces its own unique opportunities
        and challenges. Our team pride themselves on building strong business
        relationships which we hold to be the fundamental success of any partnership.
        <br />
        <br />
        For our candidates who are looking to excel in the telecommunications
        industry, our team at WhiteCollarBlue cover a broad range of career
        opportunities across the sector nationwide. Working with our team will ensure
        you are guided in developing a career blueprint aimed at achieving your
        professional career goals.
      </p>
    </IndustriesBody>
  );
};
