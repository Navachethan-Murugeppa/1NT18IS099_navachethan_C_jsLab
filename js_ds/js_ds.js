// program to implement stack data structure
class Stack {
    constructor() {
        this.items = [];
    }
    
    // add element to the stack
    add(element) {
        return this.items.push(element);
    }
    
    // remove element from the stack
    remove() {
        if(this.items.length > 0) {
            return this.items.pop();
        }
    }
    
    // view the last element
    peek() {
        return this.items[this.items.length - 1];
    }
    
    // check if the stack is empty
    isEmpty(){
       return this.items.length == 0;
    }
   
    // the size of the stack
    size(){
        return this.items.length;
    }
 
    // empty the stack
    clear(){
        this.items = [];
    }
}
console.log('stack implementation');
let stack = new Stack();
stack.add(1);
stack.add(2);
stack.add(4);
stack.add(8);
console.log(stack.items);
console.log(stack.peek());
stack.remove();
console.log(stack.items);

console.log(stack.peek());

console.log(stack.isEmpty());

console.log(stack.size());

stack.clear();
console.log(stack.items);
console.log(stack.isEmpty());

//Queue

class Queue {
    constructor() {
      this.items = {};
      this.headIndex = 0;
      this.tailIndex = 0;
    }
  
    enqueue(item) {
      this.items[this.tailIndex] = item;
      this.tailIndex++;
    }
  
    dequeue() {
      const item = this.items[this.headIndex];
      delete this.items[this.headIndex];
      this.headIndex++;
      return item;
    }
  
    peek() {
      return this.items[this.headIndex];
    }
  
    get length() {
      return this.tailIndex - this.headIndex;
    }
  }
  console.log("Queue implementation");
  const queue = new Queue();
  
  queue.enqueue(7);
  queue.enqueue(2);
  queue.enqueue(6);
  queue.enqueue(4);
  console.log(queue.items);
  console.log("pop"+queue.dequeue()); // => 7
  
  console.log(queue.peek());    // => 2
  
  console.log(queue.length);    // => 3

  //priority queue
  
  function PriorityQueueFactory() {
    const items = [];
  
    return {
      enqueue,
      dequeue,
      front,
      isEmpty,
      size,
      print,
    };
  
    function createQueueElement(element, priority) {
      return {
        element,
        priority,
      };
    }
  
    function enqueue(element, priority) {
      const newElement = createQueueElement(element, priority);
      let added = false;
  
      for (let index = 0; index < items.length; index++) {
        const currentElement = items[index];
  
        if (newElement.priority < currentElement.priority) {
          items.splice(index, 0, newElement);
          added = true;
          break;
        }
      }
  
      if (!added) {
        items.push(newElement);
      }
    }
  
    function dequeue() {
      return items.shift();
    }
  
    function front() {
      return items[0];
    }
  
    function isEmpty() {
      return items.length === 0;
    }
  
    function size() {
      return items.length;
    }
  
    function print() {
      for(const item of items){
        console.log(`element: ${item.element} - priority: ${item.priority}`)
      }
    }
  }
  
  var q = PriorityQueueFactory();
  
  q.enqueue('John', 2);
  q.enqueue('Olivia', 1);
  q.enqueue('Karmen', 3);
  q.enqueue('Oliver', 1);
  
  q.print();
  q.dequeue();
  console.log("");
  q.print();