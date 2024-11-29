import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ManageExpenseScreen from "./screens/ManageExpenseScreen";
import RecentExpensesScreen from "./screens/RecentExpensesScreen";
import AllExpensesScreen from "./screens/AllExpensesScreen";
import { Ionicons } from "@expo/vector-icons";
import { GlobalStyles } from "./constants/styles";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function ExpensesOverview() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        headerTintColor: "white",
        tabBarStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
      }}
    >
      <Tab.Screen
        name="RecentExpenses"
        component={RecentExpensesScreen}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          tabBarIcon: ({color, size}) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen name="AllExpenses" component={AllExpensesScreen} options={{
          title: "All Expenses",
          tabBarLabel: "All",
          tabBarIcon: ({color, size}) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="ExpensesOverview" component={ExpensesOverview} options={{headerShown: false}}/>
          <Stack.Screen name="ManageExpense" component={ManageExpenseScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
