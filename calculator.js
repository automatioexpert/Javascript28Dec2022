function Calculator(){
     this.num1=10
     this.num2=20
    this.print=function(){
        console.log("calculator started")
        console.log(this.num1+this.num2)
    }
    
    this.add=function(a,b){
        console.log(a+b)
        return a+b;
    }
   
    this.sub=function(a,b){
    console.log(a-b)
    }

}
new Calculator().print()

module.exports=Calculator;
