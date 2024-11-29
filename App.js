import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ManageExpenseScreen from "./screens/ManageExpenseScreen";
import RecentExpensesScreen from "./screens/RecentExpensesScreen";
import AllExpensesScreen from "./screens/AllExpensesScreen";
import { Ionicons } from "@expo/vector-icons";
import { GlobalStyles } from "./constants/styles";
import IconButton from "./components/ui/IconButton";
import ExpensesContextProvider from "./store/expenses-context";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function ExpensesOverview() {
  return (
    <ExpensesContextProvider>
      <Tab.Navigator
        screenOptions={({ navigation }) => ({
          headerStyle: {
            backgroundColor: GlobalStyles.colors.primary500,
          },
          headerTintColor: "white",
          tabBarStyle: {
            backgroundColor: GlobalStyles.colors.primary500,
          },
          tabBarActiveTintColor: GlobalStyles.colors.accent500,
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="add"
              size={24}
              color={tintColor}
              onPress={() => {
                navigation.navigate("ManageExpense");
              }}
            />
          ),
        })}
      >
        <Tab.Screen
          name="RecentExpenses"
          component={RecentExpensesScreen}
          options={{
            title: "Recent Expenses",
            tabBarLabel: "Recent",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="hourglass" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="AllExpenses"
          component={AllExpensesScreen}
          options={{
            title: "All Expenses",
            tabBarLabel: "All",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="calendar" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </ExpensesContextProvider>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
            headerTintColor: "white",
          }}
        >
          <Stack.Screen
            name="ExpensesOverview"
            component={ExpensesOverview}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ManageExpense"
            component={ManageExpenseScreen}
            options={{ presentation: "modal" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
