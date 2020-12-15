import React from "react";
import { Container } from "react-bootstrap";

import Coaching_feedback_form from "./coaching_feedback";
import './forms.css';

const Coaching_feedback = (props) => {
    return (
        <Container className="fade-in">
            <Coaching_feedback_form history={props.history} />
        </Container>
    );
};

export default Coaching_feedback;