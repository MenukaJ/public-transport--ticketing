import React, {useState, useEffect} from "react";
import axios from "axios";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import AdminSideNav from "../Navbar/AdminSideNav";

export default function AdminInspectors(props) {

    const[data, setData] = useState([])

    useEffect(() => {
        getUsers()
    }, [])

    function getUsers() {
        axios.get("https://public-transport-ticketing.herokuapp.com/auth/all").then((res) => {
            setData(res.data);
        }).catch((err) => {
            alert(err);
        })
    }

    return(
        <div className="main">
            <AdminSideNav/>
            <Container className="dark-table-container" style={{color: 'white'}}>
                <center><h3>Inspectors</h3></center>
            </Container>
            <Container style={{color : 'white'}} className="dark-table-container">
                <Row>
                    <Col><i><b>Name</b></i></Col>
                    <Col><i><b>Contact No</b></i></Col>
                    <Col><i><b>Options</b></i></Col>
                </Row>
            </Container><br/>
            <Container className="dark-table-container" style={{color: 'white'}}>
                {   data.filter(inspector => inspector.roles[0].name === "ADMIN").length === 0 ?
                    <div className="row justify-content-center">
                        <div className="col-auto">
                            <h2 className="home-h1">No Inspectors in The System</h2>
                        </div>
                    </div>
                    :
                    data.filter(inspector => inspector.roles[0].name === "ADMIN").map(inspector => 
                    <>
                        <Row>
                            <Col>{inspector.firstName + " " + inspector.lastName}</Col>
                            <Col>{inspector.phoneNumber}</Col>
                            <Col><Button>View</Button></Col>
                        </Row>
                    </>
                    )
                }
            </Container>
        </div>
    )
}