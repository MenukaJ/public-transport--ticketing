import React, {useState, useEffect} from "react";
import axios from "axios";
import AdminSideNav from "../Navbar/AdminSideNav";

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

    return(
        <div className="main">
            <AdminSideNav/>
            
        </div>
    )
}