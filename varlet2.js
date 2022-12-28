function printout(){
const value=100;
    for(let i=1;i<=10;i++){
        console.log(i)
    }
   // console.log("value of i outside the loop: "+i) //11
    console.log("constant value is: "+value)
//constant value is: 100


//Error: console.log("value of i outside the loop: "+i) //11
//ReferenceError: i is not defined


//Here the scope of i is outside the for loop
    //If you want the sccope of i inside for loop only
    //use let keyword 
 
}
printout()