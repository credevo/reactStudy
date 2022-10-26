import './App.css';
import Profile from './components/Profile';
// import Profile from 'components/Profile';

const AppProfile = ()=> {
  return (
   <>
    <Profile imgUrl={'./ironman.jpeg'} name={'아이언맨'} job={'천재 엔지니어'}/>
    <Profile imgUrl={'./captine.jpeg'} name={'캡틴 아메리카'} job={'솔져'}/>
    <Profile imgUrl={'./hulk.jpeg'} name={'헐크'} job={'소년 장사'}/>
   </>

  );
}

export default AppProfile;
