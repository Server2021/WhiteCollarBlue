import React, {Component} from "react";
import SubtitleWithLine from "../../../../../components/SubtitleWithLine/SubtitleWithLine";
import {Table} from "semantic-ui-react";
import PendingChangesModal from "../../components/PendingChangesModal";
import FormsyTextField from "../../../../../components/Form/FormsyTextField";
import {InputAdornment, IconButton, TextField} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ComingSoon from "../../../../../components/ComingSoon";

const TableData = [
  {
    name: "Jeongyun Won",
    company: "Toolbox",
    dateRequested: "03/06/2019",
    status: "In Progress"
  }
];

const TableDataBefore = [
  {th: "Name", td: "Toolbox"},
  {
    th: "Address",
    td:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 0626, Sydney, Austrailia"
  },
  {
    th: "Mailing Address",
    td:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 0626, Sydney, Austrailia"
  },
  {th: "Company Phone", td: "+610212345678"},
  {th: "Fax", td: "+610212345678"},
  {th: "Company Linkedin", td: "Lorem ipsum dolor sit amet"}
];

const TableDataAfter = [
  {th: "Name", td: "Toolboxuuu"},
  {
    th: "Address",
    td:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 0626, Sydney, Austrailia"
  },
  {
    th: "Mailing Address",
    td:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 0626, Sydney, Austrailia"
  },
  {th: "Company Phone", td: "+610212345678"},
  {th: "Fax", td: "+610212345678"},
  {th: "Company Linkedin", td: "Lorem ipsum dolor sit amet"}
];

export default class PendingChanges extends Component {
  state = {
    pendingChangeModalOpen: false
  };

  handleOpen = () => {
    this.setState({pendingChangeModalOpen: true});
  };

  handleClose = () => {
    this.setState({pendingChangeModalOpen: false});
  };

  render() {
    return (
      <>
        <SubtitleWithLine title="Pending Client Account Changes" />

        <div className="admin-container">
          <div className="admin-table__wrapper">
            {/* <FormsyTextField */}
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
                  <Table.HeaderCell>Date Requested</Table.HeaderCell>
                  <Table.HeaderCell>Status</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {[].map((item, index) => (
                  <Table.Row
                    key={index}
                    onClick={this.handleOpen}
                    style={{cursor: "pointer"}}>
                    <Table.Cell>{item.name}</Table.Cell>
                    <Table.Cell>{item.company}</Table.Cell>
                    <Table.Cell>{item.dateRequested}</Table.Cell>
                    <Table.Cell>{item.status}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
            <ComingSoon />
          </div>
        </div>

        <PendingChangesModal
          open={this.state.pendingChangeModalOpen}
          handleClose={this.handleClose}
          tableDataBefore={TableDataBefore}
          tableDataAfter={TableDataAfter}
        />
      </>
    );
  }
}
