function simpleFunc(){
    console.log("I am called from inside the function")
}
simpleFunc()

function add(a,b){
    var sum=a+b
    console.log("Sum is : "+sum)
}
a=add(10,20)
console.log(a)
a=add(100,200)
console.log(a)

function courses(){
    this.topic="Protractor";
    this.duration="20 hours"
}
var obj_course=new courses()
console.log(obj_course)

function  student(name,rollNo){
    this.name=name;
    this.rollNo=rollNo;
}
var obj_student=new student("simon",200)
console.log(obj_student.name="Steve"+" and rollNo is: "+obj_student.rollNo)
