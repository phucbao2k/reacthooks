import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import {useState} from 'react'
const App = ()=> {
  const handleEventClick = (event) => {
    console.log('clicked', event.target.value);
    //*event.target.value tức là lấy value từ event trong html/reactjs, thường áp dụng cho các thẻ select, input...
  }
  return (
    <div className="App">
      <Nav/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Since 2023...
        </p>
        <input type="text" value="haha" onClick={(event) => handleEventClick(event)}/>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
