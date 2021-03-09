import React from "react";
import IndustriesBody from "./Components/IndustriesBody";

export const BusinessSupportPage = () => {
  return (
    <IndustriesBody
      title="Business Support"
      image={require("../../../assets/industries/BusinessSupport.jpeg")}
      disciplines={[
        "Receptionists",
        "Data Entry Operations",
        "Administrators",
        "Personal & Executive Assistants",
        "Customer Service Representatives",
        "Call Centre operators",
        "Office Manager"
      ]}
      applications={[
        "Corporate",
        "FMCG",
        "Banking & Finance",
        "Insurance & Superannuation",
        "Industrial & Manufacturing",
        "Trades & Engineering",
        "Transport & Logistics"
      ]}>
      <p>
        For our client the Business Support team at WhiteCollarBlue understand the need for exceptional office support 
        staff that can bring the difference to your teams’ productivity and bottom-line results. From understanding your 
        requirements to understanding your business and cultural needs, the team at WhiteCollarBlue come with an extensive 
        background within the business environment.
        <br/><br/>
        For our candidates the specialist Business Support team at WhiteCollarBlue understand the challenges faced when 
        sourcing the right fit across the broad range of industries as well as team environments. When evaluation current 
        open opportunities, the team focus on matching your work preferences with career goals. Collaborating with the 
        Business Support team will ensure we reach your desired outcome.     
      </p>
    </IndustriesBody>
  );
};
