import React from "react";
import TimerIconButton from "./TimerIconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Time = (props) => {
  return (
    <div>
      <TimerIconButton onClick={props.decrement} aria-label="remove">
        <FontAwesomeIcon icon={faMinus} />
      </TimerIconButton>
      <span>{props.time}</span>
      <TimerIconButton onClick={props.increment} aria-label="add">
        <FontAwesomeIcon icon={faPlus} />
      </TimerIconButton>
    </div>
  );
};

export default Time;
