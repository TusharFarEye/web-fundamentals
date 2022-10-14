import React, { PureComponent } from 'react'
import {Button} from 'antd'


export default class AddButton extends PureComponent {
  render() {
    return (
        <div>
        <Button danger onClick = {() => this.props.incrementCounter()}> Increment </Button>
        </div>
    )
  }
}
