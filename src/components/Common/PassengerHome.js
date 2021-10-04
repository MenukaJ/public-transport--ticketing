import React, {useState, useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";
import SlideShow from "./SlideShow";
import CategoryCarousel from "./CategoryCarousel";
import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Select from "react-select";
import { Button } from "react-bootstrap";

export default function PassengerHome(props) {

    const optionsList = ["mm", "mma"]
    return(
        <div><br/>
            <Container className="dark-table-container" style={{color: 'white'}}><br/>  
                <Form>
                    <Row>
                        <Col>
                            <Select options={optionsList} placeholder="From" single autoFocus isSearchable/>
                        </Col>
                        <Col>
                            <Select options={optionsList} placeholder="To" single autoFocus isSearchable/>
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
                <Row>
                    <Col><center><Button variant="success" size="lg" href="/foreign-login"><i><b>Go to Top Up</b></i></Button></center></Col>
                    <Col><center><Button variant="success" size="lg" href="/recent-rides"><i><b>Recent Rides</b></i></Button></center></Col>
                </Row>
            </Container><br/>
            <Container className="dark-table-container" style={{color: 'white'}}>
                Popular Routes
            </Container><br/>
            <Footer/>
        </div>
    )
}