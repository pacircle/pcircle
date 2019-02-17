import React from 'react';
import PropTypes from 'prop-types';
import { Table, Input, Button, Icon, Popconfirm, Avatar } from 'antd';
import Highlighter from 'react-highlight-words'
import { hashHistory } from "react-router";
import { changeMenuKeysAction } from "../../models/main/changeMenuKeys";
import {addNewUsersAction} from "../../models/user/addNewUsers";

class CamTable extends React.Component {
  constructor(props) {
    super(props)
    // console.log(this.props.userInfos)
    this.state = {
      searchText: '',
      data: this.props.userInfos,
      selectedRowKeys: [],
      loading: false,
      selectedKeys: []
    }
    this.getColumnSearchProps = this.getColumnSearchProps.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.onSelectChange = this.onSelectChange.bind(this)
    this.start = this.start.bind(this)
    // this.handleDelete = this.handleDelete.bind(this)
  }

  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    let selectedKeys = this.state.selectedKeys;
    for (let i = 0; i < selectedRowKeys.length; i++) {
      let index = selectedRowKeys[i]
      selectedKeys.push(this.state.data[index]._id)
      console.log(this.state.data[index]._id)
    }
    this.setState({ selectedKeys });
    this.setState({ selectedRowKeys })
  }

  getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
                       setSelectedKeys, selectedKeys, confirm, clearFilters
                     }) => (
      <div style={{ padding: "8px", borderRadius: "4px", background: "#fff", boxShadow: "0 2px 8px rgba(0,0,0,.15)" }}>
        <Input
          ref={node => { this.searchInput = node }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          type={"primary"}
          onClick={() => this.handleSearch(selectedKeys, confirm)}
          icon={"search"}
          size={"small"}
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button
          onClick={() => this.handleReset(clearFilters)}
          size={"small"}
          style={{ width: 90 }}
        >
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => <Icon type={"search"} style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => this.searchInput.select())
      }
    },
    render: (text) => (
      <Highlighter
        highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
        searchWords={[this.state.searchText]}
        autoEscape
        textToHighlight={text.toString()}
      />
    )
  })

  start = () => {
    this.setState({ loading: true });
    this.props.dispatch(addNewUsersAction(this.state.selectedKeys))
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 2000);
  }


  handleSearch = (selectedKeys, confirm) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0]
    })
  }

  handleReset = (clearFilters) => {
    clearFilters();
    this.setState({
      searchText: ''
    })
  }

  // handleDelete = (key) => {
  //   // 删除用户
  //   // const dataSource = [...this.state.data];
  //   // this.setState({
  //   //   data: dataSource.filter(item => item.key != key)
  //   // })
  //   console.log(key)
  // }

  handleClick = (key) => {
    console.log(key)
    this.props.dispatch(changeMenuKeysAction(["3", "sub2"]))
    hashHistory.push({
      pathname: '/usdetail',
      query: { userId: key }
    })
  }


  render() {
    const colums = [{
      title: '用户头像',
      dataIndex: 'avatarUrl',
      key: 'avatarUrl',
      render: avatarUrl => <Avatar src={avatarUrl} />
    }, {
      title: '用户昵称',
      dataIndex: 'nickName',
      key: 'nickName',
      ...this.getColumnSearchProps('nickName')
    }, {
      title: '用户是否已添加',
      dataIndex: 'include',
      key: 'include',
      ...this.getColumnSearchProps('include')
    }, {
      title: "用户训练营分享",
      dataIndex: "campMember",
      key: "campMember",
      ...this.getColumnSearchProps('campMember')
    }, {
      title: "用户复盘分享列表",
      dataIndex: "campList",
      key: "campList",
      ...this.getColumnSearchProps('campList'),
      width: '10%',
    }]
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      // getCheckboxProps: record => ({
      //   disabled: this.state.data.record.name === 'Disabled User', // Column configuration not to be checked
      //   name: record.name,
      // }),
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <Button
            type="primary"
            onClick={this.start}
            disabled={!hasSelected}
            loading={loading}
          >
            添加报名成功用户
          </Button>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `选择 ${selectedRowKeys.length} 个用户` : ''}
          </span>
        </div>
        <Table rowSelection={rowSelection} dataSource={this.state.data} columns={colums} scroll={{ x: 800 }} />
      </div>
    )
  }
}

CamTable.propTypes = {
  userInfos: PropTypes.array
}

export default CamTable
