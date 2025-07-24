import { createHomeStyles } from "@/assets/styles/home.styles";
import useTheme, { ColorScheme } from "@/hooks/useTheme";
import { Text, TouchableOpacity } from "react-native";
import {SafeAreaView } from "react-native-safe-area-context"
import { LinearGradient } from "expo-linear-gradient";

export default function Index() {
  const { toggleDarkMode, colors } = useTheme();

  const homeStyles = createHomeStyles(colors);

  return (
    <SafeAreaView style={homeStyles.safeArea}>
      <LinearGradient colors={colors.gradients.background} style={homeStyles.container}>
      <Text> Hi </Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>Dark Mode</Text>
      </TouchableOpacity>
      </LinearGradient>
    </SafeAreaView>
  );
}

