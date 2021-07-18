//Q2.Collect the required information using web interface to 
//implement promise-based functions and wait for the execution of the required functions.

let fn_btn1 = document.getElementById("btn1");
fn_btn1.addEventListener("click", ()=>{
    
async function myDisplay() {
    let myPromise1 = new Promise(function(myResolve, myReject) {
        setTimeout(() => {
            myResolve("promise1 resolved"+" "+(4+3));
          }, 1000);
    });
    let myPromise2 = new Promise(function(myResolve, myReject) {
        setTimeout(() => {
            myResolve("promise2 resolved"+" "+4*3);
          }, 2000);
    });
    let myPromise3 = new Promise(function(myResolve, myReject) {
        setTimeout(() => {
            myResolve("promise3 resolved"+" "+(4-2));
          }, 3000);
    });
    let myPromise4 = new Promise(function(myResolve, myReject) {
        setTimeout(() => {
            myResolve("promise4 resolved"+" "+(6/3));
          }, 4000);
    });
    document.getElementById("demo1").innerHTML = await myPromise1;
    document.getElementById("demo2").innerHTML = await myPromise2;
    document.getElementById("demo3").innerHTML = await myPromise3;
    document.getElementById("demo4").innerHTML = await myPromise4;
  }
  
  myDisplay();
}); 
