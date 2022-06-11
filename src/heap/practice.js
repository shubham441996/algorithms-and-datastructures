class Heap {
  constructor() {
    this.values = [];
  }
  insertInMaxHeap(ele) {
    this.values.push(ele);
    let index = this.values.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);
    while (
      parentIndex >= 0 &&
      index >= 0 &&
      this.values[parentIndex] < this.values[index]
    ) {
      [this.values[parentIndex], this.values[index]] = [
        this.values[index],
        this.values[parentIndex],
      ];
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }
  extractMaxHeap() {
    let ele = this.values[0];
    let len = this.values.length - 1;
    this.values[0] = this.values[len];
    this.values.pop();
    let index = 0;
    while (true) {
      let childLeftIndex = 2 * index + 1;

      if (this.values[childLeftIndex] > this.values[index]) {
        [this.values[childLeftIndex], this.values[index]] = [
          this.values[index],
          this.values[childLeftIndex],
        ];
        index = childLeftIndex;
      } else if (this.values[childLeftIndex + 1] > this.values[index]) {
        [this.values[childLeftIndex + 1], this.values[index]] = [
          this.values[index],
          this.values[childLeftIndex + 1],
        ];
        index = childLeftIndex + 1;
      } else {
        return ele;
      }
    }
  }
}

let heap = new Heap();
heap.insertInMaxHeap(40);
heap.insertInMaxHeap(53);
heap.insertInMaxHeap(65);
heap.insertInMaxHeap(31);
heap.insertInMaxHeap(15);
heap.insertInMaxHeap(90);
heap.insertInMaxHeap(100);
heap.insertInMaxHeap(99);
console.log(heap.extractMaxHeap());

console.log(heap.values);
