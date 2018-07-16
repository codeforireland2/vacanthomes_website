import React, { Component } from 'react'
import { MuiForm } from 'material-ui-elements'
import { RaisedButton, Paper } from 'material-ui-effco'
// import Typography from 'material-ui/Typography'
// import qs from 'query-string'
// import axios from 'axios'
import { isEmail, authUser } from '../helpers'
// import { API_URL } from '../constants'
import { getFormValues, change, isValid } from 'redux-form'
import { connect } from 'react-redux'
import Logo from '../assets/logo.png'

// const PATH = '/users/'
// const PATH_PL = `/profil/`
// const LABEL = 'Profil użytkownika'
const FORM = 'loginForm'

const { fields } = MuiForm

class Login extends Component {
  state = {}

  componentWillMount() {
    this.fetchToState()
  }

  async fetchToState() {
    sessionStorage.setItem('user', '')
    sessionStorage.removeItem('apiKey')
  }

  handleFormSubmit = async (password, email, event) => {
    const { history: { push }, snackbar } = this.props
    const valid = await authUser(email, password)
    if (valid) {
      sessionStorage.setItem('user', email)
      push('/')
    } else {
      snackbar('Invalid login or password')
    }
  }

  render() {
    // if (!this.state.data) return null

    const {
      // match: { params: { id } },
      // history: { push },
      password,
      email,
      // snackbar,
      formValid
    } = this.props

    //const profileData = this.state.data.data

    //const id = profileData.id

    const styles = {
      container: {
        height: 100,
        width: 400,
        margin: 'auto',
        textAlign: 'center',
        paddingTop: 100,
        marginTop: -70
      },
      box: {
        margin: 'auto',
        textAlign: 'center'
      },
      mg20: {
        margin: 20
      },
      logo: {
        margin: 60,
        marginBottom: 20
      },
      headerText: {
        fontSize: 20,
        margin: 15
      },
      icon: {
        height: 20,
        marginBottom: -3,
        marginRight: 5
      },
      divCellField: {
        width: '70%',
        margin: 'auto'
      }
    }

    return (
      <div style={styles.container}>
        <div style={styles.box}>
          <Paper>
            <img src={Logo} alt="Logo BCS" width="150" style={styles.logo} />
            <MuiForm
              name={FORM}
              styles={{ paddind: 20 }}
              open
              // form={FORM}
              disabled={false}
              layout={MuiForm.layouts.base}
              //initialValues={profileData}
              initialValues={{ email: '', password: '' }}
              fields={[
                {
                  type: fields.text,
                  name: 'email',
                  label: 'Email',
                  hint: 'Enter email',
                  required: true,
                  style: styles.divCellField,
                  validate: v =>
                    v
                      ? isEmail(v) ? undefined : 'Enter valid email address'
                      : 'Field is required'
                },
                {
                  type: fields.password,
                  name: 'password',
                  required: true,
                  style: styles.divCellField,
                  hint: 'Enter password',
                  label: 'Password',
                  validate: v => (v ? undefined : 'Field is required')
                }
              ]}
              actions={{}}
            />
            <RaisedButton
              type="submit"
              style={styles.mg20}
              label="Log In"
              disabled={formValid}
              primary
              onTouchTap={this.handleFormSubmit.bind(this, password, email)}
            />
          </Paper>
        </div>
      </div>
    )
  }
}

export default connect(
  (state, ownProps) => ({
    password: getFormValues(FORM)(state)
      ? getFormValues(FORM)(state).password
      : '',
    email: getFormValues(FORM)(state) ? getFormValues(FORM)(state).email : '',
    formValid: !isValid(FORM)(state)
  }),
  { change, isValid }
)(Login)
