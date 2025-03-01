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
                          }
