import React, { useState } from "react";
import AppMento from "./components/AppMento";

export default function AppMentos() {
  const [people, setPeople] = useState(initailData);
  const changeName = () => {
    const before = prompt("어느 멘토를 ?");
    const after = prompt("누구로 바꿀꺼야?");

    setPeople((prev) => ({
      ...prev,
      mentos: prev.mentos.map((mento) => {
        if (mento.name === before.trim()) {
          return { ...mento, name: after };
        }
        return mento;
      }),
    }));
  };
  const addMento = () => {
    const name = prompt("추가할 멘토 이름은 ?");
    if (!people.mentos.some((m) => m.name === name)) {
      const title = prompt("타이틀은 ?");

      setPeople((prev) => ({
        ...prev,
        mentos: [
          ...prev.mentos,
          {
            name,
            title,
          },
        ],
      }));
    } else {
      alert("중복된 name이에여");
    }
  };
  const deleteMento = () => {
    const name = prompt("삭제할 멘토 이름은 ?");
    setPeople((prev) => ({
      ...prev,
      // mentos: [...prev.mentos.filter((mento) => mento.name !== name)],
      mentos: prev.mentos.filter((mento) => mento.name !== name),
    }));
  };

  return (
    <>
      <div className="mentoInfo">
        {`${people.name}/ ${people.title}`} 멘토는 누구인가?ㅋ
      </div>
      <div className="mentoList">
        <ul>
          {people.mentos.map((mento, index) => (
            <AppMento {...mento} key={index} />
          ))}
        </ul>
      </div>
      <div className="buttonArea">
        <button onClick={changeName}>멘토 바꾸기</button>
        <button onClick={addMento}>멘토 추가</button>
        <button onClick={deleteMento}>멘토 삭제</button>
      </div>
    </>
  );
}

const initailData = {
  name: "creo",
  title: "힘내자",
  mentos: [
    {
      id: 1,
      name: "마이클",
      title: "천재",
    },
    {
      id: 2,
      name: "폴",
      title: "바보",
    },
  ],
};
