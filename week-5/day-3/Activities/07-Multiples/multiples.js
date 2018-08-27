var multiplier = 6;
var userInput = process.argv[2];
var string = "0 ";
var sum = 0;

while (userInput > multiplier) {
    sum += multiplier;
    string += "+ " + multiplier + " ";
    multiplier += 6;
}

console.log(string + "= " + sum);