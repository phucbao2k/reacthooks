import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState } from 'react';
const App = () => {
  let [year, setYear] = useState('2023');
  let[address, setAddress] = useState('');
  //đây là state trong react-hooks, phần tử đầu tiên là biến, phần tử thứ 2 là function
  //xử lý biến khi dữ liệu thay đổi
  const handleEventClick = (event) => {
    setYear(address);
    //sau khi chạy đến hàm set... trong hooks, react sẽ tự nhận biết và re-render lại giá trị biến
    console.log('clicked', year);
  }
  const handleOnChangeInput = (event) => {
setAddress(event.target.value);
 //*event.target.value tức là lấy value từ event trong html/reactjs, thường áp dụng cho các thẻ select, input...
  }
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Since {year}...
        </p>
        <input type="text" value="haha" onClick={(event) => handleEventClick(event)} />

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
