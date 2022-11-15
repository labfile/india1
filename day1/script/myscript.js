let adder = function(num1 = 0, num2 = 0){
    return num1 + num2;
};

let hero = {
    firstname : "Bruce",
    lastname : "Wayne",
    fullname : function(){
        return this.firstname+" "+this.lastname;
    }
};


export { adder, hero }