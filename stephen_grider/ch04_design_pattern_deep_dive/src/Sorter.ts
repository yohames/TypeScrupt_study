interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}
export class Sorter {
  constructor(public collection: Sortable) {}
  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
          if (this.collection.compare(j, j + 1)) {
              this.collection.swap(j, j + 1);
        }
    }
}
}
}

// if (this.collection instanceof Array) { // Use type guard to check if the collection is an array, then you can restore the type of the collection that are removed by the union type