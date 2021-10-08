import React, { useState, useEffect } from "react";
import axios from "axios";
import InspectorSideNav from "../Navbar/InspectorSideNav.js";
import authService from "../../services/auth.service";

export default function InspectorDashboard(props) {

    const [data, setData] = useState({
        startingPoint: "",
        destination: ""
    })

    useEffect(() => {
        getDashboard();
    }, [])

    function getDashboard() {
        
        const userID = authService.getCurrentUser().id;
        
        axios.get("https://public-transport-ticketing.herokuapp.com/inspection/user/"+userID).then((res) => {
            setData(res.data);
        }).catch((err) => {
            alert(err);
        })
    }

    return (
        <div className="main">
            <InspectorSideNav />
            <div className="container mt-3 dark-table-main">
                <h3 className="col-sm-5" style={{ color: 'white' }}>Inspector Dashboard</h3><br />
                <div className="container dark-table-container">
                    <table style={{ width: '100%' }}>
                        <tbody>
                            <tr>
                                <td colSpan={5}>
                                    <div className="card text-black mt-0 mb-0 mb-3">
                                    <table style={{ width: '100%' }}>
                                        <tr>
                                            <td><div>Number of Inspections</div></td>
                                            <td><div>Number of Bus Routes</div></td>
                                        </tr>
                                        <tr>
                                            <td><div><span className="count-numbers"><h1>{data.length}</h1></span></div></td>
                                            <td><div><span className="count-numbers"><h1>{data.length}</h1></span></div></td>
                                        </tr>
                                    </table>

                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2} rowSpan={4}>
                                    <div className="card text-black mt-0 mb-0 mb-3">
                                    <div>Bus Routes</div><br/>
                                    
                                    </div>
                                </td>
                                <td colSpan={2} rowSpan={2}>
                                    <div className="card text-black mt-0 mb-0 mb-3">
                                    <div>Inspections</div>
                                    </div>
                                </td>
                            </tr>
                        </tbody></table>
                </div>
            </div>
        </div>

    )
}