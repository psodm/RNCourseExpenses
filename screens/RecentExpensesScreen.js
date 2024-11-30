import { StyleSheet, Text, View } from "react-native";
import { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../utility/date";

const RecentExpensesScreen = () => {
  const expensesContext = useContext(ExpensesContext);

  const recentExpenses = expensesContext.expenses.filter((expense) => {
    const today = new Date();
    const lastWeek = getDateMinusDays(today, 7);

    return (expense.date >= lastWeek) && (expense.data <= today);
  });

  return <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 Days" fallbackText="No expenses in last 7 days"/>;
};

export default RecentExpensesScreen;

const styles = StyleSheet.create({});
