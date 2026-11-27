// var let const
// var -global scope
//let const - local scope
// const a=10;
// var b="Hari";
// console.log(a);
// a=20;
// console.log(a);
// function sum(){
//     return 10+20;
// }
// console.log(sum());
//arrow function
// const sum=()=>{
//     console.log(10+19);  
// }
// sum();
// const http=require('http');
// const server=http.createServer(
//     (req,res)=>{
//     res.write("Hello Vinothkumar");
//     res.end();
//    }
// );
// server.listen(5000,(()=>{
//     console.log("server is running successfully");
// }))

// var age=21
// if(age>18){
//     console.log("eligible for vote");
// }else{
//     console.log("not eligible for vote");
// }
// (age>18)?console.log("eligible for vote"):console.log("not eligible for vote");

// const fetchData=async()=>{
//     return await fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((res)=>{
//          res.json();
//     })
//     .catch((err)=>{
//         return err;
//     })
// }

// //async await
// const getData=async()=>{
//   var data= await fetchData();
//   console.log(data)
// }

// getData();
//array methods
var arr=[45,78,24,78,54,91,11,22,54,33];
console.log(arr);
//1. map
arr.map((ele)=>{
    console.log(ele);
})
//2. slice
var data = arr.slice(0,6);
console.log(data);
//3. filter
var filterData=arr.filter((ele)=>{
    return ele%2!=0;
})
console.log(filterData);
//4.find
var findData=arr.find((ele)=>{
    return ele%2!=0;
})
console.log(findData)

