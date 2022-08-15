const calculator = {
    plus: function(a, b) {
        console.log(a + b);
    },
    minus: function(a, b){
        console.log(a - b);
    },
    multiply: function(a, b){
        console.log(a * b);
    },
    divide: function(a, b){
        console.log(a / b);
    },
    power: function(a, b){
        console.log(a ** b); 
    }
}

calculator.plus(3, 4);
calculator.minus(3, 4);
calculator.multiply(3, 4);
calculator.divide(3, 4);
calculator.power(3, 4);
