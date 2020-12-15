import React from "react";
import { Container } from "react-bootstrap";

import Coaching_readonly_page from "./coaching_readonly";
import './forms.css';

const Coaching_readonly = (props) => {
    return (
        <Container className="fade-in">
            <Coaching_readonly_page history={props.history} />
        </Container>
    );
};

export default Coaching_readonly;