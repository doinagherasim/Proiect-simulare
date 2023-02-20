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

console.log(secondHighest([3,6,9,1,2]));

function uniquesChar(string) {
  for (let i=0; i<string.length; i++) {
       if(string.indexOf(string[i]) !== string.lastIndexOf(string[i])) {
        return false;
       }
  }
  return true;
};

console.log("uniquesChar", uniquesChar("doinaa"));

function sortArrStrings(strings) {
  return strings.sort();
};

console.log("sortArrStrings", sortArrStrings(["doina", "apa","carte","cafea"]));

function sortConsonants (string) {
  const vowels = ["a", "e", "i", "o", "u"];
  let newString = "";
  for ( let i=0; i<string.length; i++) {
    if(!vowels.includes(string[i])){
      newString = newString + string[i];
    }
  }
  const splitString = newString.split("");
  const sortConsonants = splitString.sort().join("");
  return sortConsonants;
};

console.log("sortConsonants", sortConsonants("doinagherasim"))

function arrayObjSort (arrayObj, property) {
  return arrayObj.sort((a,b) => {
    if(typeof(a[property]) === "number" && typeof(b[property]) === "number") {
     return  a[property] - b[property];
    } else {
     return a[property].localeCompare(b[property]);
    }
  })
};

console.log("arrayObjSort", arrayObjSort([
  {id:5, name: "pavel", age: 34}, 
  {id:2, name:"ana", age:45}, 
  {id:3, name: "doina", age:70}], 
  "age"));

  function reverseNum(number) {
   const stringNumRev = number.toString().split("").reverse().join("");
   return stringNumRev;
  };

  console.log("reverseNum", reverseNum(1604));

function toTitleCase(string) {
return string.charAt(0).toUpperCase()+string.slice(1).toLowerCase();
};

function arrTitleCase(array) {
  return array.map((string)=> toTitleCase(string));
}
console.log("toTitleCase", toTitleCase("laptop"))
console.log("arrTitleCase", arrTitleCase(["laptop", "carte", "poezie"]))

function arrMultiple(numbers, value) {
return numbers.map((n) => n*value)
};

console.log("arrMultiple", arrMultiple([4,3,2,6], 2));

function isMultiple(arrNumbers, value) {
  return arrNumbers.filter((number) => number % value === 0)
};

console.log("isMultiple", isMultiple([5,10,3,8,9], 5));

function isPrime(number) {
  if(number < 2) {
    return false;
  } 
  for (let i=2; i<number; i++) {
  if(number % i === 0) {
    return false;
  }
  }
  return true;
};

function arrPrime(arrNumbers) {
  return arrNumbers.filter((number) => isPrime(number))
};

console.log("arrPrime", arrPrime([2,5,6,7,8,9]));

function reversedString (string) {
  return string.split("").reverse().join("");
};

console.log("reverseString", reversedString("doina"))

function filterArrObjects(array, objProperty) {
 return  array.filter((object)=> object.hasOwnProperty(objProperty));
};

console.log("filterArrObjects",filterArrObjects([
  {id:5, name: "pavel", age: 34}, 
  {id:2, name:"ana", age:45}, 
  {id:3, name: "doina"}], 
  "age"));

function alphString(string) {
  return string.split("").sort().join("");
};

console.log("alphString", alphString("gherasim"))

function largerNum(num1, num2) {
  if(num1>num2){
    return num1;
  } else {
    return num2;
  }
};

console.log("largerNum", largerNum(2,8));

function sumEven(arrayNum) {
  let sum =0;
  for (let i=0; i<arrayNum.length; i++) {
    if(arrayNum[i] % 2 === 0) {
      sum += arrayNum[i];
    }
  }
  return sum;
};

console.log("sumEven", sumEven([2,3,5,4,6,8]));





  return (
    <div>
      <h2>Let's get started!</h2>
      
    </div>
  );
}

export default App;
