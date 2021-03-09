import React from "react";
import IndustriesBody from "./Components/IndustriesBody";

export const TransportPage = () => {
  return (
    <IndustriesBody
      title="Transport, Logistics & Warehousing"
      image={require("../../../assets/industries/Transport.jpeg")}
      disciplines={[
        "Receiver", "Forklift Operator", "Inventory Controller", "Driver","Shipping Clerk","Customs Officer", "Logistics Manager"
      ]}
      applications={[
        "Road","Rail","Air","Sea","Distribution Centres","Bonded Storage","3PL"
      ]}>
      <p>
        For our customers The logistics team at WhiteCollarBlue understand having the right experienced talent 
        will ensure you deliver the right products to the right location in the most efficient way. WhiteCollarBlue’s 
        expertise and experience in providing flexible staffing options can make the difference between meeting your 
        delivery deadlines or losing valuable productivity. 
        <br/><br/>
        For our candidates you have the comfort knowing that our team of specialists are an authority in the logistics space 
        recruiting professionals for supply chain, warehousing, transport and freight forwarding jobs. We always have a range 
        of exciting roles available.
        <br/><br/>
        We work with a broad range of employers of logistics professionals across Australia and with our career guidance and 
        advice we will help you to fulfil your career potential.
      </p>
    </IndustriesBody>
  );
};
