import Form from './Form.js';

let name = "Admin";
let isAuth = true;

let className = "active";

let list = [
  {id: 1, title: 'Lorem'},
  {id: 2, title: 'Ipsum'},
  {id: 3, title: 'Dolor'}
]

function getName(name) {
  return name.toUpperCase();
}

function App() {
  return (
    <div class={className}>
      <Form val={name} />

      Hello, {getName(name)}!

      {
      (isAuth) 
        ? <h2>Истина</h2> 
        : <h2>Ложь</h2>
      }
      
      <ul>
        {list.map((item) => <li>{item.title}</li>)}
      </ul>
    </div>
  );
}

export default App;
