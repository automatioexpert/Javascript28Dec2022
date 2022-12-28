function printout(){

    for(var i=1;i<=10;i++){
        console.log(i)
    }
    console.log("value of i outside the loop: "+i) //11

    //Here the scope of i is outside the for loop
    //If you want the sccope of i inside for loop only
    //use let keyword 
    //Check next example code
}
printout()