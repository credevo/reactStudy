import React, { useState } from "react";

export default function AppMento() {
  const [people, setPeople] = useState({
    name: "creo",
    title: "힘내자",
    mento: {
      name: "마이클",
      title: "천재",
    },
  });
  return (
    <>
      <div>{`${people.name}/ ${people.title}`} 멘토는 누구인가?ㅋ</div>
      <div>{`${people.mento.name} 는 ${people.mento.title} 이시다`}</div>
      <div>
        <span>
          <button
            onClick={() => {
              const name = prompt("멘토 누구로 바꿀꺼야?");
              setPeople((prev) => ({
                ...prev,
                mento: { ...prev.mento, name },
              }));
            }}
          >
            멘토 바꾸기
          </button>
        </span>
        <span>
          <button
            onClick={() => {
              const title = prompt("타이틀 뭐로 바꿀꺼야?");
              setPeople((prev) => ({
                ...prev,
                mento: { ...prev.mento, title },
              }));
            }}
          >
            타이틀 바꾸기
          </button>
        </span>
      </div>
    </>
  );
}
