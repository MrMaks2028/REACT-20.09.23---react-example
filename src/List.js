export default function List(props) {
    return (
        <ul>
            {props.taskList.map((task) => <li class={(task.done) ? "done" : ""}>{task.title}</li>)}
        </ul>
    )
}