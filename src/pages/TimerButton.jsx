import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    border: 0;
    border-radius: 3px;
    color: white;
    height: 48px;
    padding: 0 30px;
    background-color: ${({ theme }) => theme.primary}; // You can use your theme color here
    cursor: pointer;
`;

const TimerButton = (props) => {
    return (
        <StyledButton onClick={props.onClick}>
            {props.children}
        </StyledButton>
    );
};

export default TimerButton;
