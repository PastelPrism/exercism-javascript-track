export function dayRate(ratePerHour) {
  return ratePerHour * 8;
}

export function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / dayRate(ratePerHour));
}

export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  
    const fullMonthDays = 22;
    const fullMonths = Math.floor(numDays / fullMonthDays);
    const remainingDays = numDays % fullMonthDays;
    
    const dayRateValue = dayRate(ratePerHour);
    const discountedDayRate = dayRateValue * (1 - discount);
    
    const costFullMonths = fullMonths * fullMonthDays * discountedDayRate;
    const costRemainingDays = remainingDays * dayRateValue;
  
    return Math.ceil(costFullMonths + costRemainingDays);
}