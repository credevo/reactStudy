import React from "react";

export default function AppWrap() {
  return (
    <div>
      <Navbar bgColor={"green"}>
        <Avatar size={200} img={"./ironman.jpeg"} />
        <p>안녕dfdfddddf하세요</p>
      </Navbar>
    </div>
  );
}

// function Navbar({bgColor,children})
function Navbar(props) {
  return (
    <header style={{ backgroundColor: props.bgColor, padding: "20px" }}>
      {props.children}
    </header>
  );
}

function Avatar({ img, size, name }) {
  return (
    <div>
      <img
        src={img}
        height={size}
        width={size}
        style={{ borderRadius: "50%" }}
        alt={name}
      />
    </div>
  );
}
