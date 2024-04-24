const numeros = require("./numeros.js");
const Logger = require("logplease");
const logger = Logger.create('utils');

console.log(numeros.esPar(3));

const numbers = [2, 3, 101, 201, 202, 100];

console.log(numeros.esPar(numbers));

const imprimirNums = () => {numbers.forEach(number => {
    if (numeros.esPar(number)) {
        logger.info(`El numerito ${number} es par`);
    } else {
        logger.error(`El numerito ${number} es impart`);
    };
});
};

imprimirNums();