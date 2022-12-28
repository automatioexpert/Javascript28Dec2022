
//Label is used when more than 1 loop 
//and when we want to break any specific loop
loop1: for(var i=1;i<=3;i++){

    loop2: for(var j=1;j<=3;j++){
  
      if(j==2){
          break loop1;
      }
  //i: 1 j: 1
      console.log("i: "+i+" j: "+j)
    }
  
  }