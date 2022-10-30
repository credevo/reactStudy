import { useState } from 'react';
import './App.css';
import Avatar from './components/Avatar';
import Profile from './components/Profile';
// import Profile from 'components/Profile';
import Counter from './components/Counter';

const AppProfile = ()=> {
  const [isShowAvarta, setIsShowAvarta] =  useState(false);
  const handleClick = ()=>{
    setIsShowAvarta(!isShowAvarta);
  }
  return (
   <>
    <button onClick={handleClick} >button</button>
    {isShowAvarta && <Avatar imgUrl="./ironman.jpeg" isNew={true}/>}
    <Profile imgUrl={'./ironman.jpeg'} name={'아이언맨'} job={'천재 엔지니어'} isNew={true}/>
    <Profile imgUrl={'./captine.jpeg'} name={'캡틴 아메리카'} job={'솔져'}/>
    <Profile imgUrl={'./hulk.jpeg'} name={'헐크'} job={'소년 장사'} isNew={true}/>
   </>

  );
}

export default AppProfile;
