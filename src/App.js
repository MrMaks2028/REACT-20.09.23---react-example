let name = "Admin";
let isAuth = true;

function getName(name) {
  return name.toUpperCase();
}

function App() {
  return (
    <div>
      Hello, {getName(name)}!

      {
      (isAuth) 
        ? <h2>Истина</h2> 
        : <h2>Ложь</h2>
      }
    </div>
  );
}

export default App;
