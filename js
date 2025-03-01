function calculate() {
  // ... previous code ...

  // Progress Bar Update
  const progress = (totalSavings / goal) * 100;
  document.getElementById("progress-bar").style.width = progress + "%";
  document.getElementById("progress-text").innerHTML = 
    `Goal: ₹${goal} | Progress: ${progress.toFixed(1)}%`;
}
function calculate() {
  // ... previous code ...
function calculate() {
  // ... previous code ...

  // Personalized Tips
  let tipsHTML = "";
  if (expenses > income * 0.5) {
    tipsHTML += "⚠️ <strong>Apke expenses 50% se zyada hain!</strong> ₹" + (expenses - income*0.5) + " kam karein.<br>";
  }
  if (savings < 10000) {
    tipsHTML += "💡 <strong>Savings badhane ke liye</strong> EMI options check karein.<br>";
  }
  document.getElementById("tips").innerHTML = tipsHTML;
}
  // Pie Chart
  const ctx = document.getElementById('myChart');
  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Income', 'Expenses', 'Savings'],
      datasets: [{
        data: [income, expenses, savings],
        backgroundColor: ['#4CAF50', '#FF5722', '#2196F3']
      }]
    }
  });
}
function shareOnWhatsApp() {
  const message = `Mera Monthly Savings: ₹${savings}. Apna bhi calculate karein: https://your-site.com`;
  window.open(`https://wa.me/?text=${encodeURIComponent(message)}`);
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
                          }                }
