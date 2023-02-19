function App() {

function minValue(numbers) {
  let min = numbers[0];
  for (let i = 0; i<numbers.length; i++) {
    if(numbers[i] < min) {
      min = numbers[i];
    }
  }
  return min;
};

console.log(minValue([9,5,3,2]))


  return (
    <div>
      <h2>Let's get started!</h2>
      
    </div>
  );
}

export default App;
