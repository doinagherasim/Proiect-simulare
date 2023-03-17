import React from "react";
import { useState, useEffect } from "react";
import Component1 from "./Component1"
import Component2 from "./Component2"

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

    // 3.  delete 
    const deleteTasks=(index)=>{
    const newTasks = [...tasks];
    newTasks.splice(index,1);
    setTasks(newTasks);
    };

    // 4. addTasks
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

   //5.  list of books
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

    // 11. change btn text
    const [text, setText] = useState(props.initialText);
    const changeText = () => {
        setText(props.newText);
    }

    const [value, setValue] = useState("");
    const showAlert = (e) => {
    e.preventDefault();    
    alert(value);
    };

    //show - hide text
    const [showText, setShowText] = useState(false);
    const showHideBtn = () => {
        if (showText === false) {
            setShowText(true);
        } else if (showText === true) {
            setShowText(false)
        }
    }

    // form & summary
    const [yourName, setYourName] = useState("");
    const [yourSurname, setYourSurname] = useState("");
    const [yourAddress, setYourAddress] = useState("");

    const submitFormHandler = (event) => {
        event.preventDefault();
        alert(`Name:${yourName}\n Surname:${yourSurname} \n Address:${yourAddress}`)
    }

    // to do list

    const [toDoList, setToDolist] = useState([
        "read 5 pages", "finish header design"
    ]);

    const deleteItemsToDo = (index) => {
        const newToDo = [...toDoList];
        newToDo.splice(index,1);
        setToDolist(newToDo);
    };

    const [newToDo, setNewToDo] = useState("");

    const addToDo = () => {
        setToDolist([...toDoList, newToDo]);
        setNewToDo("");
    }

    // cpounter odd after 5 sec

    const [countNumbers, setcountNumbers] = useState(1);
    const [display, setDisplay] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDisplay(true);
        }, 5000)
        
        return () => {
            clearTimeout(timeout);
        };
    }, [])

    const countNumbersHandler = () => {
          setcountNumbers(countNumbers + 2)
    };

    //19
    const [numberStart, setNumberStart] = useState(0);
    const [numberList, setNumberList] = useState([]);

    const countStartHandler = () => {
      setNumberStart(numberStart +1);
      let newList = [...numberList];
        newList.push(numberStart);
        setNumberList([...numberList, numberStart]);
    };

    const evenItems = numberList.filter((num) => num % 2 === 0);
    const stringlist = evenItems.join(",");

    // 22. render components
    const [component, setComponenent] = useState(null);
    const [showComponent, setShowComponent] = useState(null);

    const showComponents = () => {
     if (component === "1") {
        setShowComponent(<Component1/>)
        console.log("comp1", component)
     } else if (component === "2") {
        setShowComponent(<Component2/>)
        console.log("comp2", component)
     } else {
        setShowComponent("No component found with this name")
     }
    }

    // 23. Favorite color
    const [color, setColor] = useState("");
    const submitColor =(e) => {
        e.preventDefault();
        setColor(color)
        alert(`${color}`)
    }

    return (
        <div className="container">
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
            <h4>EX. 8- Change div color</h4>
            <div style={isToggled ? {backgroundColor:"green", width:300, height:200} : 
            {backgroundColor:"blue", height:200, width:300}}>CLICK BUTTON BELOW TO CHANGE COLOR</div>
            <button onClick={clickColor}>Change bg color: {isToggled ? "GREEN" : "BLUE" }</button>
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
            <p>{text}</p>
            <button onClick={changeText}>Click me!</button>
            <br></br>
            <h4>EX. 12- Alert from input</h4>
            <form onSubmit={showAlert}> 
            <input value={value} onChange={(e)=> setValue(e.target.value)}/>
            <button type="submit">Show alert</button>
            </form>

            <br></br>
            <h4>EX. 13- Toogle show/ hide</h4>
            <pre style={{color:"white"}} className={showText ? "" : "hide"}>
                React is a free and open-source front-end JavaScript library 
                <br></br>
                for building user interfaces based on components. It is maintained by Meta 
                 <br></br>
                and a community of individual developers and companies.
            </pre>
            <button onClick={showHideBtn}>{showText ? "Hide" : "Show"}</button>

            <br></br>
            <h4>EX. 14- List using props</h4>
            <ul>
                {
                    props.books.map((element, index) => 
                    <li key={index}>{element}</li>)
                }
            </ul>

            <br></br>
            <h4>EX. 15- Form: name, surname, address & Summary la submit </h4>

            <form onSubmit={submitFormHandler}>
                <label>Name:</label><input placeholder="name" type={text} name="name" 
                onChange={(event)=>setYourName(event.target.value)}/>
                <label>Surname:</label><input placeholder="surame" type={text} name="surname"
                onChange={(event) => setYourSurname(event.target.value)}/>
                <label>Address:</label><input placeholder="address" type={text} name="address"
                onChange={(event) => setYourAddress(event.target.value)}/>
                <button type="submit">Submit form</button>
            </form>

            <br></br>
            <h4>EX. 16- To do list: add items, remove items </h4>

            <h5>TO DO LIST</h5>
        <div>
           <ul> 
            {
            toDoList.map((element, index) => 
            <li key={index}>
            {element}
            <button onClick={() => deleteItemsToDo(index)}>Delete</button>
        </li>
        )}
           </ul>
           <input placeholder="add new task" type={text} 
           onChange={(event) => setNewToDo(event.target.value) }></input>
           <button onClick={addToDo}>Add item</button>

        </div>

            <br></br>
            <h4>EX. 18- Counter, desplay odd numbers after 5 seconds </h4>
            <div> { display && (
                <div>
            <p>{countNumbers}</p>
            <button onClick={countNumbersHandler}>Click me!</button>
            </div>
            )}
            </div>

            <br></br>
            <h4>EX. 19- Create a button that increments a counter, and show the counter.</h4> 

            <p>{numberStart}</p> 
            <button onClick={countStartHandler}>Count</button>  

            <br></br>
            <h4>EX. 20- Now, instead of updating the counter, add every even number to a list
 *    and show the list under the button. So if I press the button 5 times,
 *    I'll see a list "0,2,4,6.."</h4>

            <p>{stringlist}</p>
            <h4>EX. 21- Add the nombers from ex. 19</h4>
            <p>{numberList.reduce((acc, current) => acc +current, 0)}</p>

            <br></br>
            <h4>EX. 22- Render different components based on a value from input</h4>
            <p>Type what component do you want to see: 1 or 2</p>
            <h3>{showComponent}</h3>
            <input type={text} placeholder="component 1 or 2" onChange={(event)=>setComponenent(event.target.value)}/>
            <button onClick={showComponents}>Show component!</button>

            <br></br>
            <h4>EX. 23- Submit fav color from selected input</h4>
            <form onSubmit={submitColor}>
                <p>Submit your favorite color from the below:</p>
                <select value={color} onChange={(event)=>setColor(event.target.value)}>
                    <option>Red</option>
                    <option>Green</option>
                    <option>Blue</option>
                    <option>Yellow</option>
                    <option>White</option>
                    <option>Black</option>
                </select>
                <button type="submit">Submit color!</button>
            </form>
            
    <p className="finish">FINISH</p>        
    </div>
    )
}


export default ReactBascics;

