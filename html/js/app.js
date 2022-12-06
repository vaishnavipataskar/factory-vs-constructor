var cl=console.log;

function creatStdObj(){
    var obj={};
    obj.fname="July";
    obj.lname="Doe";
    obj.email="July@gmail.com";
    obj.contact=1234567890;
    return obj;
}

//factory function 
//To creat multiple object with different reference(value).

function creatStdObj(fn,ln,email,contact){
    var obj ={};
    obj.fname=fn;
    obj.lname=ln;
    obj.email=email;
    obj.contact=contact;
    return obj;
}
var s1=creatStdObj("July","Doe","july@gmail.com",1234567890);
cl(s1);

var s2=creatStdObj("Jhon", "Doe", "jhon@gmail.com", 1234567890);
cl(s2);

//constructor function >> new Array() new object()
//It is a blueprint for creating objects/instance

function CreatStdObj2(fn,ln,email,contact){
    //var this={}
    this.fname=fn;
    this.lname=ln;
    this.email=email;
    this.contact=contact;
    //return
}

var s3=new CreatStdObj2("May","Doe","may@gmail.com", 12345678900);
cl(s3);



