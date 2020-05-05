import React from 'react'
import { Table } from 'semantic-ui-react'

function ViewMenu() {
  return (
    <div>
      <Table unstackable>
      <Table.Header>
      <Table.Row >
      <Table.HeaderCell id='starters'>Starters</Table.HeaderCell>
      </Table.Row>
      </Table.Header>
      <Table.Body>
      <Table.Row>
        <Table.Cell>Pizza</Table.Cell>
        <Table.Cell>Price</Table.Cell>
        <Table.Cell><button id='minus'>-</button></Table.Cell>
        <Table.Cell id='numberOfItems'>0</Table.Cell>
        <Table.Cell><button id='plus'>+</button></Table.Cell>
        <Table.Cell><button id='add'>Add</button></Table.Cell>
        </Table.Row>
        </Table.Body>
      </Table>
    </div>
  )
}

export default ViewMenu
