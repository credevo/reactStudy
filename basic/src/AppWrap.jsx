import React from "react";

export default function AppWrap() {
  return (
    <div>
      <Navbar />
    </div>
  );
}

function Navbar() {
  return (
    <header style={{ backgroundColor: "yellow" }}>
      <Avatar size={200} img={"./ironman.jpeg"} />
      <p>안녕하세요</p>
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
