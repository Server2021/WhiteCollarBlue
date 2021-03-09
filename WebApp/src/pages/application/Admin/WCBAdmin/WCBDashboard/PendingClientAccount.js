import React, {Component} from "react";
import SubtitleWithLine from "../../../../../components/SubtitleWithLine/SubtitleWithLine";
import {Table} from "semantic-ui-react";
import FormsyTextField from "../../../../../components/Form/FormsyTextField";
import {InputAdornment, IconButton, TextField} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ComingSoon from "../../../../../components/ComingSoon";

const TableData = [
  {
    name: "Jeongyun Won",
    company: "Toolbox",
    phoneNo: "+6239238239",
    role: "CEO",
    dateRegistered: "03/06/2019"
  }
];

export default class PendingClientAccount extends Component {
  render() {
    return (
      <>
        <SubtitleWithLine title="Pending Client Account" />

        <div className="admin-container">
          <div className="admin-table__wrapper">
            <TextField
              id="search"
              name="search"
              variant="filled"
              hiddenLabel
              placeholder="Search"
              disabled
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
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>Company Name</Table.HeaderCell>
                  <Table.HeaderCell>Phone No.</Table.HeaderCell>
                  <Table.HeaderCell>Role</Table.HeaderCell>
                  <Table.HeaderCell>Date Registered</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {[].map((item, index) => (
                  <Table.Row key={index}>
                    <Table.Cell>{item.name}</Table.Cell>
                    <Table.Cell>{item.company}</Table.Cell>
                    <Table.Cell>{item.phoneNo}</Table.Cell>
                    <Table.Cell>{item.role}</Table.Cell>
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
