import "./App.css";
import List from "./List.js";
import Form from "./Form.js";

let list = [
  {id: 1, title: "Завершить проект на Vue", done: true},
  {id: 2, title: "Завершить проект на React", done: false}
]

function add(title) {
  console.log(title);
  list.push({
    id: list[list.length - 1].id + 1,
    title: title,
    done: false
  })
}

function App() {
  return (
    <div>
    <Form onAdd={add} />
    <List taskList={list} />

    </div>
  );
}

export default App;
