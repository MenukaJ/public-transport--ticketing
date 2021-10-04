import React, {useState, useEffect} from "react";
import axios from "axios";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router";

export default function RecentRides(props) {

    const history = useHistory()

    return(
        <div className="main">
            <Container className="dark-table-container" style={{color: 'white'}}>
                <center><h3>Recent Rides Details</h3></center>
            </Container>
        </div>
    )
}