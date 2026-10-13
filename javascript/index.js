var a=5; // var is variable and it is a global keyword
console.log(a);

//temporal deadzone concept was created for this in which only declaration goes
// console.log(a)
//const a=5;


for (var i=0;i<5;i++){

}
console.log(i);

//gives reference error
// console.log(b);
// let b=6;

let c=3;
console.log(c,typeof c);
c=3.798;
console.log(c,typeof c);
c=true;
console.log(c,typeof c);
c="hello";
console.log(c,typeof c);
c=null;
console.log(c,typeof c);

var myobj={
    name:"Ankita",
    occupation: "Teacher",
    show:showName
};

myobj.show();
function showName(){
    console.log(myobj.name);
}