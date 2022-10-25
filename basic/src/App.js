import logo from './logo.svg';
import './App.css';

function App() {
  const name = '엘리';
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
        <li>우유1</li>
        <li>우유2</li>
        <li>우유3</li>
        <li>우유4</li>
        
      </ul>
      <img style={{
        width : '200px', height: '200px'
      }} src="https://cdn.crowdpic.net/list-thumb/thumb_l_572442AD59D1F0170C27B68AC7F4377A.jpg" />
    </div>
  );
}

export default App;
