/*myfun = () => {
    alert ("hello");
} */

/*add = () => {
 let a = Number(document.getElementById("one").value);
 let b = Number(document.getElementById("two").value);
 let c =a+b;
    alert(c);
} */

let a = document.getElementById("mid");
 a.addEventListener("click", (e) => {
    e.stopPropagation();
     alert("safe");
 });

 let b = document.getElementById("mid1");
 b.addEventListener("click", (e) => {
    e.stopPropagation();
     alert("moderate");
 });

 let c = document.getElementById("mid2");
 c.addEventListener("click", (e) => {
    e.stopPropagation();
     alert("danger");
 });


