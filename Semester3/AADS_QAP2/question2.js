/* 
  Question 2:
  Given a singly linked list and a key, count the number of occurrences of the
  given key in the linked list. For example, if the given linked list is
  1->2->1->2->1->3->1 and the given key is 1, then the output should be 4.
*/

const { DoublyLinkedList } = require("./class/DoubleLinkedList");

function countTarget(list, x) {
  let current = list.head;
  let count = 0;
  while (current != null) {
    if (current.element == x) count++;
    current = current.next;
  }
  return `${count} Occurrence(s)`;
}

const list = new DoublyLinkedList();

list.insert(1, 0);
list.insert(2, 1);
list.insert(3, 2);
list.insert(3, 3);
list.insert(3, 4);
list.insert(1, 4);
console.log(list.toString());
const target = 1;

console.log(countTarget(list, target));
