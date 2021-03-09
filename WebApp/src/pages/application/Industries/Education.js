import React from "react";
import IndustriesBody from "./Components/IndustriesBody";

export const EducationPage = () => {
  return (
    <IndustriesBody
      title="Education"
      image={require("../../../assets/industries/Education.jpeg")}
      disciplines={[
        "Cert Three Carers", 
        "Diploma Qualified Carers", 
        "Early Childhood Teachers", 
        "Directors", 
        "OOSH Assistants", 
        "Nanny’s"
      ]}
      applications={[
        "Before School Care", 
        "Long Day Care", 
        "Pre-Schools", 
        "Vacation Care", 
        "Nanny Services", 
        "Family Centres"
      ]}>
      <p>
        For our clients we recruit for long day care centres, pre-schools, vacation programs and out of school hours 
        care for roles including Certificate three, Diploma Qualified, Early Childhood Teachers, Area Managers, and 
        Senior Leadership jobs. We understand that finding the right teaching staff will build a brighter future for the children.
        <br/><br/>
        For our candidates we offer flexibility in casual assignments as well as permanent career options with some of our larger 
        client environments. Our specialist from the early childhood sector can guide your career in achieving the outcomes you 
        seek as well as the opportunity to pick up new skills and experience. We are passionate about finding exceptional educators 
        as you are the teachers of our future leaders.
      </p>
    </IndustriesBody>
  );
};
