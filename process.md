Process Documentation

markdown
 Process Documentation – Number System Converter
This document explains the steps followed to design, implement, and test the Number System Converter project.

 Problem Statement
Users need a simple and intuitive tool to convert numbers between different number systems: Binary, Octal, Decimal, and Hexadecimal

 Requirements
 Input field for the number to convert.
Dropdown menus for selecting `From Base` and `To Base`.
Convert button to trigger conversion.
Result display area.

Design Process
1. UI Design:
   - Built a clean form with input, dropdowns, and a button in `index.html`.
   - Centered the UI with CSS for better user experience.

2. **Logic Design:**  
   - Used JavaScript `parseInt(value, fromBase)` to convert input to decimal.
   - Used `.toString(toBase)` to convert decimal to target base.

3. **Error Handling:**  
   - Added checks for invalid input using `isNaN()`.
   - Returned a clear message when the input is invalid.

4. **Styling:**  
   - Used CSS to add spacing, background colors, and hover effects on the button.
   - Applied rounded corners and shadows for a professional look.

---

 Testing
| Test Case | Input | From | To | Expected Output | Result |
|----------|------|-----|----|----------------|--------|
| 1 | `1010` | 2 | 10 | `10` |  |
| 2 | `F` | 16 | 2 | `1111` |  |
| 3 | `77` | 8 | 16 | `3F` |  |
| 4 | `2` | 2 | 10 | Invalid input |  |

---

 Challenges & Solutions
- **Challenge:** Handling invalid characters (e.g. `Z` in binary input).  
- **Solution:** Checked `isNaN(decimalValue)` and returned `"Invalid input for base X"` message.

---

 Conclusion
The converter works as expected for bases 2, 8, 10, and 16. It provides a friendly UI, handles errors gracefully, and is easy to use.

