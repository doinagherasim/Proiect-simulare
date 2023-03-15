import React from "react";
import ListOfItems from "./App/ListOfItems";
import JavaScriptExercices from "./JavaScript";
import ReactBascics from "./React";

function App() {
const books = ['Atomic Habits', 'Supranatural', 'The psichology of money'];
const bookList = ["atomic habits", "Psichology of Money", "Placebo"]

  return (
    <div>
      <h2>Let's get started!</h2>
      <ListOfItems bookList={bookList}/>
      <JavaScriptExercices/>
      <ReactBascics books={books}/>
    </div>
  );
}

export default App;
