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

console.log("minValue", minValue([9,5,3,2]))

function vowels(string) {
  let vowels = ["a", "u", "e", "i", "o"];
  let count = 0;
  for (let i=0; i<string.length; i++) {
  if(vowels.includes(string[i])){
    count ++;
  }
  }
  return count;
}

console.log("vowels", vowels("mamaiee"));

function diffMaxMin(numbers) {
  let max = numbers[0];
  let min = numbers[0];
  for (let i=0; i<numbers.length; i++) {
    if(numbers[i] > max) {
      max=numbers[i]
    } if(numbers[i] < min) {
      min = numbers[i]
    }
  }
  return max - min;
}

console.log("diffMaxMin", diffMaxMin([1,2,4,8]))

function removeVowels(string) {
  const vowels = ["a", "e", "i", "o", "u"];
  let newString = "";
  for (let i = 0; i<string.length; i++) {
    if(!vowels.includes(string[i].toLowerCase())){
      newString = newString + string[i];
    }
  }
  return newString;
}

console.log("removeVowels", removeVowels("doina"));

function sumNum(num1, num2) {
let sum =0;
for (let i=num1; i<=num2; i++) {
  sum += i;
}
return sum;
};

console.log("sumNum", sumNum(1,5));

function sumNum2(num1, num2) {
  let sum =0;
  if(num1 < num2) {
    for (let i=num1; i<=num2; i++) {
      sum += i;
    }
  } else if (num1 > num2) {
    for (let i=num2; i <= num1; i++) {
      sum +=i;
    }
  }
  return sum;
}

console.log("sumNum2", sumNum2(5,1));

function longetStr(arrayString) {
  let longest = "";
  for (let i =0; i<arrayString.length; i++) {
    if(arrayString[i].length > longest.length) {
         longest = arrayString[i];
    }
  }
  return longest;
}


console.log("longestString", longetStr(["hei hei hei hei heii", "hei hei hei hei", "hei hei"]));

// se impart la 1 si la ei singuri
function primeNum(number) {
  if(number < 2) {
    return false;
  }
  for (let i =2; i<number; i++) {
    if(number % i === 0) {
      return false;
    }
  }
  return true;
}

console.log("primeNum", primeNum(6));

function sortNum(numbers) {
  return numbers.sort(function(a,b) {
    return a-b;
  })
};

console.log("sortNum", sortNum([3,1,6,8,2]));

function firstLett(string) {
 return string.charAt(0).toUpperCase()+string.slice(1);
}

console.log("firstLett", firstLett("figaro"));

function avgArrStringLength(arrString) {
  let sum = 0;
  let avg = 0;
  for( let i=0; i<arrString.length; i++) {
    sum = sum + arrString[i].length;
    avg = sum / arrString.length;
  }
  return avg;
}

console.log("avgArrStringLength", avgArrStringLength(["hei", "doina", "apa"]));

function secondHighest(numbers) {
  numbers.sort((a,b) => b-a);
  for (let i=0; i<numbers.length; i++) {
    if(numbers[i] < numbers[0]) {
      return numbers[i];
    }
  }
  return null;
};

console.log(secondHighest([3,6,9,1,2]))

  return (
    <div>
      <h2>Let's get started!</h2>
      
    </div>
  );
}

export default App;
