<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Savings Calculator</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f9;
      color: #333;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
    }
    .container {
      background: #fff;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      max-width: 400px;
      width: 100%;
    }
    h2 {
      text-align: center;
      color: #007BFF;
    }
    input {
      width: 100%;
      padding: 10px;
      margin: 10px 0;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    button {
      width: 100%;
      padding: 10px;
      background: #007BFF;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    button:hover {
      background: #0056b3;
    }
    .result {
      margin-top: 20px;
      padding: 10px;
      background: #e9f5ff;
      border-radius: 5px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>Savings Calculator</h2>
    <input type="number" id="income" placeholder="Monthly Income (₹)">
    <input type="number" id="expenses" placeholder="Monthly Expenses (₹)">
    <input type="number" id="goal" placeholder="Savings Goal (₹)">
    <input type="number" id="months" placeholder="Timeframe (Months)">
    <button onclick="calculate()">Calculate</button>
    <div class="result" id="result"></div>
  </div>

  <script>
    function calculate() {
      const income = parseFloat(document.getElementById('income').value);
      const expenses = parseFloat(document.getElementById('expenses').value);
      const goal = parseFloat(document.getElementById('goal').value);
      const months = parseFloat(document.getElementById('months').value);

      const savings = income - expenses;
      const totalSavings = savings * months;
      const shortfall = goal - totalSavings;
      const requiredSavings = goal / months;

      let resultText = `Aap ₹${savings.toFixed(2)} mahine bacha sakte hain. `;
      resultText += `${months} mahine mein aapka total savings ₹${totalSavings.toFixed(2)} hoga. `;
      resultText += `Apne goal ₹${goal.toFixed(2)} tak pahunchne ke liye aapko ₹${requiredSavings.toFixed(2)} mahine bachane ki zarurat hai.`;

      document.getElementById('result').innerText = resultText;
    }
  </script>
</body>
</html>
