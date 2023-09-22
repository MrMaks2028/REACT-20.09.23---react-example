export default function List(props) {
    return (
        <ul>
            {props.taskList.map((task) => 
            <li key={task.id} class={(task.done) ? "done" : ""}>
            <span> onClick={() => props.onDone(task.id)} {task.title}</span>
            <button onClick={() => props.onRemove(task.id)}>Удалить</button> </li>)}
        </ul>
    )
}