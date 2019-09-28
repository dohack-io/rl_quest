import React from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleLogin from 'react-google-login'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'

class LoginPage extends React.Component {
  constructor(props)
  {
    super(props)
  }
  
  dummyLogin = () => {
    this.props.loginFinished()
  };
  
  responseGoogle = () => {
    // TODO this.props.loginFinished()
  };
  
  render() {
    return <Box className="LoginBox">
        <h3>Login</h3>
        <GoogleLogin
          clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
        <Button color="primary" variant="contained" onClick={this.dummyLogin} >Dummy Login</Button>
      </Box>;
  }
}


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { loggedIn: false }
  }
  
  finish = () => this.setState({ loggedIn: true })
  
  render() {
    if(!this.state.loggedIn)
      return <LoginPage loginFinished={this.finish} />
    else
      return <div>Hello, World</div>
  }
}

export default App;
