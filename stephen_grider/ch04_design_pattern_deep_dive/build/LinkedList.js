"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const Sorter_1 = require("./Sorter");
class LinkedListNode {
    // The constructor initializes the 'data' property with the provided value
    constructor(data) {
        this.data = data;
        // The 'next' property can hold a reference to another Node or be null
        this.next = null;
    }
}
class LinkedList extends Sorter_1.Sorter {
    constructor() {
        super();
        this.head = null;
    }
    get length() {
        let current = this.head;
        let count = 0;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }
    print() {
        let current = this.head;
        let list = [];
        while (current) {
            list.push(current.data);
            current = current.next;
        }
        console.log(list.join(" -> "));
    }
    add(data) {
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
    at(index) {
        let tail = this.head;
        if (!tail)
            throw new Error("Index out of bouds");
        let count = 0;
        while (tail) {
            if (count == index) {
                return tail;
            }
            count++;
            tail = tail.next;
        }
        return null;
        // throw new Error("Index out of bounds Final Error");
    }
    compare(leftIndex, rightIndex) {
        const leftNode = this.at(leftIndex);
        const rightNode = this.at(rightIndex);
        if (!leftNode || !rightNode)
            return false;
        return (leftNode === null || leftNode === void 0 ? void 0 : leftNode.data) > (rightNode === null || rightNode === void 0 ? void 0 : rightNode.data);
    }
    swap(leftIndex, rightIndex) {
        const leftNode = this.at(leftIndex);
        const rightNode = this.at(rightIndex);
        if (!leftNode || !rightNode)
            return;
        const temp = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = temp;
    }
}
exports.LinkedList = LinkedList;
