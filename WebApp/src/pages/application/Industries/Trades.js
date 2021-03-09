import React from "react";
import IndustriesBody from "./Components/IndustriesBody";

export const TradesPage = () => {
  return (
    <IndustriesBody
      title="Trades & Infrastructure"
      image={require("../../../assets/industries/Trades.jpeg")}
      disciplines={[
        "Civil Engineers",
        "Electrical Engineers",
        "Drilling Engineers",
        "Heavy Vehicle Mechanics",
        "Telecommunications Technicians",
        "Surveyor's",
        "Project Managers",
        "Marine Technician"
      ]}
      applications={[
        "Oil & Gas",
        "Mining",
        "Utilities",
        "Civil Engineering",
        "Transport",
        "Telecommunications",
        "Marine",
        "Renewable Energy"
      ]}>
      <p>
        For our clients due to the high-cost investment associated with Trades & Infrastructure projects our team of experience 
        professionals realise how critical finding the right skills and experience is when looking for specific talent to join your team. 
        Whether the project is short or long term, the infrastructure specialists at WhiteCollarBlue have developed extensive networks 
        in which to source the right talent to support your next project.
        <br/><br/>
        For our candidates with the ever-changing landscape surrounding major infrastructure development, you need a trade specialist 
        that can provide you the variety and challenging opportunities that exist across all sectors giving you exposure to picking 
        up new skills, tickets and specialisation.
      </p>
    </IndustriesBody>
  );
};
