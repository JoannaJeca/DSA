 class Stack{
    public stack : Array<number>;

    constructor(){
        this.stack = [];
    }

    addValue(val:number){
        this.stack.push(val);
        return this.stack
    }

    removeValue(){
        this.stack.pop()

        return this.stack;
    }

    size(){
        return this.stack.length
    }

    peek() {
        return this.stack[this.size() - 1];
    }

    isEmpty() {
        if(this.size() ===0){
            return true
        }else{
            return false
        }
    }
 
}

 let stack = new Stack()
 
 stack.addValue(4)
 stack.addValue(6)
 stack.addValue(8)
 stack.addValue(10)
 stack.removeValue()
 stack.size()


 console.log( stack.size());
 console.log( stack.peek());
 console.log(stack.isEmpty());
 

 console.log(stack);

const nextString = (x:string) =>{
    let z: Array<string> = x.split(" ");
    let w: string = "";

    while(z.length !==0){
        let k = z.pop();
        w += ` ${k}`
    }
    return w

}
let word:string = "Lagos sky appears to be white and sunny today"
console.log(nextString(word));


// 334456 => 654433
 
const numbb = (b:number) =>{
    let z:number = 334456;

    while(z !==0){

    }
}