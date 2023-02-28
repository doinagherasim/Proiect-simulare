import JavaScriptExercices from "./JavaScript";
import ReactBascics from "./React";

function App() {
const ListOfDetails = [
  {
    id: 0,
    name: "Person 1",
    title: "Fruits",
    items: [
      'apple', 'banana', 'cherry'
    ]
  },
  {
    id: 1,
    name: "Person 2",
    title: "Vegetables",
    items: [
      'carrot', 'pepper', 'tomato'
    ]
  },
  {
    id: 2,
    initialText: "Love",
    newText: "Books"
  }
];

  return (
    <div>
      <h2>Let's get started!</h2>
      <JavaScriptExercices/>
      <ReactBascics name={ListOfDetails.name} title={ListOfDetails.title} items={ListOfDetails.items}
      initialText={ListOfDetails.initialText} newText={ListOfDetails.newText}/>
    </div>
  );
}

export default App;
