import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HTMLPage } from './w3schools/pages/HTMLPage';

// <button>

/*

1. Home, About Us, Contact Us, Product, Featured, Cart
2. Header, Nav, Sidebar, Main, Footer, Modal, Popup
3. Button, Headings, Links, Dropdowns

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

  const example = <>
    <div></div>
    <span></span>
  </>;

  if (true) {
    return <W3SchoolsSite />;
  }

  return (
    <>
      <div>
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
