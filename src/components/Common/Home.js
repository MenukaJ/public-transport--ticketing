import React, {useState, useEffect} from "react";
import Footer from "./Footer";
import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Select from "react-select";
import { Button } from "react-bootstrap";

export default function Home(props) {

    return(
        <div><br/>
            <Container className="dark-table-container" style={{color: 'white'}}><br/>  
                <Form>
                    <Row>
                        <Col>
                            <Select options={'mm', 'mma'} placeholder="From"/>
                        </Col>
                        <Col>
                            <Select options={'mm', 'mma'} placeholder="To"/>
                        </Col>
                        <Col>
                            <Button type="submit">Search</Button>
                        </Col>
                    </Row><br/>
                </Form>
                <Row>
                    <Col xs={3}>Ticket Cost</Col>
                    <Col>95.00</Col>
                </Row>
                <Row>
                    <Col xs={3}>Bus Route</Col>
                    <Col>E32</Col>
                </Row>
            </Container><br/>
            <Container className="dark-table-container" style={{color: 'white'}}>
                <center><Button variant="success" size="lg" href="/foreign-login"><i><b>For Foreign Passengers</b></i></Button></center>
            </Container><br/>
            <Container className="dark-table-container" style={{color: 'white'}}>
                Popular Routes
            </Container><br/>
            <Footer/>
        </div>
    )
}