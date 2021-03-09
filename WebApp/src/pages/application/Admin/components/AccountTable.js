import React, {Component} from "react";
import style from "./AccountTable.module.scss";
import {Table} from "semantic-ui-react";

export default class AccountTable extends Component {
  render() {
    return (
      <Table celled unstackable className={style.table}>
        <Table.Body>
          {Object.keys(this.props.data).map(key => {
            return (
              <Table.Row key={key}>
                <Table.HeaderCell>{key}</Table.HeaderCell>
                <Table.Cell>{this.props.data[key]}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    );
  }
}
