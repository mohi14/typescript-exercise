
function showValues(value1: string, value2: number | number = 3): void {
    if (typeof value2 == "number") {
        for (let i = 0; i < value2; i++) {
            console.log(value1);
        }
    }
}

showValues("okay", 100)