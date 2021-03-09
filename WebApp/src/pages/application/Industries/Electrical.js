import React from "react";
import IndustriesBody from "./Components/IndustriesBody";

export const ElectricalPage = () => {
  return (
    <IndustriesBody
      title="Electrical"
      image={require("../../../assets/industries/electrical.png")}
      disciplines={[
        "Electricians",
        "Data Technicians",
        "Electrical Fitters",
        "Electronics Technicians",
        "Leading Hands",
        "Project Managers",
        "Estimators"
      ]}
      applications={[
        "High-Rise Residential",
        "Commercial Construction",
        "Office Fit-Outs",
        "Data & Communications",
        "Fire & Security Installation",
        "Service & Maintenance",
        "Industrial Applications" 
      ]}>
      <p>
        For our clients WhiteCollarBlue inspires confidence as a leading specialist in providing Electrical Talent 
        solutions to the contracting industry and has been a member of Neca for many years. Our electrical specialists’ 
        source & place electrical talent across Australia & New Zealand. We can help you to staff your projects be it one 
        Electrician for a small job or 100 Electricians for a major contract; there is no job too little or too big for WhiteCollarBlue.
        <br/><br/>
        For our candidates we offer a wide range of opportunities across the Domestic, Commercial and Industrial sectors working with 
        both small and large contractors, whatever you need, Casual - Fixed Term Contract or a Permanent position, WhiteCollarBlue 
        can support you. 
      </p>
    </IndustriesBody>
  );
};
