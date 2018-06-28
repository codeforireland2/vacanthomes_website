import React, { Component } from 'react'
import NoAccess from './NoAccess'
import { oldTheme } from '../constants'

class Logout extends Component {
  componentWillMount() {
    const { history: { push } } = this.props
    //this.props.unauthorisation()
    sessionStorage.setItem('user', '')
    push('/logout')
  }

  render() {
    return (
      <div
        style={{
          marginTop: 70,
          padding: 10
        }}
      >
        <NoAccess
          {...this.props}
          title="Logged Out"
          icon="check_circle"
          button="Log In"
          iconStyle={{
            color: oldTheme.palette.primary3Color
          }}
          style={{ width: 400 }}
          admins={['Login']}
        />
      </div>
    )
  }
}

export default Logout
