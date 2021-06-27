import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { routes } from './Routes/Routes';
import Home from './Component/Home/Home';
import Dashboard from './Component/Dashboard/Dashboard';
import Earning from './Component/Earning/Earning';
import Chat from './Component/Chat/Chat';
import Navbar from './Component/Navbar/Navbar';
import Header from './Component/Header/Header';
import "bootstrap/dist/css/bootstrap.min.css"
import Signup from './Component/Signup/Signup';
import {Container} from 'react-bootstrap'
import Login from './Component/Login/Login';
import PrivateRoute from './Component/PrivateRoute';
import store from './store/store';
import {Provider} from 'react-redux'
function App() {
  return (
    <Provider store={store}>
      
        <Router>
        <div className="d-flex">
          <Navbar></Navbar>
          <div className="Content">
              <Header></Header>
            <Switch>
              <PrivateRoute exact path={routes.home}>
                <Home></Home>
              </PrivateRoute>
              <PrivateRoute path={routes.dashboard}>
                <Dashboard></Dashboard>
              </PrivateRoute>
              <PrivateRoute path={routes.earning}>
                <Earning></Earning>
              </PrivateRoute>
              <PrivateRoute path={routes.chat}>
                <Chat></Chat>
              </PrivateRoute>
              <Route path={routes.SignUp}>
                <Container className="d-flex align-items-center justify-content-center"
                  style={{minHeight:'90vh'}}
                >
                  <div className="w-100" style={{maxWidth:'400px'}}>
                    <Signup></Signup>
                  </div>
                </Container>
              </Route>
              <Route path={routes.Login}>
                <Container className="d-flex align-items-center justify-content-center"
                  style={{minHeight:'90vh'}}
                >
                  <div className="w-100" style={{maxWidth:'400px'}}>
                    <Login></Login>
                  </div>
                </Container>
              </Route>
            </Switch>
          </div>
          
        </div>  
      </Router> 
    </Provider>

  );
}

export default App;
