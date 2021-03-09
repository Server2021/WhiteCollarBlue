import React, {Component} from "react";
import {Link} from "react-router-dom";
import SubtitleWithLine from "../../../../../components/SubtitleWithLine/SubtitleWithLine";
import {Table} from "semantic-ui-react";
import FormsyTextField from "../../../../../components/Form/FormsyTextField";
import {InputAdornment, IconButton, TextField} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ComingSoon from "../../../../../components/ComingSoon";

const TableData = [
  {companyName: "Toolbox", location: "Sydney, Austrailia", phoneNo: "+6423432432"},
  {companyName: "Toolbox", location: "Sydney, Austrailia", phoneNo: "+6423432432"},
  {companyName: "Toolbox", location: "Sydney, Austrailia", phoneNo: "+6423432432"}
];

export default class WCBClients extends Component {
  render() {
    return (
      <>
        <SubtitleWithLine title="WCB Clients" />
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
                  <Table.HeaderCell>Company Name</Table.HeaderCell>
                  <Table.HeaderCell>Location</Table.HeaderCell>
                  <Table.HeaderCell>Phone Number</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {[].map((item, index) => (
                  <Table.Row key={index}>
                    <Table.Cell>
                      <Link to={`/admin/clients/${item.companyName}`}>
                        {item.companyName}
                      </Link>
                    </Table.Cell>
                    <Table.Cell>{item.location}</Table.Cell>
                    <Table.Cell>{item.phoneNo}</Table.Cell>
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
