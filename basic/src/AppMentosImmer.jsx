import React from "react";
import AppMento from "./components/AppMento";
// import peopleReducer from "./reducer/people-reducer";

import { useImmer } from "use-immer";

export default function AppMentosImmer() {
  const [people, updatePeople] = useImmer(initailData);

  const handleUpdated = () => {
    let name = prompt("어느 멘토를 ?");
    let changeName = prompt("누구로 바꿀꺼야?");
    updatePeople((people) => {
      let changeMento = people.mentos.find((mento) => mento.name === name);
      changeMento.name = changeName;
    });
  };
  const handleAdded = () => {
    const name = prompt("추가할 멘토 이름은 ?");
    if (!people.mentos.some((m) => m.name === name)) {
      const title = prompt("타이틀은 ?");
      updatePeople((people) => {
        people.mentos.push({ name, title });
      });
    } else {
      alert("중복된 name이에여");
    }
  };
  const handleDeleted = () => {
    const name = prompt("삭제할 멘토 이름은 ?");
    updatePeople((people) => {
      const index = people.mentos.findIndex((mento) => mento.name === name);
      if (index !== -1) people.mentos.splice(index, 1);
    });
  };

  return (
    <>
      <div className="mentoInfo">
        {`${people.name}/ ${people.title}`} 멘토는 누구인가?ㅋ
      </div>
      <div className="mentoList">
        <ul>
          {people.mentos?.map((mento, index) => (
            <AppMento {...mento} key={index} />
          ))}
        </ul>
      </div>
      <div className="buttonArea">
        <button onClick={handleUpdated}>멘토 바꾸기</button>
        <button onClick={handleAdded}>멘토 추가</button>
        <button onClick={handleDeleted}>멘토 삭제</button>
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
