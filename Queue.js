import LinkedList from "./LinkedLisk.js";

class Queue{
  constructor(){
    this.queue = new LinkedList()
    this.size = 0    
  }
  enqueue(data){
    this.queue.addToTail(data)
    this.size++    
    console.log(`Added ${data}! Queue size is now ${this.size}`)
  }
  dequeue(){
    const data = this.queue.removeHead()
    if(!data){
      return null
    }
    this.size--
    console.log(`Removed ${data}! Queue size is now ${this.size}`)
    return data
  }
}

export default Queue