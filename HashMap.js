class HashMap {
  constructor(size = 0) {
    this.hashmap = new Array(size).fill(null).map(() => new LinkedList());
  }
  hash(key) {
    let hashcode = 0
    for (let i = 0; i < key.length; i++) {
      hashcode += hashcode + key.charCodeAt(i)
    }
    return hashcode % this.hashmap.length;
  }
  assing(key, value) {
    // const hash = this.hash(key);
    // this.hashmap[hash].addToTail({ key, value });
    const arrayIndex = this.hash(key);
    const linkedList = this.hashmap[arrayIndex];
    console.log(`Storing ${value} at index ${arrayIndex}`)
    if(linkedList.head === null){
      linkedList.addToHead({key, value})
      return
    }
    let currentNode = linkedList.head
    while(currentNode){
      if(currentNode.data.key === key){
        currentNode.data = {key, value}        
      }
      if(!currentNode.getNextNode()){
        currentNode.setNextNode(new Node({key, value}))
      }      
      currentNode = currentNode.next
    }
  }
  retrieve(key) {
    const arrayIndex = this.hash(key);

    let current = this.hashmap[arrayIndex].head
    if(!current){
      return null
    }
    while(current){
      if(current.data.key === key){
        console.log(`Retrieving ${current.data.value} from index ${arrayIndex}`)
        return current.data.value
      }
      current = current.next
    }
    return null
  }
}
