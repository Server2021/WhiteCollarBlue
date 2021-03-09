import React from "react";
import IndustriesBody from "./Components/IndustriesBody";

export const SalesPage = () => {
  return (
    <IndustriesBody
      title="Sales & Marketing"
      image={require("../../../assets/industries/sales.jpeg")}
      disciplines={[
        "Business Development Managers",
        "Account Managers",
        "Sales Managers",
        "Sales Engineers",
        "Digital Marketing Executives",
        "Marketing Managers",
        "Marketing Assistant",
        "Promotions Manager"
      ]}
      applications={[
        "Corporate",
        "FMCG",
        "Banking & Finance",
        "Insurance & Superannuation",
        "Industrial & Manufacturing",
        "Trades & Engineering",
        "Transport & Logistics",
        "Media"
      ]}>
      <p>
      For our clients the sales and marketing specialists at WhiteCollarBlue come from an extensive background within 
      this specialised field. Our dedicated team draw on their established professional networks, database and partnerships 
      to select exceptional sales & marketing talent for casual, contract or permanent roles within all facets of sales & marketing sector.
      <br/><br/>
      For our candidates our sales & marketing specialists customise their approach to your career goals offering flexibility, 
      transparency and consultation, working alongside you as your career plans develop. We invest time in understanding your 
      career aspirations and preferred working environment before considering presenting you with placement options.
      </p>
    </IndustriesBody>
  );
};
