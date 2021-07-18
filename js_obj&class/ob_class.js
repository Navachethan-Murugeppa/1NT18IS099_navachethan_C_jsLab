let names = {
    fname: "Bruce",
    lname: "Wayne"
}
console.log(names.fname);
console.log(names.hasOwnProperty("mname"));
console.log(names);
//Object.create
function LionObject(name, age) {
    let Lion = Object.create(constructorObject);
    Lion.name = name;
    Lion.age = age;
    return Lion;
}
let constructorObject = {
    speak: function(){
        return "Lion is the King"
    }
}
let leo = LionObject("Mufasa", 10);
console.log(leo);
console.log(constructorObject.speak());


//Usage of new keyword
function LionObject1(name, age) {
    this.name = name;
    this.age = age;
}
LionObject1.prototype.speak = function() {
    return "Prince simba";
}
let john = new LionObject1("Simba", 3);
console.log(LionObject1.prototype.speak());

/*The _ _proto_ _ references the Animals prototype (which in turn references
the Object prototype)
From this, we can see that the constructor defines the major features 
while everything outside the constructor (sing() and dance()) are the 
bonus features (prototypes).*/

class Drive {
    constructor(name, brand) {
        this.name = name;
        this.brand = brand;
    }
    speed() {
        return `${this.name} has speed`;
    }
    luxury() {
        return `${this.name} is luxurious`;
    }
}
let car = new Drive("Duster", "Renault");
console.log(car.speed());
console.log(car.luxury());

function Drive1(name, brand) {
    this.name = name;
    this.brand = brand;
}
Drive1.prototype.speed = function(){
    return `${this.name} has speed`;
}
Drive1.prototype.luxury = function() {
    return `${this.name} is luxurious `;
}
let car1 = new Drive1("X3", "BMW");
console.log(car1.speed());
console.log(car1.luxury()); 

/*Let's see how subclasses are done with class.
Here, we need a parent which the subclass inherits from. 
Examine the following code:*/
class Drive2 {
    constructor(name, brand) {
        this.name = name;
        this.brand = brand;
    }
    speed() {
        return `${this.name} has speed`;
    }
    luxury() {
        return `${this.name} is luxurious`;
    }
} 
class tesla extends Drive2 {
    constructor(name, brand, speciality) {
        super(name, brand);
        this.speciality = speciality;
    }
    feature() {
        return ` ${this.speciality} is an added advantage`;
    }
}
let wheels = new tesla("Model-S", "Tesla", "selfdrive");
console.log(wheels.speed());
console.log(wheels.feature());

//responsive method
function myfun(){
    function LionObject(name, age) {
        let Lion = Object.create(constructorObject);
        Lion.name = name;
        Lion.age = age;
        return Lion;
    }
    let constructorObject = {
        speak: function(){
            return "Student at NMIT"
        }
    }
    let n="";
    let a="";
    let leo = LionObject(n=document.getElementById("i1").value, 
    a = Number(document.getElementById("i2").value));
    document.getElementById("ans1").innerHTML = leo.name+"-"+leo.age;
    document.getElementById("ans2").innerHTML = constructorObject.speak();
    //console.log(leo);
    //alert(leo.name+" "+leo.age);
    //alert(constructorObject.speak());
    //console.log(constructorObject.speak());
}

function myfun2(){
    class Drive2 {
        constructor(name, brand) {
            this.name = name;
            this.brand = brand;
        }
        speed() {
            return `${this.name} has speed`;
        }
        luxury() {
            return `${this.brand} is luxurious`;
        }
    } 
    class tesla extends Drive2 {
        constructor(name, brand, speciality) {
            super(name, brand);
            this.speciality = speciality;
        }
        feature() {
            return ` ${this.speciality} is an added advantage`;
        }
    }
    let n="";
    let b="";
    let f="";
    let wheels = new tesla(n=document.getElementById("i3").value,
    b=document.getElementById("i4").value,
    f=document.getElementById("i5").value,);
    //alert(wheels.speed());
    document.getElementById("ans3").innerHTML = wheels.speed()+"-"+wheels.luxury();
    document.getElementById("ans4").innerHTML = wheels.feature();
    //console.log(wheels.speed());
    //console.log(wheels.feature());
}

// trial example
/*function myfun3(){
    function LionObject(name, age) {
        let Lion = Object.create(constructorObject);
        Lion.name = name;
        Lion.age = age;
        return Lion;
    }
    let constructorObject = {
        speak: function(){
            return "Lion is the King"
        }
    }
    let n= document.getElementById("i6").value;
    let a=Number(document.getElementById("i7").value);
    let leo = LionObject(n,a);
    //document.getElementById("ans5").innerHTML = leo.name+"-"+leo.age;
    //document.getElementById("ans6").innerHTML = constructorObject.speak();
    //console.log(leo);
    alert(leo);
    //alert(constructorObject.speak());
    //console.log(constructorObject.speak());
} */
