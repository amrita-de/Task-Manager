import { render, screen } from "@testing-library/react";
import ExpenseItem from "./ExpenseItem"; // Adjust the import based on your structure

test("renders expense item with amount", () => {
  render(<ExpenseItem title="Rent" amount={500} />);
  
  const amountElement = screen.getByText(/\$500/i);
  expect(amountElement).toBeInTheDocument();
});
