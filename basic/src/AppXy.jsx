import React, { useEffect, useState } from "react";
import "./AppXY.css";

export default function AppXy() {
  const [pointXy, setPointXy] = useState({ x: 0, y: 150 });

  const mousePoint = (e) => {
    var x = e.clientX;
    var y = e.clientY;
    // setPointXy({ x: x - 15, y: y - 15 });
    // setPointXy({ x: e.clientX, y: e.clientY });
    setPointXy((prev) => ({ ...prev, x: e.clientX })); //객체를 리턴할때는 () 를 쓴다.
  };
  /**
   * 연관된 state라면 객체로 같이 묶어서 state를 관리
   */
  return (
    <div className="container" onMouseMove={mousePoint}>
      <div
        className="pointer"
        // style={{ top: `${pointXy.y}px`, left: `${pointXy.x}px` }}
        style={{ transform: `translate(${pointXy.x}px, ${pointXy.y}px)` }}
      ></div>
    </div>
  );
}
