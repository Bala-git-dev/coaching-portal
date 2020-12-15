import React from "react";
import { Container } from "react-bootstrap";

import Coaching_survey_form from "./coaching_survey";
import './forms.css';

const Coaching_survey = (props) => {
    return (
        <Container className="fade-in">
            <Coaching_survey_form history={props.history} />
        </Container>
    );
};

export default Coaching_survey;