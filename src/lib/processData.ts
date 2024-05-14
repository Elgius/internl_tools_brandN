export function processData(salaryData: { signed_in: any }[]) {
  let now = new Date();
  let monthsDaysRemaining = new Date(
    now.getFullYear(),
    now.getMonth() + 1,
    0
  ).getDate();
  console.log(`days in the month ${monthsDaysRemaining}`);
  let falseSignInCount = 0;

  salaryData.forEach((item: { signed_in: any }) => {
    if (!item.signed_in) {
      falseSignInCount++;
    }
  });

  const remaing_days = monthsDaysRemaining - falseSignInCount;
  const totalAmount = remaing_days * 112.9;
  return { falseSignInCount, totalAmount };
}

// add salary split function
