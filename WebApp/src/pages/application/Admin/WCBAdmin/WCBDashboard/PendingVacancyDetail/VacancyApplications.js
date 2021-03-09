import React, { Component } from "react";
import SubtitleWithLine from "../../../../../../components/SubtitleWithLine/SubtitleWithLine";
import { Table } from 'semantic-ui-react';
import { DownloadIcon } from "../../../components/DownloadIcon";

const TableData = [
    { 
        name: "Jeongyun Won", 
        cv: "jeongyun_hammerhands.doc", 
        phoneNo: "+6239238239", 
        email: "jeongyun@toolbox.net.nz", 
        dateApplied: "03/06/2019" 
    },
]

export default class VacancyApplications extends Component {

    render() {
        return (
            <>
                <SubtitleWithLine title="Vacancy Applications" />
                <div className="admin-container">
                    <div className="admin-table__wrapper">

                        <Table unstackable celled striped selectable className="admin-table">
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Action</Table.HeaderCell>
                                    <Table.HeaderCell>Name</Table.HeaderCell>
                                    <Table.HeaderCell>CV</Table.HeaderCell>
                                    <Table.HeaderCell>Phone No.</Table.HeaderCell>
                                    <Table.HeaderCell>Email</Table.HeaderCell>
                                    <Table.HeaderCell>Date Applied</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>

                            {TableData.map((item, index) => (
                                <Table.Row key={index}>
                                    <Table.Cell><DownloadIcon /></Table.Cell>
                                    <Table.Cell>{item.name}</Table.Cell>
                                    <Table.Cell>{item.cv}</Table.Cell>
                                    <Table.Cell>{item.phoneNo}</Table.Cell>
                                    <Table.Cell>{item.email}</Table.Cell>
                                    <Table.Cell>{item.dateApplied}</Table.Cell>
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
