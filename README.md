## Authors                 ADM
KIIO EMMANUEL KEITH      PA106/G/22270/24
MUTISO ERIC MBALUKA       PA106/G/21817/24
MORRIS MACHARIA           PA106/G/21560/24
SAMUEL MWANGI             PA106/G/21386/24


  Number System Converter
A simple web-based tool to convert numbers between **Binary**, **Octal**, **Decimal**, and **Hexadecimal** systems.

  Features
- Convert between bases **2, 8, 10, 16**
- Handles invalid or empty inputs gracefully
- Clean, responsive, and user-friendly UI

 How to Run
1. Clone or download this repository.
2. Open `index.html` in any modern web browser.
3. Enter a value, select the source base and target base, then click **Convert**.

 Input & Output Examples
| Input | From Base | To Base | Output |
|------|-----------|--------|--------|
| `1010` | 2 | 10 | `10` |
| `A` | 16 | 2 | `1010` |
| `77` | 8 | 16 | `3F` |\

Main Function
javascript
function convertBase(value, fromBase, toBase) {
  if (!value) return "No input";
  try {
    const decimalValue = parseInt(value, fromBase);
    if (isNaN(decimalValue)) return "Invalid input for base " + fromBase;
    return decimalValue.toString(toBase).toUpperCase();
  } catch (error) {
    return "Error: " + error.message;
  }
}
