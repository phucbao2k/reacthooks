import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState } from 'react';
const App = () => {
  let [year, setYear] = useState('2023');
  let [address, setAddress] = useState('');
  const [todos, setTodos]= useState([
    {id:'1', title:'Thit kho hot vit'},
{id:'2', title:'banh chung'},
{id:'3', title:'banh tet'}
  ]);
  //đây là state trong react-hooks, phần tử đầu tiên là biến, phần tử thứ 2 là function
  //xử lý biến khi dữ liệu thay đổi
  const handleEventClick = (event) => {
    if(!address){
      alert('Empty input!');
      return;
    };
    let newTodo = {id: 'abc', title: address}
    setTodos([...todos, newTodo]);
    setAddress('');
    //sau khi chạy đến hàm set... trong hooks, react sẽ tự nhận biết và re-render lại giá trị biến
    console.log('clicked', year);
  }
  const handleOnChangeInput = (event) => {
    //sau khi chạy đến hàm set... trong hooks, react sẽ tự nhận biết và re-render lại giá trị biến
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
        <ul className='todos-container'>
          {todos.map(todo =>{
            console.log('todo la cai nay:', todo);
            return(
              <li className='todo-child' key={todo.id}>{</li>
            )
          })}
        </ul>
        <input type="text" value={address} onChange={(event) => handleOnChangeInput(event)} />
        <button type="button" onClick={(event) => handleEventClick(event)}>Click here</button>
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
