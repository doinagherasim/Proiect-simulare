import React from "react";
import { useState } from "react";

// 1-counter

function ReactBascics(props) {
    // 1-st COUNTER
    const [counter, setCounter]=useState(0);
    const clickCounter = () => {
    setCounter(counter+1);
    }
    
    // 2-nd LIST add remove
    const [tasks, setTasks] = useState([
        {id:1,
        title: "read 5 pages",
        complete: true},
        {id:2,
            title: "read 10 pages",
            complete: true}
    ]);

    // delete 
    const deleteTasks=(index)=>{
    const newTasks = [...tasks];
    newTasks.splice(index,1);
    setTasks(newTasks);
    };

    // addTasks
   const addTasks =(e) => {
   e.preventDefault();
   const newTask = {
   id: e.target.item.index,
   title: e.target.item.value,
   complete: false
   };
   setTasks([...tasks, newTask])
   };

   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [msg, setMsg] = useState("");

   const checkSummary = (e) => {
    e.preventDefault();
    alert(`Name: ${name}, \n Email: ${email}, \n Message: ${msg}`)
   };

   // list of books
   const books = ["atomic habits", "supranatural", "grit"];

   // change MSG
   const [message, setMessage] = useState("Show the message for today!");

   const changeMessage = () => {
    setMessage("You did it!")
   }

   // show
   const [word, setWord] = useState("");

   const showWord = (e) => {
    e.preventDefault();
    alert(word)
    setWord('');
   }

   const changeWord = (e) => {
   setWord(e.target.value);
   }


    return (
        <div>
        <p>{counter}</p>
        <button onClick={clickCounter}></button>
            <div>
            {
                tasks.map((element, index) => 
                <div key={index}>
                    <p>{element.title}</p>
                    <button onClick={()=> deleteTasks(index)}>Remove</button>
                </div>)
            }
            </div>
            <form onSubmit={addTasks}>
            <input placeholder="write your tasks" name="item"></input>
            <button>Add task</button>
            </form>
            
            <form onSubmit={checkSummary}>
                <label>Name:</label>
                <input placeholder="your name"  id="name" type="name" value={name} onChange={(e)=>setName(e.target.value)}></input>
                <label>email:</label>
                <input placeholder="email" id="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                <label>message:</label>
                <input placeholder="message" id="msg" type="msg" value={msg} onChange={(e)=>setMsg(e.target.value)}></input>
                <button>Submit</button>
            </form>

            <div>
                <ul>
                    {
                       books.map((element, index) => 
                        <li key={index}>{element}</li>
                       )
                    }
                </ul>
            </div>

            <div>
                <p>{message}</p>
                <button onClick={changeMessage}>Change message</button>
            </div>

            <form onSubmit={showWord}>
                <p>enter text</p>
                <input placeholder="write your favorite word" id="word" name="word" type="word" value={word} onChange={changeWord}></input>
                <button type="submit">Show</button>
            </form>
        
        </div>
    )
}


export default ReactBascics;

