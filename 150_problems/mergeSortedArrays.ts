
function merge(nums1: number[], m: number, nums2: number[], n: number): void {    
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while (j >= 0 && i >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }
};

let arr1 = [1,2,3,0,0,0];
let arr2 = [2,5,6];

merge(arr1, 3, arr2, 3);

console.log(arr1);
