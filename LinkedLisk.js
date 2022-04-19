import Node from "./Node.js";

class LinkedList {
  constructor() {
    this.head = null;    
  }
  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    this.head = newHead;
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }
  addToTail(data) {
    let tail = this.head;
    if (!tail) {
      this.addToHead(data);
    } else {
      while (tail.getNextNode()) {
        tail = tail.getNextNode();
      }
      tail.setNextNode(new Node(data));
    }
  }
  removeHead(){
    const removedHead = this.head
    if(!removedHead){
      return null
    }
    this.head = removedHead.getNextNode()
    return removedHead.data
  }
  printList(){
    let currentNode = this.head
    let output = '<head> -> '
    while(currentNode){
      output += currentNode.data + ' -> '      
      currentNode = currentNode.getNextNode()
    }
    output += ' <tail>'    
    return output
  }
}

export default LinkedList;