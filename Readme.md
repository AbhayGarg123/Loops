# JavaScript Number Analysis (153) 🚀

This repository contains pure JavaScript logic to analyze the number **153**. The entire code is written using core logic and **bitwise operators**, without relying on any built-in JavaScript functions (like `Math.floor`, `parseInt`, `Math.pow`, or array methods).

---

## 🔥 Features Checked for Number 153

### 1. Digits Summation
* Extracts each digit using the remainder operator (`%`).
* Uses bitwise OR (`| 0`) for integer division to drop decimals without using any function.
* Result for `153`: `1 + 5 + 3 = 9`.

### 2. Armstrong Number Check
* Counts the total digits dynamically (which is 3).
* Multiplies each digit manually 3 times (\(1^3 + 5^3 + 3^3\)) to verify if it equals `153`.
* Uses temporary variables to prevent the original number from turning into `0`.

### 3. Single-Line Factor Finder & Prime Check
* Finds all divisors of `153`.
* Uses string concatenation to print all factors in a **single line separated by commas**.
* Output: `1, 3, 17, 51, 153`
* Identifies that `153` has more than 2 factors, so it is **NOT a Prime number**.

---

## 🛠️ Key Logic Used

* **Integer Division:** `(num / 10) | 0` instead of `Math.floor(num / 10)`
* **Manual Power:** A custom loop instead of `Math.pow()`
* **Clean Formatting:** Factors accumulated in a string variable before a single `console.log()`