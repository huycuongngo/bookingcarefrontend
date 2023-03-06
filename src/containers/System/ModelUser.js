import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

class ModalUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: this.props.isOpenModal,
    }
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.props.toggleUserModal()
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <Modal
          className='model-user-container'
          size='lg'
          isOpen={this.state.modal}
          toggle={this.toggle}
        >
          <ModalHeader toggle={this.toggle}>Create New User</ModalHeader>
          <ModalBody>
            <div className='modal-user-body'>
              <div className='input-container'>
                <label>Email</label>
                <input type='text' name='' id='' />
              </div>
              <div className='input-container'>
                <label htmlFor=''>Password</label>
                <input type='text' name='' id='' />
              </div>
              <div className='input-container'>
                <label htmlFor=''>Full name</label>
                <input type='text' name='' id='' />
              </div>
              <div className='input-container max-width-input-address'>
                <label htmlFor=''>Address</label>
                <input type='text' name='' id='' />
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button className='px-3' color='primary' onClick={this.toggle}>
              Save Changes
            </Button>{' '}
            <Button className='px-3' color='secondary' onClick={this.toggle}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (state) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser)
