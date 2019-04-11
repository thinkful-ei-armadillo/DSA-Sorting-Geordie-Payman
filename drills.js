/* 
Given the following list of numbers 21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40

What is the resulting list that will be sorted after 3 recursive calls to mergesort?
What is the resulting list that will be sorted after 16 recursive calls to mergesort?
What are the first 2 lists to be merged?
Which two lists would be merged on the 7th merge?*/

/*1)  21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40 
  21, 1, 26, 45, 29, 28, 2, 9 ||  16, 49, 39, 27, 43, 34, 46, 40 
2) 21, 1, 26, 45 ||  29, 28, 2, 9    
3) 21, 1 || 26, 45
4) 21 || 1
5) 26 || 45
6) 29 , 28 || 2, 9
7) 29 || 28
8) 2 || 9
9) 16, 49, 39, 27 || 43, 34, 46, 40
10) 16 , 49 || 39, 27
11) 16 || 49
12) 39 || 27
13) 43, 34 || 46, 40
14) 43 || 34
15) 46 || 40
1) 1, 21 merge
2) 26, 45 merge
3) 1, 21, 26, 45 merge
4) 28, 29 merge
5) 2, 9 merge
6) 2, 9, 28, 29 merge
7) 1, 2, 9, 21, 26, 28, 29, 45 merge

1 and 21 gets merged first
7th merge is 1, 2, 9, 21, 26, 28, 29, 45


Understanding quicksort

1)The pivot could have been either 14 or 17, makes the most sense. This is because all of the items on the left are less than the potential pivot and all the items on the right are greater than the potential pivot. this holds true for both 14 and 17.

2)
14, 17, 13, 15, 19, 10, 3, 16, 9, 12 
When using the last item on the list as a pivot
10, 3, 9, 12 , 19, 14, 17, 16, 13, 15 - one partition
j = 3 
10, 3, 9 [12] || 19, 14, 17, 16, 13, 15

10, 3, 9,  - partition 2
j = 0, 
3, 10, 9 
j = 1
3, 9, 10  middle = 1

after the second partitioning it looks like 
3, 9, 10, 12, 19, 14, 17, 16, 13, 15




When using the first item on the list as a pivot

first partition - [12, 13, 10, 3, 9, [14], 15, 16, 19, 17] - middle 5
second partition - [9, 10,  3, [12], 13, [14], 15, 16, 19, 17] - middle = 3


*/

const LinkedList = require('./LinkedList');

function quickSort(array, start = 0, end = array.length) {
  if (start >= end) {
    return array;
  }
  const middle = partition(array, start, end);
  array = quickSort(array, start, middle);
  array = quickSort(array, middle + 1, end);
  return array;
}
/*   original
function partition(array, start, end) {
    const pivot = array[end - 1];
    let j = start;
    for (let i = start; i < end - 1; i++) {
        if (array[i] <= pivot) {
            swap(array, i, j);
            j++;
        }
    }
    swap(array, end-1, j);
    return j;
};*/

function partition(array, start, end) {
  debugger;
  const pivot = array[start];
  let j = start + 1;
  for (let i = start + 1; i < end; i++) {
    //console.log(array[i]);
    //console.log(j);
    if (array[i] <= pivot) {
      debugger;
      swap(array, i, j);
      //console.log(array);
      j++;
    }
  }
  debugger;
  swap(array, start, j - 1);
  return j - 1;
}

function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

function main() {
  /*console.log(
    quickSort([
      89,
      30,
      25,
      32,
      72,
      70,
      51,
      42,
      25,
      24,
      53,
      55,
      78,
      50,
      13,
      40,
      48,
      32,
      26,
      2,
      14,
      33,
      45,
      72,
      56,
      44,
      21,
      88,
      27,
      68,
      15,
      62,
      93,
      98,
      73,
      28,
      16,
      46,
      87,
      28,
      65,
      38,
      67,
      16,
      85,
      63,
      23,
      69,
      64,
      91,
      9,
      70,
      81,
      27,
      97,
      82,
      6,
      88,
      3,
      7,
      46,
      13,
      11,
      64,
      76,
      31,
      26,
      38,
      28,
      13,
      17,
      69,
      90,
      1,
      6,
      7,
      64,
      43,
      9,
      73,
      80,
      98,
      46,
      27,
      22,
      87,
      49,
      83,
      6,
      39,
      42,
      51,
      54,
      84,
      34,
      53,
      78,
      40,
      14,
      5
    ])
  );*/
  console.log(
    mergeSort([
      89,
      30,
      25,
      32,
      72,
      70,
      51,
      42,
      25,
      24,
      53,
      55,
      78,
      50,
      13,
      40,
      48,
      32,
      26,
      2,
      14,
      33,
      45,
      72,
      56,
      44,
      21,
      88,
      27,
      68,
      15,
      62,
      93,
      98,
      73,
      28,
      16,
      46,
      87,
      28,
      65,
      38,
      67,
      16,
      85,
      63,
      23,
      69,
      64,
      91,
      9,
      70,
      81,
      27,
      97,
      82,
      6,
      88,
      3,
      7,
      46,
      13,
      11,
      64,
      76,
      31,
      26,
      38,
      28,
      13,
      17,
      69,
      90,
      1,
      6,
      7,
      64,
      43,
      9,
      73,
      80,
      98,
      46,
      27,
      22,
      87,
      49,
      83,
      6,
      39,
      42,
      51,
      54,
      84,
      34,
      53,
      78,
      40,
      14,
      5
    ])
  );
}

main();

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  left = mergeSort(left);
  right = mergeSort(right);
  return merge(left, right, array);
}

function merge(left, right, array) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      array[outputIndex++] = left[leftIndex++];
    } else {
      array[outputIndex++] = right[rightIndex++];
    }
  }

  for (let i = leftIndex; i < left.length; i++) {
    array[outputIndex++] = left[i];
  }

  for (let i = rightIndex; i < right.length; i++) {
    array[outputIndex++] = right[i];
  }
  return array;
}
function display(list) {
  let currNode = list.head;
  if (currNode === null) {
    console.log('List is empty');
    return;
  }
  return displayHelper(currNode, []);
}

function displayHelper(node, arr) {
  if (node === null) {
    return [];
  } else {
    return [node.value, ...displayHelper(node.next)];
  }
}

function secondHalf() {
  //sort linkedlist
  let ll = new LinkedList();
  ll.insertLast(5);
  ll.insertLast(14);
  ll.insertLast(17);
  ll.insertLast(13);
  ll.insertLast(15);
  ll.insertLast(19);
  ll.insertLast(10);
  ll.insertLast(3);
  ll.insertLast(16);
  ll.insertLast(9);
  ll.insertLast(12);

  let arr = display(ll);
  console.log(mergeSort(arr));
  let ll2 = new LinkedList();
  for (let i = 0; i < arr.length; i++) {
    ll2.insertLast(arr[i]);
  }
  console.log(ll2);

  bucketSort([1, 8, 9, 2, 5, 4], 9, 1);
}

function bucketSort(arr, highest, lowest) {
  debugger;
  let difference = highest - lowest;
  let newArr = [...arr];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === lowest) {
      newArr[0] = arr[i];
    } else if (arr[i] === highest) {
      newArr[arr.length - 1] = arr[i];
    } else {
      let index = difference - arr[i] - arr.length + 1;
      newArr[index] = arr[i];
    }
  }
}

function mergeLLSort(list) {
  if (list.head.next === null) {
    return list;
  }

  let counter = 0;
  let curr = list.head;
  while (curr !== null) {
    curr = curr.next;
    counter++;
  }

  left = mergeSort(left);
  right = mergeSort(right);
  return merge(left, right, list);
}

function mergeLL(left, right, list) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      list[outputIndex++] = left[leftIndex++];
    } else {
      list[outputIndex++] = right[rightIndex++];
    }
  }

  for (let i = leftIndex; i < left.length; i++) {
    list[outputIndex++] = left[i];
  }

  for (let i = rightIndex; i < right.length; i++) {
    list[outputIndex++] = right[i];
  }
  return list;
}

secondHalf();
