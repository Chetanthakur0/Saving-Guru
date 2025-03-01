function calculate() {
  // ... previous code ...

  // Progress Bar Update
  const progress = (totalSavings / goal) * 100;
  document.getElementById("progress-bar").style.width = progress + "%";
  document.getElementById("progress-text").innerHTML = 
    `Goal: ₹${goal} | Progress: ${progress.toFixed(1)}%`;
}
