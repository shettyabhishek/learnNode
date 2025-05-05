console.log("------------------------------------------------------------------------");
console.log("------------------------------------------------------------------------");
console.log("--------------- Working with JS Class & Function -----------------------");

var myFunction = function(){
  this.a = "Some value of a";
  this.b = "Value of b";
}

myFunction.prototype.a = "New value of a";
myFunction.prototype.c = "Adding a new variable c"; 

var myFunc = new myFunction();

console.log(myFunc.a);
console.log(myFunc.b);
console.log(myFunc.c);

myFunc.a = "Check the value of a now";

console.log("#########################################################################");
console.log(myFunc.a);

console.log("------------------- Count Occurrence of element -------------------------");
function countColor(){
  const colours = ["red", "blue", "yellow", "red", "blue", "yellow", "red", "blue","orange","green"];
  console.log("Input array ",colours);
  let colourCount = [];
  colours.every((clr) =>{
    const foundClr = colourCount.find((item) => {
      if(item.name === clr)
      return item;
    })
    
    if(foundClr){
      colourCount.map((clrItem) => {
        let newObj = null;
        if(clrItem.name === foundClr.name){
          newObj = Object.assign({},clrItem);
          newObj.count = clrItem.count++;
        }
        return newObj;
      })
    } else {
      colourCount.push({
        name: clr,
        count: 1
      })
    }
    
    return colourCount;
  })
  
  console.log("Result   ",colourCount);
}
countColor();

console.log("-------------------------- Closure ----------------------------");
function createCounter() {
  var count = 0;
  function counter() {
    count++;
    console.log(count);
  }
  return counter;
}
var increment = createCounter();
increment(); 
increment(); 
increment();

console.log("-------------------------- Highest element in an array ----------------------------");
let a=[5,6,1,4,9,0,3,6,7,8]
let foundElement = []
function fndGreatestElement(){
  a.every((item) => {
    if(foundElement.length === 0)
      foundElement.push(item);
    else {
      if(item > foundElement[0]){
        foundElement.pop();
        foundElement.push(item);
      }
    }
    return foundElement;
  })
}
fndGreatestElement();
console.log("Greatest element",foundElement[0])

console.log("-------------------------- destructuring  ----------------------------");
const { model, registration: {city} } = {  
    name: 'test' , model : 'Honda'  ,  
    registration : {
        city: 'Bangalore'
    }  
}
console.log(model,city )

console.log("-------------------------- Call stack execution  ----------------------------");
console.log('A');
setTimeout(() => {
  console.log('B'); 
}, 0);
Promise.resolve().then(() => {
  console.log('C'); 
});
console.log('D');

console.log("-------------------------- Working with Promise ----------------------------");
const prm = new Promise((resolve) => {
  return resolve('Checking this Promise Sucess');
}, (reject) => {
  return reject('Failed promise');
})
prm.then(function(res){
  console.log(res)
});