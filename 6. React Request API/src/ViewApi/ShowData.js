import React from "react";

export default function RenderTable(props) {
  return (
    <div>
      <div>
        <h1>{props.Title}</h1>
        <button
          onClick={() =>
            props.Display ? props.setDisplay(false) : props.setDisplay(true)
          }
        >
          {props.Display ? "Hide" : "Show"}
        </button>
        {props.Display ? props.renderTable() : <></>}
      </div>
    </div>
  );
}
