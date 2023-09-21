


function longestCommonPrefix(arr) {
  let ans = "";
  arr.sort();
  let first = arr[0];
  let last = arr[arr.length - 1];
  for (let i = 0; i < Math.min(first.length, last.length); i++) {
    if (first[i] !== last[i]) {
      return ans;
    }
    ans += first[i];
  }
  return ans;
}

// Test
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
