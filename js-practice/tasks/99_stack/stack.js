// ### Stack

// Implement stack data structure without using Array. The class should support following methods:

// * push;
// * pop;

// and props:

// * isEmpty;
// * size;
class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  get last() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.top) {
      newNode.prev = this.top;
    }
    this.top = newNode;
    this.size++;
  }

  pop() {
    if (this.isEmpty()) return null;

    const poppedValue = this.top.value;
    this.top = this.top.prev;
    this.size--;
    return poppedValue;
  }

  isEmpty() {
    return this.size === 0;
  }
}

export { Stack };

const stack = new Stack();

stack.push(5);
stack.push(10);
stack.push(15);

console.log(stack.last.value);
console.log(stack.pop());
console.log(stack.last.value);
