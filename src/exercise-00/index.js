"use strict";
exports.__esModule = true;
var chalk_1 = require("chalk");
var users = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];
function logPerson(user) {
    console.log(" - " + chalk_1["default"].green(user.name) + ", " + user.age);
}
console.log(chalk_1["default"].yellow('Users:'));
users.forEach(logPerson);
// In case if you are stuck:
// https://www.typescriptlang.org/docs/handbook/interfaces.html#introduction
