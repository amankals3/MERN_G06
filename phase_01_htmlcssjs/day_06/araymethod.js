// let arr=[2,3,4,5,6]
// arr.forEach((e)=>console.log(e))

// //map
// let sq=arr.map((item)=>item**2)
// console.log(sq)

// let products=[{"name":"Iphone-15","price":70000},
//     {"name":"Samsug"}
// ]

// let num=[30,12,14,15,7,18,23,27]

// let even=num.filter((el)=>{
//     return el%2==0
// })
// console.log(even)

let numbers=[10,50,20]

let result=numbers.reduce((acc,el)=>{
    return acc+el
},7)

console.loh("result: ",result)

let ages=[10,2,6,30,40]
let sortedAges=ages.sort((a,b)=>a-b)

let decendingAges=ages.sort((a,b)=>b-a) 
console.log(sortedAges)
console.log(decendingAges)



