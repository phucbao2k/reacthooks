const Todo = (props) =>{
    const { myData, allTodo, handleEventDelete } = props;
    const deleteTodo = (id) => {
        handleEventDelete()
    }
    //cách viết khác:
    return(
        <>
        <div className="title-container">
{allTodo}
        </div>
            <ul className='myData-container'>
                {/* cần có key khi duyệt qua hàm map là để react biết nó cần re-render ở phần tử nào */}
                *Using Reusing components
                {myData.map(todo => {
                    console.log('todo la cai nay:', todo);
                    return (
                        <li className='todo-child' key={todo.id}>{todo.title}</li>
                    )
                })}
                <hr></hr>
            </ul>
            
        </>
       
    )
}
export default Todo;
