import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import { connect } from 'react-redux'
import { getAllUser } from '../../services'
import ModalUser from './ModelUser'
import './UserManage.scss'

class UserManage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      isOpenModal: false,
    }
  }

  async componentDidMount() {
    try {
      let result = await getAllUser()
      this.setState({
        users: result.data.users,
      })
    } catch (error) {
      console.log(error)
    }
  }

  handleAddNewUser = () => {
    this.setState({
      isOpenModal: true,
    })
  }

  toggleUserModal = () => {
    this.setState({
      isOpenModal: !this.state.isOpenModal,
    })
  }

  render() {
    console.log(this.state.users)

    return (
      <div className='users-container'>
        <ModalUser isOpenModal={this.state.isOpenModal} toggleUserModal={this.toggleUserModal} />
        <div className='title text-center'>User management</div>
        <div className='mx-1'>
          <button
            onClick={() => {
              this.handleAddNewUser()
            }}
            className='btn btn-primary px-3'
          >
            <i className='fas fs-plus'></i> Add new users
          </button>
        </div>
        <div className='users-table mt-4 mx-3'>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Email</th>
                <th>Full Name</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users?.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.email}</td>
                  <td>{user.fullName}</td>
                  <td>{user.address}</td>
                  <td>
                    <button className='edit-btn btn-animated'>
                      <i class='fas fa-edit'></i>
                    </button>
                    <button className='delete-btn btn-animated'>
                      <i class='fas fa-trash-alt'></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserManage)
