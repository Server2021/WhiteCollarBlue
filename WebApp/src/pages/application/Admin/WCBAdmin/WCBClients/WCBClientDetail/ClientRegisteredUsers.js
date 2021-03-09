import React, { Component } from "react";
import SubtitleWithLine from "../../../../../../components/SubtitleWithLine/SubtitleWithLine";
import { Table } from 'semantic-ui-react';

const TableData = [
  { name: "Wayne", phoneNo:"+6423432432", email:"wayn2@gmail.com", role: "Director" },
  { name: "Jeongyun Won", phoneNo:"+6423432432", email:"jdasf@gmail.com", role: "Manager" },
]

export default class ClientRegisteredUsers extends Component {
  render() {
    return (
      <>
        <SubtitleWithLine 
          title="Client Registered Users" 
          tooltip="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <div className="admin-container">
          <div className="admin-table__wrapper">
            <Table unstackable celled striped selectable className="admin-table">
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>Phone Number</Table.HeaderCell>
                  <Table.HeaderCell>Email</Table.HeaderCell>
                  <Table.HeaderCell>Role</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>

                {TableData.map((item, index) => (
                    <Table.Row key={index}>
                        <Table.Cell>{item.name}</Table.Cell>
                        <Table.Cell>{item.phoneNo}</Table.Cell>
                        <Table.Cell>{item.email}</Table.Cell>
                        <Table.Cell>{item.role}</Table.Cell>
                    </Table.Row>
                ))}

              </Table.Body>
            </Table>
          </div>

        </div>
      </>
    );
  }
}
