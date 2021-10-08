import React, { useState, useEffect } from "react";
import axios from "axios";
import InspectorSideNav from "../Navbar/InspectorSideNav";

export default function InspectorDashboard(props) {

    return (
        <div className="main">
            <InspectorSideNav />
            <div className="container mt-3 dark-table-main">
                <header>
                    <br />
                    <div className="container dark-table-container">
                    
                        <br />
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button className="btn btn-danger justify-content-md-end">Generate Report</button><br /><br/>
                        </div>
                        <h3 className="col-sm-3" style={{ color: 'white' }}>Report</h3>

                        <div>
                            

                        </div>
                        
                        {/* <div className="container dark-boots-table">
                            <div className="col-md-4">
                                <div className="card-count conf">
                                    <span className="count-name"></span>
                                    <center>
                                        <button className="btn btn-danger">Generate Report</button>
                                    </center>
                                </div>
                            </div>
                        </div> */}
                        
                    </div>
                </header>
            </div>
        </div>
    )
}