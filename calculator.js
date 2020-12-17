function Calculator() {
    this.arr = [];
    this.calculations = [function sum(a, b) { return a+b; }, 
                         function minus(a, b) { return a-b; }];
    this.operators = ['+', '-'];

    this.calculate = function(str) {
        this.arr = str.split(' ');
        
        for (let i = 0; i < this.operators.length; i++) {
            if(this.arr[1] == this.operators[i]) return this.calculations[i](+this.arr[0], +this.arr[2]);
        }
    };

    this.addMethod = function(name, func) {
        this.calculations.push(func);
        this.operators.push(name);
    }
}

let powerCalc = new Calculator;

powerCalc.addMethod('/', (a, b) => a / b);

console.log(powerCalc.calculate("6 / 3"));