import logo from './logo.svg';
import './App.css';

function App() {
  const name = '엘리';
  const list =['우유','딸기','바나나'];

  return (
    <div className="App">
      <h1 className="orange">
        hello
      </h1>
      <h1>
        hello
      </h1>
      <h2>
      {name} 
    </h2>
    
      <ul>
        {list.map(l => <li>{l}</li>)}
      </ul>
    <div>
    <img style={{
        width : '200px', height: '200px'
      }} src="https://cdn.crowdpic.net/list-thumb/thumb_l_572442AD59D1F0170C27B68AC7F4377A.jpg" /></div>  
    </div>
  );
}

export default App;
