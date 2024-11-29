import { View, StyleSheet } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

import { DUMMY_EXPENSES } from "../../store/DummyExpenses";
import { GlobalStyles } from "../../constants/styles";

const ExpensesOutput = ({expenses, expensesPeriod}) => {
  return (
    <View style={styles.rootContainer}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      <ExpensesList expenses={expenses} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  rootContainer: {
    horizontalPadding: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
    flex: 1,
  }
});
