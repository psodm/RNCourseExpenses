import { StyleSheet, Text, View } from "react-native";
import { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";

const AllExpensesScreen = () => {
  const expensesContext = useContext({ ExpensesContext });
  return <ExpensesOutput expenses={expensesContext.expenses} expensesPeriod={"Total"} />;
};

export default AllExpensesScreen;

const styles = StyleSheet.create({});
