let targetNum: number = 1;
const MAX_NUM = 100

let outputText: string = ""
while(targetNum <= MAX_NUM){
    if(targetNum % 3 === 0){
        outputText += "Fizz"
    }
    
    if(targetNum % 5 === 0){
        outputText += "Buzz"
    }

    console.log(outputText || targetNum)

    targetNum++;
    outputText = ""
}