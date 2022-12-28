/*
break--> switch/loops- will transfer the execution
outside the loop
continue-->Loops-->it transfers the execution to the next iteration

break , continue applies in case of loops and switch case only
*/

for(var i=1;i<=10;i++){
    if(i==7){
        break; //it executes till i=6 and breaks the loop
    }
    console.log("For loop: "+i)

    /*
    For loop: 1
For loop: 2
For loop: 3
For loop: 4
For loop: 5
For loop: 6
*/

}
