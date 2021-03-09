import React from "react";
import IndustriesBody from "./Components/IndustriesBody";

export const ManufacturingPage = () => {
  return (
    <IndustriesBody
      title="Manufacturing"
      image={require("../../../assets/industries/Manufacturing.jpeg")}
      disciplines={[
        "Production Worker", "Machine Operator", "Assemblers", "Fabricators", "Manufacturing Manager", "Quality engineer"
      ]}
      applications={[
        "Food" , "Paper", "Textile", "Chemical", "Plastics", "Energy"
      ]}>
      <p>
        For our clients, the specialist team at WhiteCollarBlue sourcing and placing great manufacturing talent spend 
        a lot of time to understand your business processes to enable them to source the right manufacturing talent 
        for your organisation. We currently manage a broad base of manufacturing clients across several industries and 
        we understand each workplace is unique and therefore requires different skillsets to optimise your production environment.
        <br/><br/>
        For our candidates we provide a broad range of opportunities within the manufacturing sector across most industries. 
        We have built over time a great understanding of the sector and are experienced in sourcing the right opportunities 
        for all levels within the manufacturing environment. Whether you are looking for something casual or permanent full time 
        – we are looking forward to support you in securing your next role.
      </p>
    </IndustriesBody>
  );
};
