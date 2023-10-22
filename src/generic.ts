type UserTest<T> = {
    name: string
    child: T
}

const testUser: UserTest<number> = {
    name: "Taro",
    child: 1
}

type Family<Parent, Child> = {
    mother: Parent,
    father: Parent,
    child: Child
}

const testFamily: Family<number, string> = {
    mother: 1,
    father: 2,
    child: "100"
}

// 部分型関係による型引数の制約
type HasName = {
    name: string
}

type Family2<Parent extends HasName, Child extends HasName> = {
    mother: Parent,
    father: Parent,
    child: Child
}

// 下記コードはエラー
// type T = Family2<number, string>

type Animal = {
    name: string
}

type Human = {
    name: string,
    age?: number
}

const testFamily2: Family2<Animal, Human> = {
    mother: {
        name: "Test"
    },
    father: {
        name: "Test2"
    },
    child: {
        name: "Test3"
    }
}

type Family3<Parent = Animal, Child = Human> = {
    mother: Parent,
    father: Parent,
    child: Child
}