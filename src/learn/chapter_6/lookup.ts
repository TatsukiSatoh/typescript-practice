export type Human = {
    type: "human",
    name: string,
    age: number
}

function setAge(human: Human, age: Human["age"]) {
    return {
        ...human,
        age
    }
}

const uhyo: Human = {
    type: "human",
    name: "uhyo",
    age: 26
}

const uhyo2 = setAge(uhyo, 27)
console.log(uhyo2.age) // 27
