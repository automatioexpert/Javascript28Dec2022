/*
Conditional/Logical operator

&& -->needs two operand-Both the operands must be of type boolean
&& -->returns true if both operand are true
if any operand is false,&& operator will return false
||--needs two operand-->Both the operand must be of type boolean
||-->returns true if any of the operand is true 

*/
var i=10;
var j=20;
 
var result1=i<=j;
console.log(result1)
result2=i>10;
console.log(result1 && result2)  
result2=i>10;
console.log(result1 || result2)  
