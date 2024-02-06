// ButtonGroup.js

import React from "react";
import styled from "styled-components";

const StyledButtonGroup = styled.div`
    display: flex;
    gap: 10px; /* Adjust the gap between buttons */
`;

const ButtonGroup = (props) => {
    return <StyledButtonGroup>{props.children}</StyledButtonGroup>;
};

export default ButtonGroup; // Properly export the ButtonGroup component
