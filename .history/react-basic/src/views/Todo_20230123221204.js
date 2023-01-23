const Todo = (props) =>{
    const t
    return(
        <ul className='todos-container'>
            {/* cần có key khi duyệt qua hàm map là để react biết nó cần re-render ở phần tử nào */}
            {todos.map(todo => {
                console.log('todo la cai nay:', todo);
                return (
                    <li className='todo-child' key={todo.id}>{todo.title}</li>
                )
            })}
        </ul>
    )
}
export default Todo;
