export class User {
    // name: string
    // private age: number

    // プロパティの宣言と同時にコンストラクタにも使える
    // プロパティに何があるか明示的ではないので、あんまり使わなさそう...
    constructor(public name: string, private age: number){}
}


export class UserProtectAge {
    name: string
    // プライベートプロパティとして使用することができる
    #age: number

    constructor(name: string, age: number){
        this.name = name
        this.#age = age
    }
}

