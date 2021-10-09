import React, {useState, useEffect} from "react";
import axios from "axios";
import { Button, Container, Row, Col, Image } from "react-bootstrap";
import authService from "../../services/auth.service";
import { useHistory } from "react-router";

export default function UserProfile(props) {

    const history = useHistory()
    const [data, setData] = useState({
        username: "",
        id: "",
        firstName: "",
        lastName: "",
        addressLine1: "",
        addressLine2: "",
        addressLine3: "",
        phoneNumber: "",
        status: "",
        nic: "",
        dob: "",
        email: "",
        password: "",
        userImage: ""
    })

    useEffect(() => {
        getBuyer();
    }, [])

    function getBuyer() {
        data.username = authService.getCurrentUser().username;
        axios.get("https://public-transport-ticketing.herokuapp.com/auth/username/" + data.username).then((res) => {
            setData(res.data);
        }).catch((err) => {
            alert(err);
        })
    }

    return(
        <div className="main">
            <Container style={{color : 'white'}} className="dark-table-container">
                <center style={{color : 'white'}}><h3>Profile Details</h3></center>
            </Container>
            <Container style={{color : 'white'}} className="dark-table-container">
                <Row>
                    <Col xs={9}>
                        <Row>
                            <Col xs={4}><Image src={data.userImage} rounded alt="No Image" width="120px"/></Col>
                            <Col><h4>{data.username}</h4></Col>
                        </Row><br/>
                        <Row>
                            <Col xs={4}>Full Name</Col>
                            <Col>{data.firstName} {data.lastName}</Col>
                        </Row><br/>
                        <Row>
                            <Col xs={4}>Address</Col>
                            <Col>{data.addressLine1}, {data.addressLine2}, {data.addressLine3}</Col>
                        </Row><br/>
                        <Row>
                            <Col xs={4}>Mobile No</Col>
                            <Col>{data.phoneNumber}</Col>
                        </Row><br/>
                        <Row>
                            <Col xs={4}>NIC No</Col>
                            <Col>{data.identificationValue}</Col>
                        </Row><br/>
                        <Row>
                            <Col xs={4}>Date of Birth</Col>
                            <Col>{data.dob}</Col>
                        </Row><br/>
                        <Row>
                            <Col xs={4}>Email Address</Col>
                            <Col>{data.email}</Col>
                        </Row><br/>
                        <Row>
                            <Col xs={4}><Button variant="danger" onClick={() => history.goBack()}>Back</Button></Col>
                            <Col><Button href="./profile-update"> Go to Update</Button></Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row><center><Button variant="success" size="lg" href="/recent-rides"><i><b>Recent Rides</b></i></Button></center></Row><br/>
                        <Row><center><Button variant="info" size="lg" href=""><i><b>Payment Details</b></i></Button></center></Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}