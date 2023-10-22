const getFizzBuzzString = (i: number): string => {
    if(i % 3 === 0 && i % 5 === 0){
        return "FizzBuzz"
    }
    else if(i % 3 === 0){
        return "Fizz"
    }
    else if(i % 5 === 0){
        return "Buzz"
    }

    return String(i)
}


// for(let i = 0; i <= 100; i++){
//     const message = getFizzBuzzString(i)
//     console.log(message)
// }

const sequence = (min: number, max: number): number[] => {
    const result: number[] = []
    for(let i = min; i <= max; i++){
        result.push(i)
    }

    return result
}

for(const elm of sequence(1, 100)){
    const message = getFizzBuzzString(elm)
    console.log(message)
}
