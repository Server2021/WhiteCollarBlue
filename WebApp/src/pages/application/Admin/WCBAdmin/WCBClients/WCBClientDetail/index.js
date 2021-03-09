import React, {Component} from "react";
import ClientInformation from "./ClientInformation";
import VacancyHistory from "./VacancyHistory";
import ClientRegisteredUsers from "./ClientRegisteredUsers";
import ComingSoon from "../../../../../../components/ComingSoon";

export default class WCBClientDetail extends Component {
  render() {
    return <ComingSoon />;

    return (
      <>
        <div className="admin-container__wrapper">
          <ClientInformation />
        </div>
        <div className="admin-container__wrapper">
          <ClientRegisteredUsers />
        </div>
        <VacancyHistory />
      </>
    );
  }
}
