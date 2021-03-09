import React from "react";
import IndustriesBody from "./Components/IndustriesBody";

export const FinancialPage = () => {
  return (
    <IndustriesBody
      title="Financial"
      image={require("../../../assets/industries/Financial.jpeg")}
      disciplines={[
        "Accounts Payable/Receivable",
        "Credit Control",
        "Payroll Officer",
        "Accountants",
        "Auditors",
        "Bookkeepers",
        "Procurement Manager"
      ]}
      applications={[
        "Accounting",
        "Auditing",
        "Payroll",
        "Banking",
        "Credit",
        "Finance",
        "Purchasing"
      ]}>
      <p>
        For our clients our specialists have strong industry-wide knowledge, ensuring that we deliver tailored People 
        Solutions that accurately meet your needs with a key focus on improving both your profitability and productivity. 
        Whether you are looking for, casual, contract or permanent staff we can source high-calibre finance professionals 
        with the experience you desire to deliver real outcomes for your organisation.
        <br/><br/>
        For our candidates the finance team at WhiteCollarBlue offer extensive industry knowledge and experience, 
        and therefore are well placed to offer a personalised and professional approach to your Financial career 
        aspirations. If you are looking for more of the same or a change of pace in a different sector of finance – 
        you have come to the right place.
      </p>
    </IndustriesBody>
  );
};
