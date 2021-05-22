//title : js lab 
// description : to check the datatypes and diff bw let, var and constant along with functions.
//                visualize the alert and prompt boxes on web.
// Author : Navachethan
// Date : 1/04/2021


/*function hello(){
    alert("Hello world");
} */

/*var greeter = "hey hi";
var times = 4;
if (times > 3){
   var greeter = "say hello";
}
alert(greeter); */

/*let greeter = "hey hi";
let times = 4;           // only update works in let and if runs
if (times > 3){
     let greeter = "say hello";
}
alert(greeter); */

/*let greeter = "hey hi";
let times = 4;              // let doesn't allow redeclaration
if (times > 3){
   let greeter = "say hello";
}
alert(greeter);

const greeter = "hey hi";
const times = 4;          // const doesn't allow update and redeclaration
if (times > 3){
    const greeter = "say hello";
}
alert(greeter); */

//let x = 16 + 5 + "volvo";
//alert (x);

/*let any = "it's alright";
var x = "He's good";
alert (x + any); */

//var arr = ["john", "renault"];
//alert(arr);

//var name;
//name = undefined;

//var car = "";
//alert(car);

/*var person = {
    firstname : "mohan",
    lastname : "sir" 
};
person = null;
//person = undefined; // override the object in below line
alert(typeof(person)); */

function myfun(){
    var a = Number( document.getElementById("celcius").value);
   var b=(5/9)*(a-32);
   // document.getElementById("ans").value = b; 
 alert (b);
}




