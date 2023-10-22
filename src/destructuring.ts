// 分割代入
const nested = {
    num: 123,
    obj: {
        foo: "hello",
        bar: "world"
    }
}

const {num, obj: {foo}} = nested

console.log(num)
console.log(foo)

// arrayの分割代入
const array = [1,2,4,8,16,32]

// 最初の要素を取得などでは使えるかも
const [first, second, third] = array

console.log(first) // 1
console.log(second) // 2
console.log(third) // 4

const [, foo1,,bar] = array
console.log(foo1) // 2


// rest オブジェクトで残りを取得する
const obj = {
    foo2: 123,
    bar: "string",
    baz: false
}
const { foo2, ...restObj } = obj

console.log(foo2) //123
console.log(restObj) // {bar: "string", baz: false}

const arr3 = [1, 1, 3, 4, 8, 13]
const [first2, ...rest] = arr3

console.log(first2) //1
console.log(rest) //[1, 3, 4, 8, 13]