export type Human = {name: string}
export type Animal = {species: string}

function getName(human: Human) {
    return human.name
}

function getSpecies(animal: Animal) {
    return animal.species
}

const mysteryFunc = Math.random() < 0.5 ? getName : getSpecies

export type HumanAndAnimal = Human & Animal

const humanAndAnimal: HumanAndAnimal = {
    name: "テスト",
    species: "ああああ"
}

// インターセクションのパラメータ以外はエラーになる
mysteryFunc(humanAndAnimal)


// 透過演算子を用いる絞り込み
type SignType = "plus" | "minus"
function signNumber(type: SignType) {
    return type === "plus" ? 1 : -1
}

function numberWithSign(num: number, type: SignType | "none") {
    if(type === "none"){
        return 0
    }else{
        return num * signNumber(type)
    }
}

console.log(numberWithSign(5, "plus"))
console.log(numberWithSign(5, "minus"))
console.log(numberWithSign(5, "none"))
