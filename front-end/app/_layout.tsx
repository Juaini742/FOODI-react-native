import { AppContextProvider, useAppContext } from "@/hooks/AppContext";
import { ToastProvider } from "@/hooks/useToast";
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
    name: "(modals)/bestSeller",
    title: "Best Seller",
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

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <AppContextProvider>
      <ToastProvider>
        <RootLayoutNav />
      </ToastProvider>
    </AppContextProvider>
  );
}

function RootLayoutNav() {
  const router = useRouter();
  const { isLoggedIn } = useAppContext();

  useEffect(() => {
    if (!isLoggedIn) {
      router.replace("(tabs)");
      router.push("greeting");
    } else {
      router.replace("greeting");
      router.push("(tabs)");
    }
  }, [isLoggedIn]);

  return (
    <Stack>
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

      <Stack.Screen
        name="categoryDetail/[id]"
        options={{
          headerTitle: "",
          headerTransparent: false,
        }}
      />
      <Stack.Screen
        name="productDetail/[id]"
        options={{
          headerTitle: "",
          headerTransparent: false,
        }}
      />

      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
