import React, { useState, useEffect } from "react";
import axios from "axios";
import InspectorSideNav from "../Navbar/InspectorSideNav.js";

export default function AdminDashboard(props) {

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
                    <div className="row ">
                        <div className="col-sm-12">
                            <div className="card-counter conf">

                                <i className="fa fa-shopping-cart"></i>
                                <span className="count-numbers"><h1>{data.totalItems}</h1></span>
                                <span className="count-name">Items</span>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5">
                            <div className="card-counter conf">
                                <i className="fa fa-shopping-cart"></i>
                                <span className="count-numbers"><h1>{data.totalItems}</h1></span>
                                <span className="count-name">Items</span>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card-counter conf">
                                <i className="fa fa-shopping-cart"></i>
                                <span className="count-numbers"><h1>{data.totalItems}</h1></span>
                                <span className="count-name">Items</span>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card-counter conf">
                                <i className="fa fa-shopping-cart"></i>
                                <span className="count-numbers"><h1>{data.totalItems}</h1></span>
                                <span className="count-name">Items</span>
                            </div>
                        </div>
                    </div>
                    <div className="row" >
                        <div className="col-md-5">
                            <div className="card-counter conf">
                                <i className="fa fa-shopping-cart"></i>
                                <span className="count-numbers"><h1>{data.totalItems}</h1></span>
                                <span className="count-name">Items</span>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="card-counter conf">
                                <i className="fa fa-shopping-cart"></i>
                                <span className="count-numbers"><h1>{data.totalItems}</h1></span>
                                <span className="count-name">Items</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5">
                            <div className="card-counter conf">
                                <i className="fa fa-shopping-cart"></i>
                                <span className="count-numbers"><h1>{data.totalItems}</h1></span>
                                <span className="count-name">Items</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}