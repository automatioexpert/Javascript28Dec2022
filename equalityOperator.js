/*
== Equality operator
Equality operator compares the equality in both types

= Assignment operator
!= Not Equals
*/
var i=10
var j=20
console.log(i==j) //false
console.log(10==10) //true
console.log(i!=j) //true

var s1="Simon"
var s2="Stewart"
console.log(s1==s2)//compares the value

var s3=new String("Steve") //Object
console.log(s1==s3) //false.Here == double equals refers to values
console.log(s1===s3)//true.Here === triple equals check the type

var s4=new String("Steve")
console.log(s3===s4) //false 




