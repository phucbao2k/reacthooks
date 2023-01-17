import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
const App = ()=> {
  const handleEventClick = (event) => {
    console.log('clicked', event.target.value);
  }
  return (
    <div className="App">
      <Nav/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Since 2023...
        </p>
        <input type="text"/>
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
