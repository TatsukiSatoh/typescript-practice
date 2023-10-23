export type Human = {
    name: string
    age: number
}

type HumanKeys = keyof Human

" 'name' | 'age"
let key: HumanKeys = "name"
key = "age"


const mmConversionTable = {
    mm: 1,
    m: 1e3,
    km: 1e6
}


// typeof mmConversionTable -> {m: number, mm: number, km: number}
// keyof typeof mmConversionTable -> "m" | "mm" | "km"
function convertUnits(value: number, unit: keyof typeof mmConversionTable) {
    const mmValue = value * mmConversionTable[unit]
    return {
        mm: mmValue,
        m: mmValue / 1e3,
        km: mmValue / 1e6
    }
}

console.log(convertUnits(5600, "m"))

// Kはkeyof Tの部分型であるといえる
function get<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key]
}

export type HumanKey = {
    name: string
    age: number
}

const uhyo3: Human = {
    name: "uhyo",
    age: 26
}

const uhyoName = get(uhyo3, "name")
const uhyoAge = get(uhyo3, "age")


// Keyが必ずStringの場合
function getKeyString<T, K extends keyof T & string>(obj: T, key: K): T[K] {
    return obj[key]
}