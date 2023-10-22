const sum = (...args: number[]): number => {
    let result = 0
    for (const num of args){
        result += num
    }

    return result
}

console.log(sum(1, 10, 100))
console.log(sum(123, 456))
console.log(sum())

// スプレッド構文
const nums = [1, 2, 3, 4, 5]
console.log(sum(...nums))

export type User = {
    name: string
    age: number
}

const getName = (u: User): string => u.name
const users: User[] = [
    {name: "uhyo", age: 26},
    {name: "John Smith", age: 15},
]

const names = users.map(getName)
console.log(names)

// 20歳以上のユーザーのみ
const adultUsers = users.filter((user: User) => user.age >= 20)
// 全てのユーザーが20歳以上であればtrue
const allAdult = users.every((user: User) => user.age >= 20)
// 60歳以上のユーザーが1人でもいればtrue
const seniorExists = users.some((user: User) => user.age >= 60)
// 名前の始まりがJohnで始まるユーザーを探して返す
const john = users.find((user: User) => user.name.startsWith("John"))

