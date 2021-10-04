import React, {useState, useEffect} from "react";
import axios from "axios";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router";

export default function ForeignProfile(props) {

    const history = useHistory()

    return(
        <div className="main"><br/>
            <center>
                <Container className="dark-table-container" style={{color: 'white'}}><br/>
                    <Row>
                        <Col xs={5}>Travel Card: </Col>
                        <Col>957575</Col>
                    </Row><br/>
                </Container>
                <Container className="dark-table-container" style={{color: 'white'}}><br/>
                    <Row>
                        <Col xs={5}>Valid Till: </Col>
                        <Col>9999</Col>
                    </Row><br/>
                </Container>
                <Container className="dark-table-container" style={{color: 'white'}}><br/>
                    <Row>
                        <Col xs={5}>Balance: </Col>
                        <Col>Rs.2662</Col>
                    </Row><br/>
                </Container><br/><br/>
                <Container>
                    <Row>
                        <Col xs={5}><Button variant="danger" onClick={() => history.goBack()} size="lg">Back</Button></Col>
                        <Col><Button variant="primary" size="lg" href="./foreign-topup">Recharge</Button></Col>
                    </Row>
                </Container>
            </center>
        </div>
    )
}