// const myArr = [0, 1, 2, 3, 4, 5]
// console.log(typeof(myArr)) 

// //Array Methods

// myArr.push(6)
// console.log(myArr)
// myArr.pop()

// console.log(myArr)

// myArr.unshift(9) //why it is not optimized? as 9 is added at first means we are disturbing every index place
// console.log(myArr) 

// myArr.shift() // it will move one place to left which basically 0th index
// console.log(myArr)

// const newArr = myArr.join() //imp
// console.log(newArr)

//difference b/w slice and splice

myArr3 = [1,2,3,4,5,6,7]

//slice
const myN1 = myArr3.slice(1,3)

console.log("A" , myN1)

const myN2 = myArr3.splice(1,3) //manipulate the original array
console.log("C" , myArr3)
console.log("B", myN2);


