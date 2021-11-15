"use strict";
//basic types
let id = 5;
let company = 'Me';
let isPublished = true;
let x = 'hello';
let age;
let ids = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr = [1, true, 'jj'];
//tuple
let person = [1, 'jj', true];
let employee;
employee = [
    [1, 'john'],
    [2, 'jake'],
    [3, 'jack']
];
//union
let pid;
pid = 22;
pid = '22';
//enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'John'
};
//type assertion
let cid = 1;
// let customerId = <number>cid;
let customerId = cid;
//types in functions
function addNum(x, y) {
    return x + y;
}
//void type
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'John'
};
const p1 = 1;
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
//classes
class Person {
    // public name: string
    // private name: string
    // protected name: string
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const jake = new Person(1, 'Jake');
//sub class
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(2, 'bill', 'SE');
emp.register();
//generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
let strArray = getArray(['1', '2', '3', '4', '5', '6', '7', '8', '9']);
numArray.push(10);
strArray.push('10');
