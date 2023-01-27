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

    bubbleSort2 = () => {
        let stopIndex = this.array.length - 1;
        let isSorted, lastSwap;
        let numSwaps = 0;
        let numComp = 0;
        while (stopIndex > 0) {
            let i = 0;
            isSorted = true;
            while (i < stopIndex) {
                if (this.array[i] > this.array[i + 1]) {
                    this.#swap(i, i + 1)
                    isSorted = false;
                    lastSwap = i;
                    numSwaps++;
                }
                numComp++;
                i++;
            }
            numComp++;
            stopIndex = lastSwap;
            if (isSorted) {
                console.log(this.array, numComp, numSwaps);
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

    mergeSort = (array = this.array) => {
        if (array.length < 2) {
            return array;
        }
        let length = array.length;
        let midIndex = Math.floor(length / 2);
        let left = [];
        for (let i = 0; i < midIndex; i++) {
            left[i] = array[i];
        }
        let right = [];
        for (let j = midIndex; j < length; j++) {
            right[j - midIndex] = array[j];
        }
        // console.log(`length: ${length} | midIndex: ${midIndex} | left: ${left} | right: ${right}`);
        this.mergeSort(left);
        this.mergeSort(right);

        this.#merge(left, right, array);
        console.log(`answer: ${array}`);
    }

    #merge(left, right, result) {
        // i = left pointer | j = right pointer | k = result pointer
        let i = 0, j = 0, k = 0;

        while (i < left.length && j < right.length) {
            if (left[i] <= right[j]) {
                result[k++] = left[i++];
            } else {
                result[k++] = right[j++];
            }
        }
        while (i < left.length) {
            result[k++] = left[i++];
        }
        while (j < right.length) {
            result[k++] = right[j++];
        }
    }
}

var test = new Sorting([4, 3, 1, 5, 2, 6, 7]);
test.mergeSort();
