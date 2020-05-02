import React from "react";

export default function Joke(props) {
  return (
    <div>
      <h3>{props.question}</h3>
      <h3>{props.punchiLine}</h3>
    </div>
  );
}
