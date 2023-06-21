//{ Driver Code Starts
//Initial Template for javascript

//This problem rotates an array by a given number of elements. 
//The array is rotated in counter-clockwise direction. 
//The function rotateArr() takes the array, the number by which it is to be rotated 
//and the size of the array as its arguments and rotates the array. The driver code prints the rotated array.
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let input_ar0 = readLine().split(' ').map(x=>parseInt(x));
        let n = input_ar0[0];
        let d = input_ar0[1];
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++)
            arr[i] = input_ar1[i];
        let obj = new Solution();
        obj.rotateArr(arr, d, n);
        let S = '';
        for(let i=0;i<n;i++)
        {
            S+=arr[i];
            S+=' ';
        }
        console.log(S);
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} d
 * @param {number} n
 */
 
class Solution {
    
     //function to reverse any part of the array
       reverseArray(arr, start, end)
         {
            let temp;
            
            while(start<end)
            {
                temp = arr[start];
                arr[start] =arr[end];
                arr[end] = temp;
                
                start++;
                end--;
            }
         }
    
    //Function to rotate an array by d elements in counter-clockwise direction. 
    rotateArr(arr, d, n){
        
        
       d= d%n;
        
            //reversing 0 to d-1 elements
            this.reverseArray(arr,0,d-1);
            
            //reversing d to n-1 elements
            this.reverseArray(arr,d,n-1);
             
            //reversing whole array
            this.reverseArray(arr,0,n-1);
            
        }
    }
