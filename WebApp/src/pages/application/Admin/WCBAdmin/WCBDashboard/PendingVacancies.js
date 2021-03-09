import React, {Component} from "react";
import {Link} from "react-router-dom";
import FormsyTextField from "../../../../../components/Form/FormsyTextField";
import {InputAdornment, IconButton, TextField} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import SubtitleWithLine from "../../../../../components/SubtitleWithLine/SubtitleWithLine";
import {Table} from "semantic-ui-react";
import ComingSoon from "../../../../../components/ComingSoon";

const TableData = [
  {
    vacancyNo: 932039,
    companyName: "Toolbox",
    jobTitle: "Problem Solver",
    dateSubmitted: "03/06/2019"
  },
  {
    vacancyNo: 932039,
    companyName: "Toolbox",
    jobTitle: "Software Developer",
    dateSubmitted: "03/06/2019"
  },
  {
    vacancyNo: 932039,
    companyName: "Toolbox",
    jobTitle: "Problem Solver",
    dateSubmitted: "03/06/2019"
  },
  {
    vacancyNo: 932039,
    companyName: "Toolbox",
    jobTitle: "Problem Solver",
    dateSubmitted: "03/06/2019"
  },
  {
    vacancyNo: 932039,
    companyName: "Toolbox",
    jobTitle: "Problem Solver",
    dateSubmitted: "03/06/2019"
  },
  {
    vacancyNo: 932039,
    companyName: "Toolbox",
    jobTitle: "Problem Solver",
    dateSubmitted: "03/06/2019"
  },
  {
    vacancyNo: 932039,
    companyName: "Toolbox",
    jobTitle: "Problem Solver",
    dateSubmitted: "03/06/2019"
  }
];

export default class PendingVacancies extends Component {
  render() {
    return (
      <>
        <SubtitleWithLine title="Pending Vacancies" />
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
                  <Table.HeaderCell>Vacancy Number</Table.HeaderCell>
                  <Table.HeaderCell>Company Name</Table.HeaderCell>
                  <Table.HeaderCell>Job Title</Table.HeaderCell>
                  <Table.HeaderCell>Date Submitted</Table.HeaderCell>
                  <Table.HeaderCell>Status</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {[].map((item, index) => (
                  <Table.Row
                    key={index}
                    className={item.status === "Closed" && "status--closed"}>
                    <Table.Cell>
                      <Link to={`/admin/dashboard/vacancydetail/${item.vacancyNo}`}>
                        {item.vacancyNo}
                      </Link>
                    </Table.Cell>
                    <Table.Cell>{item.companyName}</Table.Cell>
                    <Table.Cell>{item.jobTitle}</Table.Cell>
                    <Table.Cell>{item.dateSubmitted}</Table.Cell>
                    <Table.Cell>In Progress</Table.Cell>
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
