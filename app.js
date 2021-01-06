const validator = require('validator');

const chalk = require('chalk');

const notes = require('./notes');

const printNote = notes();

const err = chalk.bold.redBright
const warning = chalk.keyword('yellow')

console.log(
    err('Error!')
)

console.log(
    warning('Warning!!!')
)
console.log(
      chalk.blue.bgRed.bold(printNote)
    );

console.log(
    validator.isEmail('happyhappybyit.com')
);

console.log(
    validator.isBoolean('11')
);

console.log(
        chalk.blue('hello world')
);