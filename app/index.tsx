import { Text, View, Pressable } from "react-native";
import { router } from "expo-router";
import SignupScreen from "./auth/signup";
import { UserProvider } from "@/contexts/UserContext";

export default function Index() {
  return (
    <UserProvider>
      <SignupScreen/>
    </UserProvider>
  );
}
