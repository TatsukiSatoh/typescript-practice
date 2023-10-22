
function map(array: number[], callback: (num: number) => number): number[] {
    const result: number[] = []
    for(const elm of array){
        result.push(callback(elm))
    }

    return result
}


export const data = [1, 1, 2, 3, 4, 10]
const result = map(data, (x) => x * 10)
console.log(result)


function mapGenerics<Param, Return>(array: Param[], callback: (param: Param) => Return): Return[]{
    const result: Return[] = []
    for(const elm of array){
        result.push(callback(elm))
    }
    return result
}

const testData = [1, -3, -2, 8, 0, -1];
const testResult: boolean[] = mapGenerics(testData, (x) => x >= 0)
console.log(testResult)
