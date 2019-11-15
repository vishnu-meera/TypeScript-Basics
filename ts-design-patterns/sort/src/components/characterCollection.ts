import { Sortable } from "../inteface/index";
import { Sorter } from "./sorter";
export class CharacterCollection extends Sorter implements Sortable {
  constructor(public data: string) {
    super();
  }

  swap(leftIndex: number, rightIndex: number): void {
    let tempArr = this.data.split("");
    let temp = tempArr[leftIndex];
    tempArr[leftIndex] = tempArr[rightIndex];
    tempArr[rightIndex] = temp;
    this.data = tempArr.join("");
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }

  get length(): number {
    return this.data.length;
  }
}
