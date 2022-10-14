import React, { PureComponent} from 'react'
import {ToggleDrawer} from './components';
import {Table} from "antd";

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Website',
      dataIndex: 'website',
      key: 'website',
    },
    {
        title: 'Introduction',
        dataIndex: 'introduction',
        key: 'introduction',
      },
      
  ];

export default class App2 extends PureComponent {

    constructor(){
        super();
        this.state = {
            open : false,
            userList : [],
        }
    }

    showDrawer = () => {
        this.setState({open:true});
    };

    onClose = () => {
        this.setState({open:false});
    };

    addUser = (values) => {
        let newUserList = [...this.state.userList, values.user];
        this.setState({userList : newUserList});
    };

    render() {
        return (
        <div>
            <ToggleDrawer showDrawer = {this.showDrawer} onClose = {this.onClose} addUser = {this.addUser} open = {this.state.open}></ToggleDrawer>
            <Table dataSource = {this.state.userList} columns = {columns}></Table>
        </div>
        )
    }
}
