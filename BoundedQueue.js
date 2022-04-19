class Queue  {
  constructor(maxSize = Infinity){
    this.queue = new LinkedList()
    this.size = 0  
    this.maxSize = maxSize  
  }
  hasRoom(){
    return this.size < this.maxSize
  }
  isEmpty(){
    return this.size === 0
  }
  enqueue(data){
    if(!this.hasRoom()){
    this.queue.addToTail(data)
    this.size++    
    console.log(`Added ${data}! Queue size is now ${this.size}`)}
    else{
      console.log("Queue is full")
    }
  }
  dequeue(){
    if(!this.isEmpty()){
    const data = this.queue.removeHead()
    if(!data){
      return null
    }
    this.size--
    console.log(`Removed ${data}! Queue size is now ${this.size}`)
    return data}
    else{
      console.log("Queue is empty")
    }
  }
}