// 1

type Car = {
    brand: string,
    year: number,
    isElectric: boolean
};

let toyota: Car = {
    brand: "Toyota",
    year: 2026,
    isElectric: true
};

let mercedes: Car = {
    brand: "Mercedes",
    year: 2019,
    isElectric: false
};

// 2

interface Book {
    title: string, 
    author: string, 
    pages: number
} 

function printBook(book: Book){
    console.log(book)
}

let lordOfTheRing: Book = {
    title: "Lord of the Ring",
    author: "J. R. R. Tolkien",
    pages: 1500
}

printBook(lordOfTheRing)

// 3

enum Season {
    spring = "Spring",
    summer = "Summer",
    autumn = "Autumn",
    winter = "Winter",
}

let currentSeason: Season = Season.autumn;

console.log(currentSeason);

// 4

enum Status {
    pending = "Pending",
    active = "Active",
    banned = "Banned"
}

interface User {
    name: string,
    status: Status
}

let giorgiStatus: User = {
    name: "Giorgi",
    status: Status.active
}

console.log(giorgiStatus);

// 5

function getFirst<T>(arr: T[]): T{
    return arr[0]
}

let array1: string[] = ["Giorgi", "Salome", "Mariami"]
let array2: number[] = [12, 45, 1145]
console.log(getFirst(array1));
console.log(getFirst(array2));

// 6

interface Box<T> {
    value: T
}

let stringBox: Box<string> = {
    value: "Boxed"
}

let numberBox: Box<number> = {
    value: 443
}
 