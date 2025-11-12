// Function: convertBase
// Purpose: Converts a given number (as a string) from one base to another
function convertBase(value, fromBase, toBase) {
  // If the input is empty, return a message
  if (!value) return "No input";
  
  try {
    // Convert the input value from its original base to a decimal (base 10) integer
    const decimalValue = parseInt(value, fromBase);

    // Check if the conversion failed (invalid character for that base)
    if (isNaN(decimalValue)) return "Invalid input for base " + fromBase;

    // Convert the decimal value to the target base and return the result in uppercase
    return decimalValue.toString(toBase).toUpperCase();
  } catch (error) {
    // If any unexpected error occurs, return the error message
    return "Error: " + error.message;
  }
}

// Add a click event listener to the "convert" button
document.getElementById("convert").addEventListener("click", () => {
  // Get and trim the input value from the user
  const val = document.getElementById("value").value.trim();

  // Get the selected source and target bases as integers
  const from = parseInt(document.getElementById("fromBase").value);
  const to = parseInt(document.getElementById("toBase").value);

  // Perform the conversion using the convertBase function
  const result = convertBase(val, from, to);

  // Display the conversion result in the "result" element
  document.getElementById("result").textContent = result;
});
