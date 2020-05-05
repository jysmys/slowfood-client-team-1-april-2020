import React from 'react'
import { Table } from 'semantic-ui-react'
import {getMenu} from '../modules/menu'
import { Component } from 'react'

class ViewMenu extends Component {
  state = {
    starters: [],
    main:[],
    dessert:[],
    beverage:[],
  };
  componentDidMount () {
    this.getViewMenu();
  }
  async getViewMenu(){
    let starters = []
    let main = []
    let dessert = []
    let beverage = []

    let result= await getMenu()
    result.data.map((item) => {
      switch (item.category) {
          case "starters":
            starters.push(item)
          break;
          case "mains":
            mains.push(item)
          break;
          case "dessert":
            dessert.push(item)
          break;
          case "beverage":
            beverage.push(item)
          break;
          default:
          break;
      }
    })
  }
render () {

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
}

export default ViewMenu
