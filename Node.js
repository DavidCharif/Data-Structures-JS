// class Node{
//   constructor(data, next = null){
//     this.data = data;
//     this.next = next;
//   }
//   setNextNode(node){
//     if(node instanceof Node || node === null){
//       this.next = node
//     } else {
//       throw new Error('Next node must be an instance of Node');
//     }
//   }
//   getNextNode(){
//     return this.next
//   }
// }

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
    this.previous = null;
  }
  setNextNode(node) {
    if (node instanceof Node || node === null) {
      this.next = node;
    } else {
      throw new Error('Next node must be an instance of Node');
    }
  }
  setPreviousNode(node) {
    if(node instanceof Node || node === null){
      this.previous = node;
    } else {
      throw new Error('Previous node must be an instance of Node');
    }
  }
  getNextNode() {
    return this.next;
  }
  getPreviousNode() {
    return this.previous;
  }
}
  export default Node