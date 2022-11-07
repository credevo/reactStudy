import React from "react";

export default function Card(props) {
  return (
    <div
      className="card"
      style={{
        backgroundColor: "black",
        borderRadius: "20%",
        color: "white",
        minHeight: "300px",
        maxWidth: "300px",
        margin: "1rem",
        padding: "1rem",
        textAlign: "center",
        verticalAlign: "center",
      }}
    >
      {props.children}
    </div>
  );
}

/**
 * 마진(margin)
 * ㄴ 보더(border)
 * ㄴㅡ 패딩(pading)
 * ㄴㅡㅡ content(height/width)
 */
