import React from "react";
import { Container } from "react-bootstrap";

import Coaching_list_page from "./coaching_list";
import './forms.css';

const Coaching_list = (props) => {
    return (
        <Container className="fade-in">
            <Coaching_list_page history={props.history} />
        </Container>
    );
};

export default Coaching_list;