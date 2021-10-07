import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./styles/dashboard-styles.css";
import "./styles/footer-styles.css";
import "./styles/common-styles.css";
import "./styles/slide-show.css";
import "./styles/order-styles.css";
import "./styles/reportlist-styles.css";
import cartImage from "./images/shopping.jpg";
import busIcon from "./images/BusIcon.jpeg";


import AuthService from "./services/auth.service";
import Home from "./components/Common/Home";
import Login from "./components/Common/Login";
import Register from "./components/Common/Register";

import ForeignLogin from "./components/Common/ForeignLogin";
import ForeignProfile from "./components/Common/ForeignProfile";
import ForeignTopUp from "./components/Common/ForeignTopUp";
import PassengerHome from "./components/Common/PassengerHome";
import UserProfile from "./components/Common/UserProfile";
import UserProfileUpdate from "./components/Common/UserProfileUpdate";
import RecentRides from "./components/Common/RecentRides";
import AdminInspectors from "./components/Common/AdminInspectors";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import InspectorDashboard from "./components/Dashboard/InspectorDashboard";
import InspectorReport from "./components/Reports/InspectorReport";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showAdminBoard: false,
      showSellerBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showAdminBoard: user.role.includes("ADMIN"),
        showSellerBoard: user.role.includes("SELLER"),
        showBuyerBoard: user.role.includes("BUYER")
      });
    }
  }

  logOut() {
    AuthService.logout();
  }


  render() {
    const { currentUser, showAdminBoard, showSellerBoard, showBuyerBoard } = this.state;

    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand" ><img src={busIcon} style={{ height: '50px', width: '50px' }} />&nbsp; <b>SL Mate</b></Link>
          <div className="navbar-nav mr-auto">

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link" ><i className="fa fa-user-secret"></i>&nbsp; Admin</Link>
              </li>
            )}

            {showSellerBoard && (
              <li className="nav-item">
                <Link to={"/seller"} className="nav-link" ><i className="fa fa-user"></i>&nbsp; Seller</Link>
              </li>
            )}

            {showBuyerBoard && (
              <li className="nav-item">
                <Link to={"/passenger-home"} className="nav-link" ><i className="fa fa-user"></i>&nbsp; Buyer</Link>
              </li>
            )}

          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  <i className="fa fa-user"></i>&nbsp; {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/home" className="nav-link" onClick={this.logOut}>
                  &nbsp; LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/register"} className="nav-link">Register</Link>
              </li>
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">Login</Link>
              </li>
            </div>
          )}
        </nav>

        <div>
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/admin" component={AdminDashboard} />
            <Route path="/foreign-login" component={ForeignLogin} />
            <Route path="/foreign-profile" component={ForeignProfile} />
            <Route path="/foreign-topup" component={ForeignTopUp} />
            <Route path="/passenger-home" component={PassengerHome} />
            <Route path="/profile" component={UserProfile} />
            <Route path="/profile-update" component={UserProfileUpdate} />
            <Route path="/recent-rides" component={RecentRides} />
            <Route path="/admin-inspector" component={AdminInspectors} />
            <Route path="/inspectorDashboard" component={InspectorDashboard} />
            <Route path="/inspectorReport" component={InspectorReport} />
            

          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
