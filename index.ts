// primitive types
let x = 4;
let num: number = 6
let str: string = 'string'
let bool: boolean = true
let variable: any = false

console.log(x)

// declaring array types
let strArray: string[] = []
let stringArr: Array<string> = []
strArray.push('cat')
stringArr.push('cat')

strArray.push(str)

// declaring tuples
let user: [number, string] = [9, 'nine']
user.push(4)
console.log(user)

// enum
const small: number = 5
enum Size {small=2}
console.log(Size.small)

// union
let union: number | string;

// declaring objects
const person: {id: number, user: string} = {
    id: 5,
    user: 'Chris'
}
let player: {id: number, user: string}
player = {id:0, user:'guy'}

// functions
function isEven(x: number): boolean {
    if (x % 2 === 0) return true
    else return false
}

const isItEven = (x:number): boolean => {
    if (x % 2 === 0) return true
    else return false
}

// interface
interface userInterface {
    name: string, pw: string, id: number, isSubscribed: boolean
}

const printUserName = (user: userInterface): string => {
    return user.name
}
const chris = {name: 'Chris', pw:'password', id: 0, isSubscribed: true}
console.log(printUserName(chris))
