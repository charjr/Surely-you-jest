class Calculator {
    add() {
        let result = 0;

        let i = 0;
        while (i < arguments.length) {
            result += arguments[i++];
        }
        
        return result;
    }
}



module.exports = Calculator;
