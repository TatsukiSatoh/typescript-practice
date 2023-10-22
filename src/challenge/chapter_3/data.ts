type User = {
    name: string
    age: number
    premiumUser: boolean
}

const data: string = `
uhyo,26,1
John Smith,17,0
Mary Sue,14,1
`

const users: User[] = []
const splitDatas = data.split("\n")

for(const splitData of splitDatas){
    if(!splitData) continue

    const [name, ageString, isPremiumString] = splitData.split(",")
    const age = Number(ageString)
    const premiumUser = isPremiumString === "1" ? true : false
    let user: User = {
        name,
        age,
        premiumUser
    }
    users.push(user)

}

for (const user of users) {
    if (user.premiumUser) {
      console.log(`${user.name} (${user.age})はプレミアムユーザーです。`);
    } else {
      console.log(`${user.name} (${user.age})はプレミアムユーザーではありません。`);
    }
}