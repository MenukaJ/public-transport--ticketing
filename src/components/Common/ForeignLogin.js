import React, {useState, useEffect} from "react";
import axios from "axios";
import { Button, Container, Form, Row, Col } from "react-bootstrap";

export default function ForeignLogin(props) {

    return(
        <div className="main">
            <br/>
            <center>
            <Container className="dark-table-container" style={{color: 'white'}}><br/><br/><br/><br/>
                <Col xs={7}>
                    <Form>
                        <Form.Control type="text" placeholder="Travel Card Number"/>
                    </Form>
                </Col><br/><br/><br/><br/>
            </Container><br/>
            <Container>
                <Row>
                    <Col><Button variant="danger" href="./home" size="lg">Back</Button></Col>
                    <Col><Button variant="primary" size="lg">Proceed</Button></Col>
                </Row>
            </Container>
            </center>
        </div>
    )
}