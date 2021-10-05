import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

export class AdminSideNav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="sidenav" >
                    <a href="/admin" ><i className="fa fa-dashboard"></i>&nbsp; Dashboard</a>
                    <a href="/admin-inspector"><i className="fa fa-user"></i>&nbsp; Inspectors</a>
                </div>
            </div>
        );
    }
}
export default AdminSideNav;
