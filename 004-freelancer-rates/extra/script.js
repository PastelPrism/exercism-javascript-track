function dayRate(ratePerHour) {
  return ratePerHour * 8;
}

function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / dayRate(ratePerHour));
}

function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const fullMonthDays = 22;
  const fullMonths = Math.floor(numDays / fullMonthDays);
  const remainingDays = numDays % fullMonthDays;

  const dayRateValue = dayRate(ratePerHour);
  const discountedDayRate = dayRateValue * (1 - discount);

  const costFullMonths = fullMonths * fullMonthDays * discountedDayRate;
  const costRemainingDays = remainingDays * dayRateValue;

  return Math.ceil(costFullMonths + costRemainingDays);
}

window.calculateDayRate = function () {
  const rate = Number(document.getElementById("ratePerHour").value);
  document.getElementById("dayRateResult").textContent =
    "Day rate: €" + dayRate(rate);
};

window.calculateDaysInBudget = function () {
  const budget = Number(document.getElementById("budget").value);
  const rate = Number(document.getElementById("budgetRate").value);
  document.getElementById("daysBudgetResult").textContent =
    "Days in budget: " + daysInBudget(budget, rate);
};

window.calculateDiscountPrice = function () {
  const rate = Number(document.getElementById("discountRate").value);
  const days = Number(document.getElementById("numDays").value);
  const discount = Number(document.getElementById("discount").value);
  document.getElementById("discountResult").textContent =
    "Total price: €" + priceWithMonthlyDiscount(rate, days, discount);
};
