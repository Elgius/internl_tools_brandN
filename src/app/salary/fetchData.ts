// "use server";

export async function fetchSalary() {
  console.log("Fetching salary data...");
  const response = await fetch("/api/salaryReceipt");
  console.log("Response status:", response.status);
  const data = await response.json();
  console.log(`fetchData perspective ${data.Salary}`);
  return data.Salary;
}
