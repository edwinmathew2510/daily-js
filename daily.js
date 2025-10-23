// day 18 :string pattern

let row;
let n = 11;
for (let i = 0; i < n; i++) {
  row = "";
  for (let j = 0; j < n; j++) {
    if (
      i == 0 ||
      i == n - 1 ||
      j == 0 ||
      j == n - 1 ||
      i == Math.floor(n / 2) ||
      j == Math.floor(n / 2) ||
      i + j == n - 1 ||
      i == j ||
      i + j == Math.floor(n / 2) ||
      i - j == Math.floor(n / 2) ||
      j - i == Math.floor(n / 2) ||
      j + i == n - 1 + Math.floor(n / 2)
    ) {
      row += "* ";
    } else {
      row += "  ";
    }
  }
  console.log(row);
}
