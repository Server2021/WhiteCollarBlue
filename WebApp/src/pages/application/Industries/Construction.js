import React from "react";
import IndustriesBody from "./Components/IndustriesBody";

export const ConstructionPage = () => {
  return (
    <IndustriesBody
      title="Construction"
      image={require("../../../assets/industries/Construction.jpeg")}
      disciplines={[
        "Architect", 
        "Project Manager", 
        "Quantity Surveyor",
        "Structural Engineer", 
        "Site Manager", 
        "Safety Manager"
      ]}
      applications={[
        "Residential", 
        "Commercial", 
        "Industrial", 
        "Civil", 
        "Environmental", 
        "Engineering"
      ]}>
      <p>
        For our clients you will have the support of our Trades team at WhiteCollarBlue who have built a solid 
        understanding and reputation working with a broad range of clients from small trade businesses to tier 
        one contractors over the past 20 years. We place professionals throughout the sector from skilled labour 
        through to management level positions.
        <br/><br/>
        For our candidates, our team of trades professionals will support your career aspirations within the 
        construction industry through providing a diverse range of career opportunities with a broad range of 
        potential employers large and small. From casual and contract roles through to permanent positions the 
        team at whitecollarblue will guide you in making the right choice.
      </p>
    </IndustriesBody>
  );
};
