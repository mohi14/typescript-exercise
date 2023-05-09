class Person {
    private _name: string;
    private _age: number;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age
    }
    getDetails() {
        return `Person name is ${this._name}, and his age is ${this._age}`
    }
}
const Mohi = new Person("mohi", 25)

console.log(Mohi.getDetails())



class Student extends Person {

    private _grade: string;

    constructor(name: string, age: number, grade: string) {
        super(name, age);

        this._grade = grade;
    }
    getGrade() {
        return `Grade is ${this._grade}`
    }
}

const notonStudent = new Student("Mohi", 25, "A")

console.log(notonStudent.getGrade())