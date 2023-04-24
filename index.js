"use strict";
// primitive types
let x = 4;
let num = 6;
let str = 'string';
let bool = true;
let variable = false;
console.log(x);
// declaring array types
let strArray = [];
let stringArr = [];
strArray.push('cat');
stringArr.push('cat');
strArray.push(str);
// declaring tuples
let user = [9, 'nine'];
user.push(4);
console.log(user);
// enum
const small = 5;
var Size;
(function (Size) {
    Size[Size["small"] = 2] = "small";
})(Size || (Size = {}));
console.log(Size.small);
// union
let union;
// declaring objects
const person = {
    id: 5,
    user: 'Chris'
};
let player;
player = { id: 0, user: 'guy' };
// functions
function isEven(x) {
    if (x % 2 === 0)
        return true;
    else
        return false;
}
const isItEven = (x) => {
    if (x % 2 === 0)
        return true;
    else
        return false;
};
const printUserName = (user) => {
    return user.name;
};
const chris = { name: 'Chris', pw: 'password', id: 0, isSubscribed: true };
console.log(printUserName(chris));
