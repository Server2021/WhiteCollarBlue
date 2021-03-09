import React from "react";
import IndustriesBody from "./Components/IndustriesBody";

export const HospitalityPage = () => {
  return (
    <IndustriesBody
      title="Hospitality"
      image={require("../../../assets/industries/Hospitality.jpeg")}
      disciplines={[
        "Hotel Manager",
        "Guest Relations Manager",
        "Event Manager",
        "Chefs / Cooks",
        "Beverage Manager",
        "Concierge",
        "Housekeeper"
      ]}
      applications={[
        "Food and Beverages",
        "Travel",
        "Accommodation",
        "Recreation & Entertainment",
        "Event Planning",
        "Cruise Line",
        "Gaming"
      ]}>
      <p>
        For our clients, WhiteCollarBlue’s team of Hospitality professionals are
        committed to provide you with inspiring talent who have built a strong
        experience base from working within the sector. Our team members are trained
        to adapt their style of service and communication to each event they are
        called to attend. The right result. Every time.
        <br /><br/>
        For our candidates we offer opportunities right across the Hospitality
        sector. In joining the team at WhiteCollarBlue you will be mentored and
        supported by professionals that have worked within the industry and therefore
        are well placed to manage your career path. Opportunities exist to work
        Casual, Fixed Term Contract or be placed into a permanent position.
      </p>
    </IndustriesBody>
  );
};
