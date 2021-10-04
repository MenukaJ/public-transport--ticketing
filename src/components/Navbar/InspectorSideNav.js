import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

export class InspectorSideNav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="sidenav" >
                    <a href="/inspectorDashboard" ><i className="fa fa-dashboard"></i>&nbsp; Dashboard</a>
                    <a href="/inspectorReport"><i className="fa fa-file-text-o"></i>&nbsp; Reports</a>
                </div>
            </div>
        );
    }
}
export default InspectorSideNav;
