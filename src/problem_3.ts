
function showReverseOfArray<T>(...param: T[]): T[] {
    // const reverseArray = param.reverse()
    // return reverseArray

    let reverse: T[] = []

    for (let i = param.length - 1; i >= 0; i--) {
        reverse.push(param[i])
    }
    return reverse
}

const fruits = showReverseOfArray("Mango", "Apple", "JackFriuts")

console.log(fruits)