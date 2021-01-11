import React from "react";
import { Container } from "react-bootstrap";

import Coaching_feedback_form_edit from "./coaching_feedback_edit";
import './forms.css';

const Coaching_feedback_edit = (props) => {
    return (
        <Container className="fade-in">
            <Coaching_feedback_form_edit history={props.history} />
        </Container>
    );
};
export default Coaching_feedback_edit;