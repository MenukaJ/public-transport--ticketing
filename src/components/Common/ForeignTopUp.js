import React, {useState, useEffect} from "react";
import axios from "axios";
import { Button, Container, Form, Row, Col } from "react-bootstrap";

export default function ForeignTopUp(props) {

    function topUp() {
        if(window.confirm("Confirm Payment?")) {

        } else {
            alert("Confirmation Cancelled")
        }
    }

    return(
        <div className="main"><br/>
            <center>
                <Container className="dark-table-container" style={{color: 'white'}}><br/>
                    <Col xs={7}>
                        <Form>
                            <Form.Group>
                                <Form.Label>Amount</Form.Label>
                                <Form.Control type="number" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Credit / Debit Card Number</Form.Label>
                                <Form.Control type="number" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Card Holder's Name</Form.Label>
                                <Form.Control type="text"/>
                            </Form.Group>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Valid</Form.Label>
                                        <Form.Control type="text"/>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>CSV</Form.Label>
                                        <Form.Control type="text"/>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Container><br/>
                <Container className="dark-table-container" style={{color: 'white'}}><br/>
                    <Row>
                        <Col xs={6}><Button variant="danger" href="./foreign-profile" size="lg">Back</Button></Col>
                        <Col><Button variant="primary" size="lg" onClick={() => topUp()}>Next</Button></Col>
                    </Row><br/>
                </Container>
            </center>
        </div>
    )
}