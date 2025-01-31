/**
 * This module provides an implementation of a singly linked list in TypeScript.
 *
 * A linked list is a linear data structure where each element, called a node,
 * contains a piece of data and a reference (or link) to the next node in the sequence.
 * The first node in the list is referred to as the head, and the last node points to null,
 * indicating the end of the list.
 *
 * This implementation includes:
 *
 * - `LinkedListNode`: A class representing a node in the linked list. Each node contains data
 *   and a reference to the next node in the list.
 * - `LinkedList`: A class representing the linked list itself. It includes methods to add new
 *   nodes to the end of the list.
 *
 * The `LinkedList` class supports the following operations:
 *
 * - `add(data: number)`: Adds a new node with the specified data to the end of the linked list.
 *
 * Example usage:
 *
 * ```typescript
 * const list = new LinkedList();
 * list.add(1);
 * list.add(2);
 * list.add(3);
 * ```
 *
 * In this example, a linked list is created and three nodes are added to it, with the data values
 * 1, 2, and 3, respectively.
 */
/**
 * A class representing a node in a linked list.
 * Each node contains data and a reference to the next node in the list.
 */

import { Sorter } from "./Sorter";

class LinkedListNode {
  // The 'next' property can hold a reference to another Node or be null
  next: LinkedListNode | null = null;

  // The constructor initializes the 'data' property with the provided value
  constructor(public data: any) {}
}

export class LinkedList extends Sorter {
  head: LinkedListNode | null = null;

  constructor() {
    super();
  }

  get length(): number {
    let current = this.head;
    let count = 0;

    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  add(data: number) {
    const node = new LinkedListNode(data);
    if (!this.head) {
      this.head = node;
      return;
    }
    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    tail.next = node;
  }

  at(index: number): LinkedListNode | null {
    let tail = this.head;
    if (!tail) throw new Error("Index out of bouds");

    let count = 0;
    while (tail.next) {
      if (count == index) {
        return tail;
      }
      count++;
      tail = tail.next;
    }
    return null;
    // throw new Error("Index out of bounds Final Error");
  }

  print(): void {
    let current = this.head;
    let list: number[] = [];
    while (current) {
      list.push(current.data);
      current = current.next;
    }
    console.log(list.join(" -> "));
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    if (!leftNode || !rightNode) return false;
    return leftNode?.data > rightNode?.data;
  }
  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    if (!leftNode || !rightNode) return;

    const temp = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = temp;
  }
}
