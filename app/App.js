import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "./screens/WelcomeScreen";
import StartScreen from "./screens/StartScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import HomeScreen from "./screens/HomeScreen";
import PregnancyInfoScreen from "./screens/PregnancyInfoScreen";
import FatherInfoScreen from "./screens/FatherInfoScreen";
import ProfileScreen from "./screens/ProfileScreen";
import FirstTrimesterScreen from "./screens/FirstTrimesterScreen";
import SecondTrimesterScreen from "./screens/SecondTrimesterScreen";
import ThirdTrimesterScreen from "./screens/ThirdTrimesterScreen";
import PregnancySymptomsScreen from "./screens/PregnancySymptomsScreen";
import NutritionScreen from "./screens/NutritionScreen";
import ExerciseScreen from "./screens/ExerciseScreen";
import BabyDevelopmentScreen from "./screens/BabyDevelopmentScreen";
import MedicationsScreen from "./screens/MedicationsScreen";
import ChatScreen from "./screens/ChatScreen";
import ChatGPTServiceScreen from "./screens/ChatGPTServiceScreen";
import AlarmScreen from "./screens/AlarmScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen">
        {/* Hoşgeldiniz Ekranları */}
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="StartScreen"
          component={StartScreen}
          options={{ headerShown: false }}
        />

        {/* Giriş ve Kayıt Ekranları */}
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignupScreen"
          component={SignupScreen}
          options={{ headerShown: false }}
        />

        {/* Ana Ekran */}
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />

        {/* Kullanıcı Bilgi Ekranları */}
        <Stack.Screen
          name="PregnancyInfoScreen"
          component={PregnancyInfoScreen}
          options={{ title: "Gebelik Bilgileri", headerShown: true }}
        />
        <Stack.Screen
          name="FatherInfoScreen"
          component={FatherInfoScreen}
          options={{ title: "Baba Bilgileri", headerShown: true }}
        />

        {/* Profil ve Ek Ekranlar */}
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{ title: "Profil" }}
        />
        <Stack.Screen
          name="FirstTrimesterScreen"
          component={FirstTrimesterScreen}
          options={{ title: "Birinci Trimester" }}
        />
        <Stack.Screen
          name="SecondTrimesterScreen"
          component={SecondTrimesterScreen}
          options={{ title: "İkinci Trimester" }}
        />
        <Stack.Screen
          name="ThirdTrimesterScreen"
          component={ThirdTrimesterScreen}
          options={{ title: "Üçüncü Trimester" }}
        />
        <Stack.Screen
          name="PregnancySymptomsScreen"
          component={PregnancySymptomsScreen}
          options={{ title: "Hamilelik Belirtileri" }}
        />
        <Stack.Screen
          name="NutritionScreen"
          component={NutritionScreen}
          options={{ title: "Beslenme" }}
        />
        <Stack.Screen
          name="ExerciseScreen"
          component={ExerciseScreen}
          options={{ title: "Egzersizler" }}
        />
        <Stack.Screen
          name="BabyDevelopmentScreen"
          component={BabyDevelopmentScreen}
          options={{ title: "Bebek Gelişimi" }}
        />
        <Stack.Screen
          name="MedicationsScreen"
          component={MedicationsScreen}
          options={{ title: "İlaç ve Takviyeler" }}
        />

        {/* Sohbet ve Alarm Ekranları */}
        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={{ title: "Sohbet Botu" }}
        />
        <Stack.Screen
          name="ChatGPTServiceScreen"
          component={ChatGPTServiceScreen}
          options={{ title: "ChatGPT Servis Ekranı" }}
        />
        <Stack.Screen
          name="AlarmScreen"
          component={AlarmScreen}
          options={{ title: "Alarmlar" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
