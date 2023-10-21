class Nodes{
    public val:number
    public next: Nodes | any | null

    constructor(val:number){
        this.val=val;
        this.next = null
    }
}

class LinkList{
    public head:Nodes | null | any
    public tail:Nodes | null | any
    public length:number;

    constructor(){
        this.head=null
        this.tail = null
        this.length =0

    }

    //push
    addTail(val:number){
        let node = new Nodes(val)
        if(!this.head){
            this.head= node
            this.tail=this.head
        }else{
            this.tail.next =node
            this.tail = node
        }
        this.length++
        return this
    }

    //shift
    addHead(val:number){
        let node = new Nodes(val)
        if(!this.head){
            this.head=node
            this.tail = null
        }else{
            this.head =node
            node.next =this.head
        }
        this.length++;
        return this;
    }

    //pop
    removeTail(){
        // let node = new Nodes(val)
        if(!this.head){
            return undefined
        }else{
            let current = this.tail
            let newTail = current
            while(current.next){
                this.tail =newTail;
                this.tail.next=null
            }
            this.length--;
            return this
        }
    }

    //shift
    removeHead(){
        if(!this.head){
            return undefined
        }else{
            let current = this.head
            let newHead = current

            while(current.next){
                this.head= newHead;
                this.tail.next = null
            }
            this.length--
            return this; 
        }
    }

    //get a node
    get(index:number){
        if(index <0 || index >this.length){
            return "Out of range"
        }else{
            let loop:number =0;
            let current = this.head

            while(loop !==index){
                current=  current.next
                loop++
            }
            return current
        }
    }

    //chnaging then number ofthat indexpposition's head
    set( index:number, val:number){
        let node = this.get(index)
        if(node){
            node.val =val
            return true
        }else{
            return false
        }
    }

    insert(index:number, val:number){
        if(index <0 || index >this.length) return "Out of range"
        if(index===0) return !!this.addHead(val)
        if(index === this.length) return !!this.addTail(val)

        let prev = this.get(index -1)
        let temp= prev.next
        


    }
}

let linkList = new LinkList()
linkList.addTail(5);
linkList.addTail(10)
linkList.addTail(15)
console.log(linkList.set(1, 25));


console.log(linkList.addHead(1));
;
linkList.addHead(11);
console.log("getting", linkList.get(1))
// linkList.removeTail();
// linkList.removeHead()
console.log(linkList)
