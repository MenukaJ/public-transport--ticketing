import React, {useState, useEffect} from "react";
import axios from "axios";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router";
import authService from "../../services/auth.service";

export default function RecentRides(props) {

    const history = useHistory()
    const[data, setData] = useState([])

    useEffect(() => {
        getUsers()
    }, [])

    function getUsers() {
        const username = authService.getCurrentUser().username;
        axios.get("https://public-transport-ticketing.herokuapp.com/ticket/" + username).then((res) => {
            setData(res.data);
        }).catch((err) => {
            alert(err);
        })
    }

    return(
        <div className="main">
            <Container className="dark-table-container" style={{color: 'white'}}>
                <center><h3>Recent Rides Details</h3></center>
            </Container>
            <Container style={{color : 'white'}} className="dark-table-container">
                <Row>
                    <Col><i><b>Ticket ID</b></i></Col>
                    <Col><i><b>From</b></i></Col>
                    <Col><i><b>To</b></i></Col>
                    <Col><i><b>Amount</b></i></Col>
                    <Col><i><b>Options</b></i></Col>
                </Row>
            </Container><br/>
            <Container style={{color : 'white'}} className="dark-table-container">
                {   data.length === 0 ?
                    <div className="row justify-content-center">
                        <div className="col-auto">
                            <h2 className="home-h1">No recent Tickets</h2>
                        </div>
                    </div>
                    :
                    
                    data.map(ticket => 
                        <>
                            <Row>
                                <Col>{ticket.id}</Col>
                                <Col>{ticket.from}</Col>
                                <Col>{ticket.to}</Col>
                                <Col>{ticket.amount}</Col>
                                <Col><Button>Request Reimbersement</Button></Col>
                            </Row>
                        </>
                    )
                }
            </Container><br/>
            <Container style={{color : 'white'}} className="dark-table-container">
                <Row>
                    <Col><Button variant="danger" onClick={() => history.goBack()} size="lg">Back</Button></Col>
                </Row>
            </Container>
        </div>
    )
}