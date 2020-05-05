import React from "react";

export default function Joke(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <h3>{props.log}</h3>
    </div>
  );
}
