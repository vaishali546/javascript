console.log("hello there")
console.log(typeof null)
console.log(typeof undefined)
let score = 24
console.log(typeof score)
console.log(Boolean(1))
console.log(Boolean(0))
console.log(Boolean(3))
console.log(Boolean(-7))
console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(Boolean(""))
console.log(Boolean("ahhl"))
console.log(typeof(String(33)))
console.log(typeof(String(null)))
console.log(typeof(String(undefined)))
console.log(String(-7))
console.log("2"==2)
console.log("2"===2)
let id = Symbol("123")
let anotherId = Symbol("123")
console.log(id == anotherId)
console.log(id === anotherId)
let bigNumber = 895791258n
console.log(typeof bigNumber);
let arr = ["first","second"]
let myobj ={
    name:"vaishali",
    age:4,
}
const func = function(){
    console.log("Hello World")
}
console.log(typeof arr,typeof myobj, typeof func)
console.log(arr,myobj)
func()
