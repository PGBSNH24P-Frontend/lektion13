import { use, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HTMLPage } from './w3schools/pages/HTMLPage'

// <button>

/*

Vanlig struktur att använda för React komponenter:
1. Home, About Us, Contact Us, Product, Featured, Cart
2. Header, Nav, Sidebar, Main, Footer, Modal, Popup
3. Button, Headings, Links, Dropdowns

Exempel med W3Schools webbsida:
HTML page
  Nav header
    Icon
    Links
    Dropdowns
    Search field
  Nav header 2
  Sidebar left
    Links
  Main content
    Headings
    Paragraphs
  Sidebar right
  Footer

*/

function TestComponent() {
  return <div>Hej!</div>;
}

function W3SchoolsSite() {
  return <HTMLPage />;
}

function Counter() {
  const [counter, setCounter] = useState(0);
  const [inputText, setInputText] = useState("");

  // temp[0] = variabeln
  // temp[1] = funktion

  const handleClick = (event) => {
    event.stopPropagation();
    event.preventDefault();

    // Öka counter genom state funktion
    let newCounter = counter + 1;
    setCounter(newCounter);
    console.log(newCounter);
  };

  const handleInput = (event) => {
    setInputText(event.target.value);
    console.log(event);
  };

  // Ekvivalent med:
  // element.addEventListener();

  return <>
    <div>{counter}</div>
    <button onClick={handleClick}>Increment</button>

    <input value={inputText} onChange={handleInput} />
    <div>{inputText}</div>

    { /*<button onClick={(event) => counter++}>Increment</button>
    <button onKeyDown={(event) => counter++}>Increment</button > */}
  </>;
}

// Visas upp för varje todo som skapas
// Funktioner för att radera och uppdatera todos skickas med
function TodoItem({ todo, removeTodo, updateTodo }) {
  return <>
    <span>{todo.title}</span>
    <input checked={todo.completed} type="checkbox" onChange={() => updateTodo(todo)} />
    <button onClick={() => removeTodo(todo)}>Remove</button>
  </>;
}

function TodoApp() {
  // Håller koll på de todos som skapas 
  const [todos, setTodos] = useState([]);
  const [createTodoTitle, setCreateTodoTitle] = useState("");

  // Anropas när komponenten laddas in
  // (Mounting)
  useEffect(() => {
    //alert("TEST");

    // Anropas när komponenten försvinner
    // (Unmounting)
    return () => {
      console.log("TEST");
    };
  }, []);

  // Lägg till element i arrayer med states genom spread operatorn
  const createTodo = () => {
    setTodos([{ title: createTodoTitle, completed: false }, ...todos]);
    setCreateTodoTitle("");
  };

  // Radera element från arrayer med states genom .filter
  const removeTodo = (todo) => {
    setTodos(todos.filter(all => all !== todo));
  };

  // Uppdatera element i arrayer med states genom .map
  const updateTodo = (todo) => {
    setTodos(todos.map(all => {
      if (all === todo) {
        return { ...todo, completed: !todo.completed }
      }

      return all;
    }));
  };

  return <>
    <h1>Todos</h1>

    <label>Todo Title</label>
    <input value={createTodoTitle} onChange={event => setCreateTodoTitle(event.target.value)} />
    <button onClick={createTodo}>Create Todo</button>

    {/* Rita ut en TodoItem komponent för varje todo objekt */}
    <ul>
      {todos.map(todo => <li><TodoItem todo={todo} removeTodo={removeTodo} updateTodo={updateTodo} /></li>)}
    </ul>
  </>;
}

function App() {
  let container = <div></div>;
  let container2 = document.createElement("div");

  // class="något" => className="något"

  const greeting = "Hello!";
  const languages = [
    "C#",
    "JavaScript",
    "HTML",
    "CSS"
  ];

  const renderLanguages = () => {
    return languages.map(language => <li>{language}</li>)
  };

  const renderedLanguages = languages.map(language => <li>{language}</li>);

  const user = {
    name: "Ironman",
    email: "tony@stark.com"
  };

  // Endast en parent kan finnas per JSX kod
  // Använda fragments <> för att wrappa element, eller divs till exempel
  const example = <>
    <div></div>
    <span></span>
  </>;

  if (true) {
    return <TodoApp />;
  }

  /*if (true) {
    return <W3SchoolsSite />;
  }*/

  return (
    <>
      <div>
        <Counter />
        {greeting}

        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />

        <ul>
          {languages.map(language => <li>{language}</li>)}
        </ul>

        <ul>
          {renderLanguages()}
        </ul>

        <ul>
          {renderedLanguages}
        </ul>

        <span>Name: {user.name} </span>
        <span>Email: {user.email}</span>
      </div>
    </>
  )
}

export default App
