import { StyleSheet  } from "react-native";
import { useContext, useEffect, useState } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../utility/date";
import { fetchExpenses } from "../utility/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";

const RecentExpensesScreen = () => {
  const [isFetching, setIsFetching] = useState(true)
  const [error, setError] = useState(e);
  const expensesContext = useContext(ExpensesContext);

  useEffect(() => {
    async function getExpenses() {
      setIsFetching(true);
      try {
        const expenses = await fetchExpenses();
        expensesContext.setExpenses(expenses);

      } catch(error) {
        setError("Could not fetch expenses!");
      }
      setIsFetching(false);
    }
    getExpenses();
  }, []);

  function errorHandler() {
    setError(null);
  }

  if (error & !isFetching) {
    return <ErrorOverlay message={error} onConfirm={errorHandler}/>
  }

  if (isFetching) {
    return <LoadingOverlay />
  }

  const recentExpenses = expensesContext.expenses.filter((expense) => {
    const today = new Date();
    const lastWeek = getDateMinusDays(today, 7);

    return expense.date >= lastWeek && expense.date <= today;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 Days"
      fallbackText="No expenses in last 7 days"
    />
  );
};

export default RecentExpensesScreen;

const styles = StyleSheet.create({});
