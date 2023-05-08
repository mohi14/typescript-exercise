
type ValueType = Array<{ name: string, age: number }>

interface IReturnObject {
    name: string,
    age: number
}


const showAdultPerson = (param: ValueType): ValueType | IReturnObject => {
    const filteredValue: ValueType = param.filter(p => p.age >= 18)
    if (filteredValue.length === 1) {
        return filteredValue[0]
    }
    else {
        return filteredValue
    }
}

const values = showAdultPerson([{ name: "kjll", age: 20 }, { name: "jkjk", age: 12 }])

console.log(values)