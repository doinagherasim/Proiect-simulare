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
   // toogle change backround
    const [isToggled, setIsToggled] = useState(false);
    const clickColor = () => {
        if(!isToggled) {
        setIsToggled(true);
        } else if(isToggled) {
            setIsToggled(false);
        }
    }

    // add items to a list

    const [item, seItem] = useState("");
    const [list, setList] = useState([{
        id:0,
        title: "item1"
    }]);

    const newItem = (e) => {
        seItem(e.target.value)
    };

    const submitNewItem=(e)=>{
    e.preventDefault();
    const newItem = {
        id: e.target.item.index,
        title: e.target.item.value,
    }
    setList([...list, newItem]);
    };

    // delete from a list 
    const [teaList, setTeaList] = useState ([
        {id: 0,
        title: "green tea"},
        {id: 1,
        title: "yellow tea"},
        {id: 3,
        title: "black tea"},
    ]);

    const deleteTea = (index) => {
    const newTeaList = [...teaList];
    newTeaList.splice(index,1);
    setTeaList([...newTeaList]);
    }

    // change btn text
    const [text, setText] = useState(props.initialText);
    const changeText = () => {
        setText(props.newText);
    }

    const [value, setValue] = useState("");
    const showAlert = (e) => {
    e.preventDefault();    
    alert(value);
    };
    





    return (
        <div>
            <br></br>
            <h4>EX. 1- Counter</h4>
        <p>{counter}</p>
        <button onClick={clickCounter}>ClickCounter</button>
        <br></br>
            <h4>EX. 2 - Delete task</h4>
            <div>
            {
                tasks.map((element, index) => 
                <div key={index}>
                    <p>{element.title}</p>
                    <button onClick={()=> deleteTasks(index)}>Remove</button>
                </div>)
            }
            </div>
            <br></br>
            <h4>EX. 3- Add task</h4>
            <form onSubmit={addTasks}>
            <input placeholder="write your tasks" name="item"></input>
            <button>Add task</button>
            </form>
            <br></br>
            <h4>EX. 4 -Alert with form summary</h4>
            <form onSubmit={checkSummary}>
                <label>Name:</label>
                <input placeholder="your name"  id="name" type="name" value={name} onChange={(e)=>setName(e.target.value)}></input>
                <label>email:</label>
                <input placeholder="email" id="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                <label>message:</label>
                <input placeholder="message" id="msg" type="msg" value={msg} onChange={(e)=>setMsg(e.target.value)}></input>
                <button>Submit</button>
            </form>
            <br></br>
            <h4>EX. 5- Map</h4>
            <div>
                <ul>
                    {
                       books.map((element, index) => 
                        <li key={index}>{element}</li>
                       )
                    }
                </ul>
            </div>
            <br></br>
            <h4>EX. 6- Change message</h4>
            <div>
                <p>{message}</p>
                <button onClick={changeMessage}>Change message</button>
            </div>
            <br></br>
            <h4>EX. 7- Alert from input</h4>
            <form onSubmit={showWord}>
                <p>enter text</p>
                <input placeholder="write your favorite word" id="word" name="word" type="word" value={word} onChange={changeWord}></input>
                <button type="submit">Show</button>
            </form>
            <br></br>
            <h4>EX. 8- Change backround color</h4>
            <div style={isToggled ? {backgroundColor:"green", width:100, height:100} : {backgroundColor:"blue", height:100, width:100}}></div>
            <button onClick={clickColor}>Change backround color to: {isToggled ? "GREEN" : "BLUE" }</button>
            <br></br>
            <h4>EX. 9- Add item</h4>
            <ul>
                {
                list.map((element, index) =>
                    <li key={index}>{element.title}</li>
                )
                }
            </ul>

            <form onSubmit={submitNewItem}>
                <input  id="item" value={item} onChange={newItem}/>
                <button>Add item</button>
            </form>

            <br></br>
            <h4>EX. 10- Delete item</h4>   
            <ul>
                {
                 teaList.map((element, index) => 
                        <div key={index}>
                        <li>{element.title}</li>
                        <button onClick={(index)=>{deleteTea(index)}}>Delete</button>
                    </div>
                )}
            </ul> 
            <br></br>
            <h4>EX. 11- Button change text with props</h4> 
            <button onClick={changeText}>{text}</button>
            <br></br>
            <h4>EX. 12- Alert from input</h4>
            <form onSubmit={showAlert}> 
            <input value={value} onChange={(e)=> setValue(e.target.value)}/>
            <button type="submit">Show alert</button>
            </form>

            <br></br>
            <h4>EX. 13- Toogle show/ hide</h4>
            
    </div>
    )
}


export default ReactBascics;

