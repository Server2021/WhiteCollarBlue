import React, {Component} from "react";
import {Link} from "react-router-dom";
import SubtitleWithLine from "../../../../../components/SubtitleWithLine/SubtitleWithLine";
import {Table} from "semantic-ui-react";
import ComingSoon from "../../../../../components/ComingSoon";

const TableData = [
  {
    name: "Debra Chase",
    companyName: "Toolbox",
    role: "CEO",
    phoneNo: "+6423432432",
    email: "asdfadadsfafsdsf@gmail.com",
    dateRegistered: "04/09/2018"
  },
  {
    name: "Debra Chase",
    companyName: "Toolbox",
    role: "CEO",
    phoneNo: "+6423432432",
    email: "asdfadadsfafsdsf@gmail.com",
    dateRegistered: "04/09/2018"
  },
  {
    name: "Debra Chase",
    companyName: "Toolbox",
    role: "CEO",
    phoneNo: "+6423432432",
    email: "asdfadadsfafsdsf@gmail.com",
    dateRegistered: "04/09/2018"
  },
  {
    name: "Debra Chase",
    companyName: "Toolbox",
    role: "CEO",
    phoneNo: "+6423432432",
    email: "asdfadadsfafsdsf@gmail.com",
    dateRegistered: "04/09/2018"
  },
  {
    name: "Debra Chase",
    companyName: "Toolbox",
    role: "CEO",
    phoneNo: "+6423432432",
    email: "asdfadadsfafsdsf@gmail.com",
    dateRegistered: "04/09/2018"
  },
  {
    name: "Debra Chase",
    companyName: "Toolbox",
    role: "CEO",
    phoneNo: "+6423432432",
    email: "asdfadadsfafsdsf@gmail.com",
    dateRegistered: "04/09/2018"
  }
];

export default class WCBClientContact extends Component {
  render() {
    return (
      <>
        <SubtitleWithLine title="Client Contact" />
        <div className="admin-container">
          <div className="admin-table__wrapper">
            <Table unstackable celled striped selectable className="admin-table">
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>Company Name</Table.HeaderCell>
                  <Table.HeaderCell>Role</Table.HeaderCell>
                  <Table.HeaderCell>Phone Number</Table.HeaderCell>
                  <Table.HeaderCell>Email</Table.HeaderCell>
                  <Table.HeaderCell>Date Registered</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {[].map((item, index) => (
                  <Table.Row key={index}>
                    <Table.Cell>
                      <Link to={`/admin/clientcontact/${item.name}`}>
                        {item.name}
                      </Link>
                    </Table.Cell>
                    <Table.Cell>{item.companyName}</Table.Cell>
                    <Table.Cell>{item.role}</Table.Cell>
                    <Table.Cell>{item.phoneNo}</Table.Cell>
                    <Table.Cell>{item.email}</Table.Cell>
                    <Table.Cell>{item.dateRegistered}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
            <ComingSoon />
          </div>
        </div>
      </>
    );
  }
}
