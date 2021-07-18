function myfun(){
let mapobj = new Map();
mapobj.set(1, 'Chethan');
mapobj.set(2, 'nmit');
mapobj.set(3, 'Banglore');

document.getElementById("ans1").innerHTML = mapobj.get(1);
document.getElementById("ans2").innerHTML = mapobj.get(2);
document.getElementById("ans3").innerHTML = mapobj.get(3);
document.getElementById("ans4").innerHTML = mapobj.get(4);
}