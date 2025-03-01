function calculate() {
  const income = parseFloat(document.getElementById('income').value);
  const expenses = parseFloat(document.getElementById('expenses').value);
  const goal = parseFloat(document.getElementById('goal').value);
  const months = parseFloat(document.getElementById('months').value);

  // Savings Calculation
  const savings = income - expenses;
  const totalSavings = savings * months;

  // Required Savings to Reach Goal
  const shortfall = goal - totalSavings;
  const requiredSavings = shortfall > 0 ? (shortfall / months) : 0;

  // Result Text
  let resultText = `Aap ₹${savings.toFixed(2)} mahine bacha sakte hain. `;
  resultText += `${months} mahine mein aapka total savings ₹${totalSavings.toFixed(2)} hoga. `;
  
  if (shortfall > 0) {
    resultText += `Apne goal ₹${goal.toFixed(2)} tak pahunchne ke liye aapko ₹${requiredSavings.toFixed(2)} mahine aur bachane ki zarurat hai.`;
  } else {
    resultText += `Badhai ho! Aap apne goal ₹${goal.toFixed(2)} tak pahunch chuke hain.`;
  }

  document.getElementById('result').innerText = resultText;
    }
