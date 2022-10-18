import {Space, Button} from "antd";

const editableColumns = [
    {
      title: 'FirstName',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'LastName',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
        title: 'Password',
        dataIndex: 'password',
        key: 'password',
    },
    {
        title: 'Role',
        dataIndex: 'role',
        key: 'role',
    },
  ];

// const columns = [
//     {
//       title: 'User Id',
//       dataIndex: 'userId',
//       key: 'userId',
//     },
//     {
//         title: 'FirstName',
//         dataIndex: 'firstName',
//         key: 'firstName',
//       },
//       {
//         title: 'LastName',
//         dataIndex: 'lastName',
//         key: 'lastName',
//       },
//       {
//         title: 'Email',
//         dataIndex: 'email',
//         key: 'email',
//       },
//       {
//           title: 'Password',
//           dataIndex: 'password',
//           key: 'password',
//       },
//       {
//           title: 'HashedPassword',
//           dataIndex: 'hashedPassword',
//           key: 'hashedPassword',
//       },
//       {
//         title: 'Verified',
//         dataIndex: 'verified',
//         key: 'verified',
//       },
//       {
//         title: 'Created',
//         dataIndex: 'created',
//         key: 'created',
//       },
//       {
//           title: 'Modified',
//           dataIndex: 'modified',
//           key: 'modified',
//       },
//       {
//           title: 'Role',
//           dataIndex: 'role',
//           key: 'role',
//       },
//       {
//           title: 'Active',
//           dataIndex: 'active',
//           key: 'active',
//       },
//         {
//         title: 'Action',
//         key: 'action',
//         render: (_, record) => (
//             // <Space size="middle">
//             // <EditUser user = {record}></EditUser>
//             // <DeleteUser user = {record}></DeleteUser>
//             // </Space>
//         ),
//         },
//   ];

  export {editableColumns};