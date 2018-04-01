import React, { Component } from 'react';

import { Table } from 'semantic-ui-react'

export class StoreTable extends Component {
    render() {
        let keyIndex = 0;
        return (
            <Table celled striped fixed singleLine>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell width='16'>Value</Table.HeaderCell>
                  <Table.HeaderCell width='2'>Selection</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              
              <Table.Body>
                {this.props.items.map((item) => {
                    keyIndex++;
                    return (
                        <Table.Row key={keyIndex}>
                          <Table.Cell>{item.value}</Table.Cell>
                          <Table.Cell>{item.selection}</Table.Cell>
                        </Table.Row>
                    );
                })}
              </Table.Body>
            </Table>
        );
    }
}
