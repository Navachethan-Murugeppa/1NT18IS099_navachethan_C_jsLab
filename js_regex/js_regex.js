function myfun(){
    let email = document.getElementById("i1").value;
    let pattern = /^[A-Za-z0-9-_.]+@[A-Za-z0-9-_.]+\.[A-Za-z]{2,3}$/;
    let res = pattern.test(email);
    alert(res);
}