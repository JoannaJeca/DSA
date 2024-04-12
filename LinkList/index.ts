class Nodes{
    public val:number
    public next: null | Nodes | any

    constructor(val:number){
        this.val = val
        this.next = null
    }
}

class LinkList {
    public head: Nodes | null| any
    public tail: Nodes | null| any
    public length:number

    constructor(){
        this.head=  null
        this.tail=  null
        this.length=  0
    }

    addTail(val:number){
        let node = new Nodes(val)

        if(!this.head){
            this.head = node
            this.tail = this.head
        }else{
            this.tail.next = node
            this.tail = node
        }
        this.length++
        return this
    }

    addHead(val:number){
        let node = new Nodes(val)

        if(!this.head){
            this.head= node
            this.tail = this.head
        }else{
            node.next = this.head
            this.head = node
        }
        this.length++
        return this
    }

    removeTail(){

        if(!this.head){
            return undefined
        }else{
            let curent = this.tail
            let newTail = curent
            while(curent.next){
              newTail = this.tail
              this.tail.next = null  
            }
            this.length--
            return this
        }
    }

    removeHead(){
        if(!this.head){
            return undefined
        }else{
            let current = this.head
            let newHead = current
            while(current){
                this.head.tail
                newHead = this.head
            }
        }
    }

    get(index:number, val:number){
        let node= new Nodes(val)

        if(index < 0 || index >this.length ){
            return "Out of range"
        }else{
            // let index === 
        }
    }
    
}


let linklist = new LinkList()

linklist.addTail(4)
linklist.addTail(6)
linklist.addTail(8)
linklist.addHead(2)
linklist.removeTail()

console.clear()
console.log(linklist);

