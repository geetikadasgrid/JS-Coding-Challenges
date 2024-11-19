// ### Linked list

// Implement doubly linked list data structure without using Array. The class should support following methods:

// * push;
// * pop;
// * iterate;
// * insertAfter;
// * removeItem;

// and props:

// * amount;

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.amount = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      // eslint-disable-next-line no-multi-assign
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.amount++;
  }

  pop() {
    if (!this.head) return null;
    if (!this.head.next) {
      const { value } = this.head;
      // eslint-disable-next-line no-multi-assign
      this.head = this.tail = null;
      this.amount--;
      return value;
    }

    let current = this.head;
    while (current.next !== this.tail) {
      current = current.next;
    }

    const { value } = this.tail;
    this.tail = current;
    this.tail.next = null;
    this.amount--;
    return value;
  }

  iterate(callback) {
    let current = this.head;
    while (current) {
      callback(current);
      current = current.next;
    }
  }

  insertAfter(value, newValue) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        const newNode = new Node(newValue);
        newNode.next = current.next;
        current.next = newNode;

        if (current === this.tail) {
          this.tail = newNode;
        }

        this.amount++;
        return true;
      }
      current = current.next;
    }
    return false;
  }

  removeItem(value) {
    if (!this.head) return false;

    if (this.head.value === value) {
      this.head = this.head.next;
      this.amount--;
      if (!this.head) {
        this.tail = null;
      }
      return true;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.value === value) {
        current.next = current.next.next;
        if (!current.next) {
          this.tail = current;
        }
        this.amount--;
        return true;
      }
      current = current.next;
    }

    return false;
  }
}

export { LinkedList };
