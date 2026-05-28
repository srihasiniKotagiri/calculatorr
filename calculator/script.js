const display = document.getElementById("display");
let currentExpression = "";

function appendValue(value) {
  if (currentExpression === "" && value === "0") {
    currentExpression = "0";
  } else {
    currentExpression += value;
  }
  updateDisplay();
}

function clearDisplay() {
  currentExpression = "";
  updateDisplay();
}

function deleteLast() {
  currentExpression = currentExpression.slice(0, -1);
  updateDisplay();
}

function updateDisplay() {
  display.textContent = currentExpression || "0";
}

function calculate() {
  if (!currentExpression) return;

  const expression = currentExpression.replace(/÷/g, "/").replace(/×/g, "*").replace(/–/g, "-");
  try {
    const result = Function(`"use strict"; return (${expression})`)();
    currentExpression = String(result);
  } catch (error) {
    currentExpression = "Error";
  }
  updateDisplay();
}
