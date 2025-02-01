"use strict";
/**
 * Bubble Sort Algorithm
 *
 * Bubble Sort is a simple sorting algorithm that repeatedly steps through the list,
 * compares adjacent elements and swaps them if they are in the wrong order. The pass
 * through the list is repeated until the list is sorted. The algorithm gets its name
 * because smaller elements "bubble" to the top of the list.
 *
 * The algorithm works as follows:
 * 1. Starting from the beginning of the list, compare the first two elements.
 * 2. If the first element is greater than the second, swap them.
 * 3. Move to the next pair of elements and repeat the comparison and swap if necessary.
 * 4. Continue this process until the end of the list is reached. This completes one pass.
 * 5. Repeat the entire process for the remaining elements, excluding the last sorted elements.
 * 6. Continue until no swaps are needed, indicating that the list is sorted.
 *
 * Time Complexity:
 * - Worst-case: O(n^2)
 * - Best-case: O(n) when the list is already sorted
 * - Average-case: O(n^2)
 *
 * Space Complexity:
 * - O(1) as it is an in-place sorting algorithm
 *
 * Bubble Sort is not suitable for large datasets due to its quadratic time complexity.
 * However, it is easy to understand and implement, making it useful for educational purposes.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// import { Sorter } from "./Sorter"; // no need to import Sorter class because we implement an abstract class Sorter in each class
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
// ============ Numbers ============
const randomArray = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100));
console.log("Random Numbers:", randomArray);
const numbers = new NumbersCollection_1.NumbersCollection(randomArray);
// const sortedNumbers = new Sorter(numbers);// replaced by abstract class Sorter, so no need to create an instance of Sorter
numbers.sort();
console.log("Random Numbers:", randomArray);
// ============ String ============
const chars = new CharactersCollection_1.CharactersCollection("baXay");
// const sortedChars = new Sorter(chars); // replaced by abstract class Sorter, so no need to create an instance of Sorter
chars.sort();
console.log("Sort String: baXay");
console.log("Sort String:", chars.data);
// ============ LinkedList ============
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.add(-89);
linkedList.print();
console.log("linkedlist length", linkedList.length);
// const sortedLinkedList = new Sorter(linkedList);// replaced by abstract class Sorter, so no need to create an instance of Sorter
linkedList.sort();
linkedList.print();
