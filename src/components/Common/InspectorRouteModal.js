import React, {useState, useEffect} from "react";
import axios from "axios";
import { Button, Container, Form, Row, Col, Modal } from "react-bootstrap";

export default function InspectorRouteModal(props) {
    return (
        <Modal {...props}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
          <Button variant="primary" onClick={props.onHide}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
    
}