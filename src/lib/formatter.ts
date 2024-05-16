export function formatCurrency(amount: number): string {
  const formattedAmount = amount.toFixed(2);
  const [rupees, paisa] = formattedAmount.split(".");
  const formattedRupees = rupees.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return `₹ ${formattedRupees}.${paisa}`;
}

export function formatNumber(number: number): string {
  const [integerPart, decimalPart] = number.toFixed(2).split(".");
  const formattedIntegerPart = integerPart.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ","
  );
  const formattedNumber = decimalPart
    ? `${formattedIntegerPart}.${decimalPart}`
    : formattedIntegerPart;

  return formattedNumber;
}


