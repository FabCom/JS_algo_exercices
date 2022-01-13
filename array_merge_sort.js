class ArrayMergeSort {
  constructor(array_of_strings){
    this.array_of_strings = array_of_strings
    this.array_sorted = new Array();
    this.counter = 0;
    let init = this.init();
  }
  display(){
    console.log("Tableau initial : " + this.array_of_numbers)
    console.log("Tableau trié en " + this.counter + " comparaisons (via mergeSort) : " + this.array_sorted)
  }
  init(){
    // console.log(typeof this.array_of_strings)
    this.array_of_numbers = this.array_of_strings.split(' ').map(element => parseInt(element))
    this.array_of_numbers.forEach(element => { this.array_sorted.push(element) });
    this.mergeSort(this.array_sorted, 0, this.array_sorted.length -1)
  }
  merge(arr, l, m, r){
    var n1 = m - l + 1;
    var n2 = r - m;
  
    // Create temp arrays
    var L = new Array(n1); 
    var R = new Array(n2);
  
    // Copy data to temp arrays L[] and R[]
    for (var i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (var j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];
  
    // Merge the temp arrays back into arr[l..r]
  
    // Initial index of first subarray
    var i = 0;
  
    // Initial index of second subarray
    var j = 0;
  
    // Initial index of merged subarray
    var k = l;
  
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
        this.counter ++;
    }
  
    // Copy the remaining elements of
    // L[], if there are any
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
        this.counter ++;
    }
  
    // Copy the remaining elements of
    // R[], if there are any
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
        this.counter ++;
    }
  }
    
  // l is for left index and r is
  // right index of the sub-array
  // of arr to be sorted */
  mergeSort(arr,l, r){
    // console.log(arr)
    if(l>=r){
        return;//returns recursively
    }
    var m =l+ parseInt((r-l)/2);
    this.mergeSort(arr,l,m);
    this.mergeSort(arr,m+1,r);
    this.merge(arr,l,m,r);
  }
}
module.exports = ArrayMergeSort
