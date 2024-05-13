"use server";

export async function fetchSalary() {
  const response = await fetch("./app/api/salaryReceipts");
  const data = await response.json();
  console.log(`fetchData perspecctive ${data.Salary}`);
  return data.Salary;
}
