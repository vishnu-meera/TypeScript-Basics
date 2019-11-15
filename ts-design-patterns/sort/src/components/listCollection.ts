import { Sortable } from "../inteface/index";
import { Sorter } from "./sorter";

class LinkNode {
  next: LinkNode | null = null;
  constructor(public data: number) {}
}

export class LinkedList extends Sorter implements Sortable {
  head: LinkNode = null;
  count: number = 0;

  constructor() {
    super();
  }
  add(data: number): void {
    this.count += 1;
    let newNode = new LinkNode(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let tail = this.head;
    while (tail.next) tail = tail.next;
    tail.next = newNode;
  }

  swap(leftIndex: number, rightIndex: number): void {
    if (!this.head) throw new Error("List is empty");
    let temp = this.at(leftIndex).data;
    this.at(leftIndex).data = this.at(rightIndex).data;
    this.at(rightIndex).data = temp;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) throw new Error("List is empty");
    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  get length(): number {
    return this.count;
  }

  at(index: number): LinkNode {
    if (!this.head) throw new Error("Index out of balance");

    let counter = 0;
    let node: LinkNode | null = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter += 1;
      node = node.next;
    }

    throw new Error("Index out of balance");
  }

  print(): void {
    if (!this.head) throw new Error("List is empty");

    let node: LinkNode | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}
