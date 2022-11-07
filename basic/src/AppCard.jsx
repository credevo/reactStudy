import React from "react";
import Card from "./components/Card";

export default function AppCard() {
  return (
    <div className="container">
      <Card>
        <h1>어서오세요</h1>
        <p>하이</p>
      </Card>
      <Card>
        <h1>나는 카드 컴포넌트</h1>
        <img src="./ironman.jpeg" width="50%" height="50%" />
      </Card>
    </div>
  );
}
