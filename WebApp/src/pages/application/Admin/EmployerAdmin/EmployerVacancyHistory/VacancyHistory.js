import React, { Component } from "react";
import { Link } from "react-router-dom";
import SubtitleWithLine from "../../../../../components/SubtitleWithLine/SubtitleWithLine";
import { Table } from 'semantic-ui-react';

const TableData = [
  { jobID: 932039, jobTitle: "Problem Solver", personSubmitted: "William Bradley", dateSubmitted: "03/06/2019", status:"Open" },
  { jobTitle: "Software Developer", personSubmitted: "Kayee Wong", dateSubmitted: "03/06/2019", status:"In Progress" },
  { jobTitle: "Software Developer", personSubmitted: "Kayee Wong", dateSubmitted: "03/06/2019", status:"In Progress" },
  { jobTitle: "Software Developer", personSubmitted: "Kayee Wong", dateSubmitted: "03/06/2019", status:"In Progress" },
  { jobTitle: "Software Developer", personSubmitted: "Kayee Wong", dateSubmitted: "03/06/2019", status:"In Progress" },
  { jobID: 932039, jobTitle: "Software Developer", personSubmitted: "Kayee Wong", dateSubmitted: "03/06/2019", status:"Closed" },
]


export default class VacancyHistory extends Component {

  render() {
    return (
      <>
        <SubtitleWithLine title="Vacancy History" />
        <div className="admin-container">
          <div className="admin-table__wrapper">
            <Table unstackable celled striped selectable className="admin-table">

              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Job ID</Table.HeaderCell>
                  <Table.HeaderCell>Job Title</Table.HeaderCell>
                  <Table.HeaderCell>Person Submitted</Table.HeaderCell>
                  <Table.HeaderCell>Date Submitted</Table.HeaderCell>
                  <Table.HeaderCell>Status</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {TableData.map((item, index) => (
                  <Table.Row key={index} className={item.status === "Closed" && "status--closed" }>
                    <Table.Cell>{item.jobID}</Table.Cell>
                    <Table.Cell><Link to={`/admin/employer/vacancyhistory/detail/${item.jobTitle}`}>{item.jobTitle}</Link></Table.Cell>
                    <Table.Cell>{item.personSubmitted}</Table.Cell>
                    <Table.Cell>{item.dateSubmitted}</Table.Cell>
                    <Table.Cell>{item.status}</Table.Cell>
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
