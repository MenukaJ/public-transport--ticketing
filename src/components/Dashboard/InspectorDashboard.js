import React, { useState, useEffect } from "react";
import axios from "axios";
import InspectorSideNav from "../Navbar/InspectorSideNav.js";

export default function TestDashboard(props) {

    const [data, setData] = useState({
        totalItems: "",
        totalCategories: "",
        totalBrands: "",
        totalAdmins: "",
        totalSellers: "",
        totalBuyers: "",
        totalOrders: ""
    })

    useEffect(() => {
        getDashboard();
    }, [])

    function getDashboard() {
        axios.get("https://shopping-backend-api.herokuapp.com/dashboard/admin").then((res) => {
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


                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2} rowSpan={4}>
                                    <div className="card text-black mt-0 mb-0 mb-3">
                                        
                                    </div>
                                </td>
                                <td colSpan={2} rowSpan={2}>
                                    <div className="card text-black mt-0 mb-0 mb-3">

                                    </div>
                                </td>
                                <td>
                                    <div className="card text-black mt-0 mb-0 mb-3">

                                    </div>

                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="card text-black mt-0 mb-0 mb-3">

                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={3} rowSpan={2}>
                                    <div className="card text-black mt-0 mb-0 mb-3">

                                    </div>
                                </td>
                            </tr>
                        </tbody></table>
                </div>
            </div>
        </div>

    )
}