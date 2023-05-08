

function checkType(param: unknown): void {
    if (typeof param == "string") {
        console.log(param)
    }
    else {
        throw new Error("Vai Vai Error Khaise!!")
    }
}

checkType("no error vai")