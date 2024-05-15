import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { TouchableOpacity } from "react-native";
import "react-native-reanimated";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const screenModals = [
  {
    name: "(modals)/notification",
    title: "Notifications",
    icon: <Ionicons name="arrow-back-outline" size={22} color="white" />,
  },
  {
    name: "(modals)/basket",
    title: "My Cart",
    icon: <Ionicons name="arrow-back-outline" size={22} color="white" />,
  },
  {
    name: "(modals)/listMenu",
    title: "Recommended For You",
    icon: <Ionicons name="arrow-back-outline" size={22} color="white" />,
  },
  {
    name: "(modals)/offer",
    title: "",
    icon: <Ionicons name="arrow-back-outline" size={22} color="white" />,
  },
];

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    primary: require("../assets/fonts/Poppins-Regular.ttf"),
    "sm-bold": require("../assets/fonts/Poppins-Medium.ttf"),
    bold: require("../assets/fonts/Poppins-Bold.ttf"),
  });

  const router = useRouter();

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      {screenModals.map((item, index) => (
        <Stack.Screen
          key={index}
          name={item.name}
          options={{
            title: `${item.title}`,
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: "black",
            },
            presentation: "modal",
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => router.back()}
                style={{ marginRight: 5 }}
              >
                {item.icon}
              </TouchableOpacity>
            ),
          }}
        />
      ))}
      {/* <Stack.Screen
        name="(modals)/basket"
        options={{
          title: "My Carts",
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "black",
          },
          presentation: "modal",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.back()}
              style={{ marginRight: 5 }}
            >
              <Ionicons name="arrow-back-outline" size={22} color="white" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="(modals)/listMenu"
        options={{
          title: "Recommended For You",
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "black",
          },
          presentation: "modal",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.back()}
              style={{ marginRight: 5 }}
            >
              <Ionicons name="arrow-back-outline" size={22} color="white" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="(modals)/offer"
        options={{
          presentation: "modal",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.back()}
              style={{ marginRight: 5 }}
            >
              <Ionicons name="arrow-back-outline" size={28} />
            </TouchableOpacity>
          ),
        }}
      /> */}
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
