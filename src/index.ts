//basic types
let id: number = 5;
let company: string = 'Me'
let isPublished:  boolean = true;
let x:any = 'hello';
let age:number

let ids:number[] = [1,2,3,4,5,6,7,8,9]
let arr:any[] = [1,true,'jj']

//tuple
let person: [number, string, boolean] = [1,'jj', true];
let employee: [number, string][]
employee = [
    [1,'john'],
    [2, 'jake'],
    [3, 'jack']
]

//union
let pid: string | number;
pid = 22;
pid = '22';

//enum
enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right
}

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

//objects
type User = {
    id:number,
    name:string
}

const user:User = {
    id:1,
    name:'John'
}

//type assertion
let cid: any = 1;
// let customerId = <number>cid;

let customerId = cid as number;

//types in functions
function addNum(x:number,y:number): number{
    return x+y
}

//void type
function log(message:string | number): void{
    console.log(message)
}

//interfaces
type UserInterface = {
    readonly id:number,
    name:string,
    age?:number //optional
}

const user1:UserInterface = {
    id:1,
    name:'John'
}

type Point = number | string;
const p1: Point = 1;

//interface with functions
interface MathFunc{
    (x:number, y:number):number
}

const add: MathFunc = (x:number, y:number):number => x + y;
const sub: MathFunc = (x:number, y:number):number => x - y;

type PersonalInterface = {
    id:number,
    name:string,
    register():string
}

//classes
class Person implements PersonalInterface {
    id: number
     name: string
    // public name: string
    // private name: string
    // protected name: string

    constructor(id:number, name:string){
        this.id = id;
        this.name =name;
    }

    register(){
        return `${this.name} is now registered`
    }
}

const jake = new Person(1,'Jake');


//sub class
class Employee extends Person {
    position: string
    
    constructor(id:number, name:string, position:string){
        super(id, name)
        this.position = position;
    }
}

const emp = new Employee(2, 'bill','SE')
emp.register();

//generics
function getArray<T>(items: T[]): T[]{
 return new Array().concat(items);
}

let numArray  = getArray<number>([1,2,3,4,5,6,7,8,9])
let strArray = getArray<string>(['1','2','3','4','5','6','7','8','9'])

numArray.push(10)
strArray.push('10')