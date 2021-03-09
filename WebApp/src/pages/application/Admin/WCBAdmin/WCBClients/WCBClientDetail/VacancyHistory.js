import React, { Component } from "react";
import SubtitleWithLine from "../../../../../../components/SubtitleWithLine/SubtitleWithLine";
import FormsyTextField from "../../../../../../components/Form/FormsyTextField";
import { InputAdornment, IconButton, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { Table } from 'semantic-ui-react';
import { FaRegQuestionCircle } from "react-icons/fa";

const TableData = [
  { jobTitle: "Problem Solver", personSubmitted: "Wayne Bryant", dateSubmitted: "03/06/2019" },
]

export default class VacancyHistory extends Component {
  render() {
    return (
      <>
        <SubtitleWithLine title="Vacancy History"/>
        <div className="admin-container">
          <div className="admin-table__wrapper">

            {/* <FormsyTextField */}
            <TextField
              id="search"
              name="search"
              variant="filled"
              hiddenLabel
              placeholder="Search"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton aria-label="search" color="primary">
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />

            <Table unstackable celled striped selectable className="admin-table">
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Job Title</Table.HeaderCell>
                  <Table.HeaderCell>Person Submitted</Table.HeaderCell>
                  <Table.HeaderCell>Date Submitted</Table.HeaderCell>
                  <Table.HeaderCell>Status</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {TableData.map((item, index) => (
                  <Table.Row key={index} className={item.status === "Closed" && "status--closed" }>
                    <Table.Cell>{item.jobTitle}</Table.Cell>
                    <Table.Cell>{item.personSubmitted}</Table.Cell>
                    <Table.Cell>{item.dateSubmitted}</Table.Cell>
                    <Table.Cell>In Progress</Table.Cell>
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
