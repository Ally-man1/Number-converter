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
  
  document.getElementById("convert").addEventListener("click", () => {
    const val = document.getElementById("value").value.trim();
    const from = parseInt(document.getElementById("fromBase").value);
    const to = parseInt(document.getElementById("toBase").value);
  
    const result = convertBase(val, from, to);
    document.getElementById("result").textContent = result;
  });
  