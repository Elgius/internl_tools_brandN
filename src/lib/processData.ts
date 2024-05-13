export function processData(salaryData: { signed_in: any }[]) {
  let falseSignInCount = 0;

  salaryData.forEach((item: { signed_in: any }) => {
    if (!item.signed_in) {
      falseSignInCount++;
    }
  });

  const totalAmount = falseSignInCount * 40;

  return { falseSignInCount, totalAmount };
}
