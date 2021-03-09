import React from "react";
import IndustriesBody from "./Components/IndustriesBody";

export const PharmaceuticalPage = () => {
  return (
    <IndustriesBody
      title="Pharmaceutical"
      image={require("../../../assets/industries/Pharmaceutical.jpeg")}
      disciplines={[
        "Sales Executive", 
        "Laboratory Analyst", 
        "Quality Manager", 
        "R&D Manager", 
        "Production Chemist", 
        "Production Operators"
      ]}
      applications={[
        "Drug Manufacturers", 
        "Research & Development", 
        "Sales & Marketing", 
        "Quality Assurance", 
        "Operations", 
        "Clinical Research"
      ]}>
      <p>
        For our clients, the team at WhiteCollarBlue look forward to supporting your growth and productivity goals through sourcing, 
        shortlisting and placing only the best talent from the industry within your organisation. We look forward to supporting your 
        temporary staffing needs for those times when you need headcount flexibility right through to permanent placements to help 
        build your teams.
        <br/><br/>
        For our candidates we realise you have your own goals and aspirations and see our role in guiding you and supporting you in 
        finding the right role that will establish a pathway to the career in pharmaceuticals that you are looking for. Taking the 
        stress and uncertainty out of the job search process allows you a transition into your ideal career start with a minimum of 
        fuss supported by our team that have the experience and proven results across the sector.
      </p>
    </IndustriesBody>
  );
};
