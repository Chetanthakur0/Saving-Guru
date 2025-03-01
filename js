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
