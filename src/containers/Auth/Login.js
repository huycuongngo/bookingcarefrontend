import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'

import './Login.scss'

import { userActions } from '../../store/actions'
import { handleLoginService } from '../../services'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      isShowPassword: false,
      errorMessage: '',
    }
  }

  handleOnChangeEmail = (e) => {
    console.log(e.target.value)
    this.setState({
      email: e.target.value,
    })
  }

  handleOnChangePassword = (e) => {
    console.log(e.target.value)
    this.setState({
      password: e.target.value,
    })
  }

  handleLogin = async () => {
    this.setState({
      errorMessage: '',
    })
    try {
      let result = await handleLoginService(this.state.email, this.state.password)
      this.props.userLoginSuccess(result.data.user)
      console.log('result', result)
    } catch (error) {
      console.log(error)
      console.log(error.response.data.msg)
      this.setState({
        errorMessage: error.response.data.msg,
      })
    }
  }

  togglePassword = () => {
    this.setState({
      isShowPassword: !this.state.isShowPassword,
    })
  }

  render() {
    return (
      <div className='login-bg'>
        <div className='login-container'>
          <div className='login-content row'>
            <div className='col-12 text-center display-4 fw-bold'>Login</div>

            <div className='col-12 my-3 px-0'>
              <label htmlFor='' className='my-1 ms-4'>
                Email:
              </label>
              <input
                type='text'
                name='email'
                id=''
                className='form-control'
                placeholder='Enter your email'
                value={this.state.email}
                autoFocus
                onChange={(e) => {
                  this.handleOnChangeEmail(e)
                }}
              />
            </div>

            <div className='col-12 my-3 px-0 position-relative'>
              <label htmlFor='' className='my-1 ms-4'>
                Password:
              </label>
              <input
                type={this.state.isShowPassword ? 'text' : 'password'}
                name=''
                id='password'
                className='form-control '
                placeholder='Enter your password'
                value={this.state.password}
                onChange={(e) => {
                  this.handleOnChangePassword(e)
                }}
              />
              <i
                className={
                  this.state.isShowPassword
                    ? 'fas fa-eye custom-eye position-absolute'
                    : 'fas fa-eye-slash custom-eye position-absolute'
                }
                onClick={() => {
                  this.togglePassword()
                }}
              />
            </div>

            <div
              className='col-12 mb-2 px-0 text-danger'
              style={{
                height: '20px',
              }}
            >
              {this.state.errorMessage}
            </div>

            <div
              className='col-12 mt-3 mb-2 px-0 btn-container text-center fw-bold'
              onClick={() => {
                this.handleLogin()
              }}
            >
              Log in
            </div>

            <div className='col-12 forgot-ps'>
              <a href='#'>Forgot your password ?</a>
            </div>

            <div className='col-12 text-center my-3'>
              <span>Or login with:</span>
            </div>

            <div className='col-12 text-center'>
              <i className='fab fa-facebook facebook'></i>
              <i className='fab fa-google google'></i>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),

    userLoginSuccess: (userInfor) => dispatch(userActions.userLoginSuccess(userInfor)),

    userLoginFail: () => dispatch(userActions.userLoginFail()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
