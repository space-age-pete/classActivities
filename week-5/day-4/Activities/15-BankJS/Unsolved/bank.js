const fs = require('fs');

var theTotal = 0;

// fs.readFile('./bank.txt', 'utf8', function (error, data) {
//     if (error) {
//         return console.log(error);
//     }
//     var transactions = data.split(', ');
//     transactions.forEach(element => {
//         total += +element;
//     });

// })

function total() {
    fs.readFile('./bank.txt', 'utf8', function (error, data) {
        if (error) {
            return console.log(error);
        }
        var transactions = data.split(', ');
        transactions.forEach(element => {
            theTotal += +element;
        });
        console.log(`You have $${theTotal.toFixed(2)} in your bank account`);

    })
}

function transaction(value) {
    fs.appendFile('./bank.txt', value, function (err) {

        // If an error was experienced we will log it.
        if (err) {
            console.log(err);
        }
    });
}

if (process.argv[2]) {
    switch (process.argv[2]) {
        case 'total':
            total();
            break;
        case 'deposit':
            if (process.argv[3]) {
                transaction(`, ${process.argv[3]}`);
            }
            total();
            break;
        case 'withdraw':
            if (process.argv[3]) {
                transaction(`, -${process.argv[3]}`);
            }
            total();
            break;
        case 'lotto':

            var spin = Math.floor(Math.random() * 10);
            var draw;
            if (spin === 9) {
                draw = ", 100";
            }
            else {
                draw = ", -5"
            }
            transaction(draw);
            total();
            break;
        default:
            console.log("that is not a command");
    }
}