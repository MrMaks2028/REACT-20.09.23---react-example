import "./App.css";
import List from "./List.js";
import Form from "./Form.js";
import { useState } from "react";

  function add(title, setState, state) {
    state.push({
      id: state[state.length - 1].id + 1,
      title: title,
      done: false
    });
  };

  function done(id, setState, state) {
    setState(state.map((task) => {
      if(id = task.id) {
        task.done = !task.done
      }
      return task;
    }));
  };

  function remove(id, setState, state) {
    setState(state.filter((task) => id != task.id))
  }

  function App() {
    const [state, setState] = useState([
        {id: 1, title: "Завершить проект на Vue", done: true},
        {id: 2, title: "Завершить проект на React", done: false}
    ]); 

  return (
    <div>
    <Form onAdd={(title) => add(title, setState, state)} />
    <List onRemove={(id) => remove(id, setState, state)} onDone={(id) => done(id, setState, state)} taskList={state} />

    </div>
  );
}

export default App;
