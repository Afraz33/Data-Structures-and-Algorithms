//{ Driver Code Starts
//Initial Template for javascript
"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
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
  for (; i < t; i++) {
    let N = parseInt(readLine());
    let A = new Array(N);
    let input_ar1 = readLine()
      .split(" ")
      .map((x) => parseInt(x));
    for (let i = 0; i < N; i++) A[i] = input_ar1[i];
    let p = 0;
    for (let i = 0; i < N - 1; i++) {
      if (A[i + 1] > A[i]) p += A[i + 1] - A[i];
    }
    let obj = new Solution();
    let res = obj.stockBuySell(A, N);
    if (res.length == 0) {
      console.log("No Profit");
    } else {
      let c = 0;
      for (let i = 0; i < res.length; i++) {
        c += A[res[i][1]] - A[res[i][0]];
      }
      if (c == p) console.log(1);
      else console.log(0);
    }
  }
}
// } Driver Code Ends

//User function Template for javascript

/**
 * @param {number[]} A
 * @param {number} n
 * @returns {number[][]}
 */
class Interval {
  constructor(buy, sell) {
    this.buy = buy;
    this.sell = sell;
  }
}
class Solution {
  //Function to find the days of buying and selling stock for max profit.

  stockBuySell(A, n) {
    //array to return
    let result = [];

    //prices can be compared of two days minimum
    if (n == 1) return result;

    let pairCount = 0;

    let solution = [];
    //initializing solution array
    for (let i = 0; i < Math.floor(n / 2) + 1; i++) {
      solution.push(new Interval(0, 0));
    }

    //for iterating in array
    let i = 0;
    while (i < n - 1) {
      //storing local minima
      while (i < n - 1 && A[i + 1] <= A[i]) i++;

      if (i == n - 1) break;

      solution[pairCount].buy = i++;

      //storing local maxima
      while (i < n && A[i] >= A[i - 1]) i++;

      solution[pairCount].sell = i - 1;

      //incrementing count of buy/sell pairs
      pairCount++;
    }
    if (pairCount == 0) return result;
    else {
      for (let i = 0; i < pairCount; i++) {
        let temp = [];
        temp.push(solution[i].buy);
        temp.push(solution[i].sell);
        result.push(temp);
      }
    }

    //returning result array
    return result;
  }
}
