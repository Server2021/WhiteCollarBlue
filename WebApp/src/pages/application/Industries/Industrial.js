import React from "react";
import IndustriesBody from "./Components/IndustriesBody";

export const IndustrialPage = () => {
  return (
    <IndustriesBody
      title="Light Industrial"
      image={require("../../../assets/industries/industrial.jpeg")}
      disciplines={[
        "Forklift Drivers",
        "Truck Drivers",
        "Store - Pick Packers",
        "Labourers",
        "Machine Operators",
        "Factory Workers",
        "Production Workers"
      ]}
      applications={[
        "Warehouse", "Production", "Distribution", "Manufacturing", "Transport & Logistics", "Engineering", "Construction",
      ]}
    >
      <p>
        For our clients WhiteCollarBlue's industrial division specialises in providing casual, fixed term contract and permanent 
        industrial talent solutions to all sectors. Whether you are looking for a last-minute temporary worker or a long-term employee, 
        our aim is to find the most suitable and experienced candidate for your specific need. WhiteCollarBlue Industrial provides 
        a 24/7 service, giving you the reassurance and reliability to successfully manage and grow your business with a flexible workforce.
        <br/><br/>
        For our candidates we offer flexibility in working options with a wide range of work opportunities due to our diverse customer base. 
        We operate in most sectors of the industrial market and so can offer you a transition from one sector to another dependant on your 
        level of skills and experience.
      </p>
    </IndustriesBody>
  );
};
