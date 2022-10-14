import React, { PureComponent } from 'react'
import {Button, Drawer} from 'antd'

import UserForm from './UserForm';

export default class ToggleDrawer extends PureComponent {

  onFinish  = (values) => {
    this.props.addUser(values);
  }

  render() {
    return (
    <div>
        <Button type="primary" onClick={this.props.showDrawer}>
            Open
        </Button>
        <Drawer title="Basic Drawer" placement="right" onClose={this.props.onClose} open={this.props.open}>
            <UserForm  onFinish = {this.onFinish} >
            </UserForm>
        </Drawer>
    </div>
    )
  }
}
