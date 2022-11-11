/* 
  Question 1:
  Given a sorted doubly linked list of N nodes and an integer X, the task is to
  find the sum of three nodes in the list which is closest to X.
  
  Example 1:
  INPUT: DLL: -8<->2<->3<->4<->5 X=1
  OUTPUT: 1
  EXPLANATION: The required three integers {-8,4,5} whose sum is 1 and is
  closest to 1.

  Example 2:
  INPUT: DLL: 1<->2<->3<->4 X=3
  OUTPUT: 6
  EXPLANATION: The required three integers are {1,2,3} whose sum is 6 and
  is closest to 3.
*/

const { DoublyLinkedList } = require("./class/DoubleLinkedList");

const closestTripletSum = (list, x) => {
  let firstNum = list.head;
  let secondNum = list.next;
  let tail = list.head;

  while (tail.next != null) {
    tail = tail.next;
  }
  let diff = Number.MAX_VALUE;

  let thirdNum = tail;

  while (firstNum != null) {
    secondNum = firstNum.next;
    thirdNum = tail;

    while (secondNum != null && thirdNum != null && thirdNum != secondNum) {
      let sum = firstNum.element + secondNum.element + thirdNum.element;
      // Check if the current sum is closest to x(target).
      if (Math.abs(x - sum) < Math.abs(x - diff)) {
        diff = sum;
      }
      if (sum < x) {
        secondNum = secondNum.next;
      } else {
        thirdNum = thirdNum.prev;
      }
    }
    firstNum = firstNum.next;
  }
  return `Closest triplet sum to ${x} is ${diff}.`;
};

const list = new DoublyLinkedList();

// first Example:
// list.insert(-8, 0);
// list.insert(2, 1);
// list.insert(3, 2);
// list.insert(4, 3);
// list.insert(5, 3);
// console.log(list.toString());
// const target = 1;

// Second Example:
list.insert(1, 0);
list.insert(2, 1);
list.insert(3, 2);
list.insert(4, 3);
console.log(list.toString());
const target = 3;

console.log(closestTripletSum(list, target));
