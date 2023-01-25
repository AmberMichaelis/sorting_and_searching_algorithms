class Sorting {
    constructor(array) {
        this.array = array
    }

    bubbleSort = () => {
        let isSorted;
        for (let i = 0; i < this.array.length; i++) {
            isSorted = true;
            for (let j = 1; j < this.array.length - i; j++) {
                if (this.array[j] < this.array[j - 1]) {
                    this.#swap(j, j - 1)
                    isSorted = false;
                }
            }
            if (isSorted) {
                console.log(this.array);
                return;
            }
        }
    }

    #swap(index1, index2) {
        let temp = this.array[index1];
        this.array[index1] = this.array[index2];
        this.array[index2] = temp;
    }

    insertionSort = () => {
        for (let i = 1; i < this.array.length; i++) {
            let current = this.array[i];
            let j = i - 1;
            while (j >= 0 && this.array[j] > current) {
                this.array[j + 1] = this.array[j--];
            }
            this.array[j + 1] = current;
        }
        console.log(this.array);
    }

    selectionSort = () => {
        let smallestIndex;
        for (let i = 0; i < this.array.length; i++) {
            smallestIndex = i;
            for (let j = i + 1; j < this.array.length; j++) {
                if (this.array[j] < this.array[smallestIndex]) {
                    smallestIndex = j
                }
            }
            this.#swap(i, smallestIndex)
        }
        console.log(this.array);
    }
}

var test = new Sorting([3,2,4,1,7,9,3]);
test.bubbleSort();
