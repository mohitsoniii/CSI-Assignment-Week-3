# CSI-Assignment-Week-3

## 🔁 Callback to Promises to Async/Await

This assignment demonstrates how to convert asynchronous JavaScript code from **callbacks** to **Promises**, and finally to **Async/Await** for better readability and error handling.

---

### ✅ `callback.js`
- Uses traditional Node.js callbacks.
- Performs a sequence of file operations:
  - Creates a file
  - Reads the content
  - Deletes the file

### ✅ `promises.js`
- Uses `fs.promises` to rewrite the same logic using Promises.
- Avoids callback nesting with `.then()` and `.catch()`.

### ✅ `async-await.js`
- Refactors the logic into an `async` function using `await`.
- Cleanest and most readable version.
