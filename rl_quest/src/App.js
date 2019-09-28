import React from 'react';
import './App.css';
import Leaflet from 'leaflet';
import GoogleLogin from 'react-google-login'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'

import MapComp from "./component/map-component";
import NavComp from "./component/nav-component";

function GoogleSignin() {
  return <div class="g-signin2" data-onsuccess=""></div>}
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
    this.state = { loggedIn: false, filter: '.*' }
  }
  
  finish = () => this.setState({ loggedIn: true })
  filterChange = newFilter => this.setState({ filter: newFilter == 'all' ? '.*' : newFilter })

  render() {
    if(!this.state.loggedIn)
      return <LoginPage loginFinished={this.finish} />
    else
        return <div style={{ height: '100%', width: '100vw'}}>
            <MapComp filter={this.state.filter}></MapComp>
            <NavComp handleChange={this.filterChange}/>
        </div>;
  }
}


export default App;
