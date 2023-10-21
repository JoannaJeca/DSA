//1+2+3+4+5+6=21

//step  1

const addUp =(n:number)=>{
    let count:number = n
    let arr:Array<number>= []

    for(let i=1; i<count; i++){
        arr.push(i)
    }

    return arr.reduce((a:number, b:number)=>{
        return a + b
    })
}


//step  2
const addUp2=(n:number)=>{
    let count:number = n
    let total:number =0

    for(let i=1; i<count; i++){
        total += i
    }
    return total

}


//step  3
const addUp3 =(n:number)=>{
    return (n *(n+1)) / 2
}

// console.time("start")
// console.timeEnd("start")

console.time("addUp")
// console.log(addUp(1000000000));
console.timeEnd("addUp")
console.log()
console.log()

console.time("addUp")
console.log(addUp2(7));
console.timeEnd("addUp")
console.log()
console.log()


console.time("addUp")
console.log(addUp3(6));
console.timeEnd("addUp")

//Four ways to carry out a reverse function.
//step 1

const reverser =(str:string)=>{
    let spliter = str.split("").reverse().join("")
    return spliter

}
// console.log(reverser("holla"))

//step 2

const reverser2 = (str:string)=>{
    let strinng:string = ""

    for(let i=str.length -1; i>=0; i--){
        strinng += str[i]
    }
    return strinng
}
// console.log(reverser2("hello"))

//step 3
const reverser3 =(str:string)=>{
    
    if(str === ""){
        return ""
    }else{
        return (str.substr(1)) + str.charAt(0)
    }
}
// console.log(reverser3("heelo"));




