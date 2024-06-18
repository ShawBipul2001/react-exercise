import React, { useState } from 'react';
import { theme, ConfigProvider, Form, Input, Popconfirm, Select, Table, Typography } from 'antd';
import userData from "../data/users.json"

const { defaultAlgorithm, darkAlgorithm } = theme;

const roleOptions = [
  {
    value: "Editor",
    label: "Editor"
  },
  {
    value: "Viewer",
    label: "Viewer"
  },
  {
    value: "Contributor",
    label: "Contributor"
  },
  {
    value: "Manager",
    label: "Manager"
  }
]

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'select' ? <Select options={roleOptions}/> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};
const UserTable = ({mode}) => {
  const [form] = Form.useForm();
  const [data, setData] = useState(userData);
  const [editingKey, setEditingKey] = useState('');
  const isEditing = (record) => record.email === editingKey;
  const edit = (record) => {
    form.setFieldsValue({
      name: '',
      designation: '',
      email: '',
      roles: '',
      ...record
    });
    setEditingKey(record.email);
  };
  const cancel = () => {
    setEditingKey('');
  };
  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.email);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };
  const onDelete = async (key) => {
    console.log("hi")
    try {
      const newData = [...data]
      const index = newData.findIndex((item) => key === item.email);
      newData.splice(index, 1)
      setData(newData)
      console.log(newData)
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  }
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      width: '20%',
      editable: true,
    },
    {
      title: 'Designation',
      dataIndex: 'designation',
      width: '20%',
      editable: true,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      width: '20%',
      editable: true,
    },
    {
      title: 'Roles',
      dataIndex: 'roles',
      width: '20%',
      editable: true,
    },
    {
      title: 'Operation',
      dataIndex: 'operation',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.email)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <>
            <Typography.Link 
                disabled={editingKey !== ''} 
                onClick={() => edit(record)} 
                style={{
                  marginRight: 25,
                }}
            >
              Edit
            </Typography.Link>
            <Popconfirm title="Sure to delete?" onConfirm={() => onDelete(record.email)}>
              <a>Delete</a>
            </Popconfirm>
          </>
        );
      },
    },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === 'roles' ? 'select' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
      <Form form={form} component={false}>
        <ConfigProvider
          theme={{
            algorithm: mode === "dark" ? darkAlgorithm : defaultAlgorithm,
          }}>
            <Table
              components={{
                body: {
                  cell: EditableCell,
                },
              }}
              bordered
              dataSource={data}
              columns={mergedColumns}
              rowClassName="editable-row"
              pagination={false}
              size='middle'
            />
        </ConfigProvider>
      </Form>
  );
};
export default UserTable;