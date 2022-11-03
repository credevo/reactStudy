import React, { useReducer } from "react";
import AppMento from "./components/AppMento";
import peopleReducer from "./reducer/people-reducer";

export default function AppMentos() {
  const [people, dispatch] = useReducer(peopleReducer, initailData);

  const handleUpdated = () => {
    const before = prompt("어느 멘토를 ?");
    const after = prompt("누구로 바꿀꺼야?");
    dispatch({ type: "updated", before, after });
  };
  const handleAdded = () => {
    const name = prompt("추가할 멘토 이름은 ?");
    if (!people.mentos.some((m) => m.name === name)) {
      const title = prompt("타이틀은 ?");
      dispatch({ type: "addded", name, title });
    } else {
      alert("중복된 name이에여");
    }
  };
  const handleDeleted = () => {
    const name = prompt("삭제할 멘토 이름은 ?");
    dispatch({ type: "deleted", name });
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
