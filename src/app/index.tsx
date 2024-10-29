import SignUpScreen from "@/screens/signup/signup";
import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Page() {
  return (
    <View className="flex-1 items-center justify-center">
      <SignUpScreen/>
    </View>
)
}
