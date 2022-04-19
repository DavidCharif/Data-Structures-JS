import LinkedList from "./LinkedLisk"

class Stack{
  constructor(maxSize = Infinity){
    this.stack = new LinkedList()
    this.size = 0
    this.maxSize = maxSize
  }
  peek(){
    if(this.isEmpty()){
      return null
    }
    return this.stack.head.data
  }
  hasRoom()  {
    return this.size < this.maxSize
  }
  isEmpty(){
    return this.size === 0
  }
  push(data){
    if(!this.hasRoom()){
    this.stack.addToHead(data)
    this.size++
    console.log(`Added ${data}! Stack size is now ${this.size}`)}
    else{
      console.log("Stack is full")
    }
  }
  pop(){
    if(this.isEmpty()){
      console.log("Stack is empty")
      return null
    }
    const data = this.stack.removeHead()
    if(!data){
      return null
    }
    this.size--
    console.log(`Removed ${data}! Stack size is now ${this.size}`)
    return data
  }
}