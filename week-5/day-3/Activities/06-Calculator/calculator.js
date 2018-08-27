var a = process.argv[3];
var b = process.argv[4];

var whatever = {
    "add": function () {
        return +a + +b;
    },

    "subtract": function () {
        return +a - +b;
    },

    "multiply": function () {
        return +a * +b;
    },

    "divide": function () {
        return +a / +b;
    },

    "remainder": function () {
        return +a % +b;
    },

    "exp": function () {
        return Math.pow(+a, +b);
    },

    "algebra": function () {
        var firstSplit = a.split('+');
        var firstArg = firstSplit[0];
        var secondSplit = firstSplit[1].split('=');
        var secondArg = secondSplit[0];
        var thirdArg = secondSplit[1];

        return (+thirdArg - +secondArg) / parseInt(firstArg);
    }
}

console.log(whatever[process.argv[2]]());