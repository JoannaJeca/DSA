// import moment from "moment"
// //callbacks are functions that can be passed a sarguments to abither function

// console.log("This is cup 1")
// console.log("This is cup 2")
// console.log("This is cup 3")
// cup(3000)
// console.log("This is cup 4")
// console.log("This is cup 5")


// function cup(guessTime:number){
//    console.log() 
//    console.log("Waiting for Joan...!")

//    let time = new Date().getTime()
// let delayTime = time + guessTime

// setTimeout(()=>{
//     while(new Date().getTime() < delayTime){}
//     console.log()
//     console.log("Start moment executed at:", moment(time).format("LTS"));
//     console.log("End process executed at:", moment(delayTime).format("LTS"))
// })

// }



// const check = (cb:any):void=>{
//     setTimeout(()=>{
//         return cb()
//     },0)
// }

// console.log(
//     check(()=>{
//         console.log(`Viewing ${Myname}'s data`)
//     })
// )

// let Myname:string = "Peter"

// const promise = new Promise ((resolve, reject)=>{
//     if(true){
//         resolve("A promise kept")
//     }else{
//         reject("A promise failed")
//     }
// })

// promise 
//        .then((res)=>{
//         console.log(res)
//        })
//        .catch((err)=>{
//         console.log(err)
//        })
//        .finally(()=>{
//         console.log("clean up code")
//        })

// const apple:string = "declaring any variable"
// //investigate if promise is an async.
// console.log(apple);

// import PromptSync from "prompt-sync"
// const prompt = PromptSync()

// // const mYpromise = new Promise ((resolve, reject)=>{
// //     const numb:number = Math.floor(Math.random() * 10)
// //     const guessNumb = parseInt(prompt(`What your number is:`))
    
// //     if(guessNumb === numb){
// //         console.log()
// //         resolve("A class promise kept")
// //     }else{
// //         reject("Failed to fulfill a promise")
// //     }
// // })


// let userEmail:string ;
// let userPassword:string;


// const makeRequest = ()=>{
//     return new Promise ((resolve, reject)=>{
//          const email = prompt("Enter your password :");
//          const password = prompt("Enter your password")

//          userEmail = email
//          userPassword = password;

//          return setTimeout(()=>{
//             if(userEmail === "peter@test.com" && userPassword === "peter@test.com"){
//             console.log();
//             resolve(`${userEmail.split("@")[0]}`);
//             }else{
//                 console.log()
//                 reject("User authentication failed")
//             }
                        
//          }, 1000)
//     })
// }

// const landingPage = (res:any) =>{
// console.log(`Welcome to our landing page, ${res}`);

// }

// const myWebApp = async()=>{
//     const val = await makeRequest();

//     const result =landingPage(val);
//     console.log(result);
    
// }
// myWebApp()

import moment from "moment"
import PromptSync from 'prompt-sync'
const prompt = PromptSync()

const check=((cb:any):void=>{
    setTimeout(()=>{
        return cb
    },0)
})

console.log(
    check(()=>{
        // console.log(`Viewing ${myName} in console`)
    })
)


const promise = new Promise((resolve, reject)=>{
    if(true){
        resolve("a promise kept with")
    }else{
        reject("Unfortnately")
    }
})
promise
.then((res)=>{
    // console.log(`${res} ${myName}`);
}) 
.catch((err)=>{
    console.log(err)
})

let myName = "yuew"
 

// const newPromise = new Promise((resolve, reject)=>{
//     let answer =parseInt(prompt("What is your guess:"))
//     let system = Math.floor(Math.random() * 3)
//     let attempt = 3

//     while(attempt <3){
//         if(answer === system){
//             resolve("success")
//         }else if(){

//         }else{
//            reject("failed")
//        }

//     }
    
// }) 

// newPromise
//          .then((res)=>{
//             console.log(res)
//          })
//          .catch((err)=>{
//             console.log(err);
//          })
//          .finally(()=>{
//             console.log("Clesn up code");
            
//          })


         
 const makeRequest = (time:number)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(`it takes ${time /1000} seconds to reach`)
        },time)
    })
 }

 makeRequest(3000).then((res)=>{
    console.log(res);
 })
 .catch((err)=>{
    console.log(err);
    
 })
 .finally(()=>{
    console.log("clear up code");
    
 })
// console.log
// (
//  makeRequest(1000),
//  makeRequest(4000),
//  makeRequest(2000),
//  makeRequest(9000),
// ).then((res)=>console.log(res)
// )