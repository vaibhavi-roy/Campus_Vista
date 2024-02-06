import React from "react";
import styled from "styled-components";

const StyledIconButton = styled.button`
    color: lightgrey;
    margin: 0 20px;
    background-color: transparent;
    border: none;
    cursor: pointer;
`;

const TimerIconButton = (props) => {
    return (
        <StyledIconButton onClick={props.onClick}>
            {props.children}
        </StyledIconButton>
    );
};

export default TimerIconButton;
