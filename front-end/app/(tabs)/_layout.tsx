import { Tabs } from "expo-router";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { StyleSheet, Text, View } from "react-native";

type IoniconsName = "home" | "fast-food" | "menu";
type FontAwesomeName = "user-circle";

type Screen = {
  name: string;
  title: string;
  iconWrapper: "Ionicons" | "FontAwesome";
  icon: IoniconsName | FontAwesomeName;
};

const screens: Screen[] = [
  {
    name: "index",
    title: "Home",
    iconWrapper: "Ionicons",
    icon: "home",
  },
  {
    name: "menu",
    title: "Menu",
    iconWrapper: "Ionicons",
    icon: "fast-food",
  },
  {
    name: "profile",
    title: "Profile",
    iconWrapper: "FontAwesome",
    icon: "user-circle",
  },
];

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
      }}
    >
      {screens.map((item, index) => (
        <Tabs.Screen
          key={index}
          name={item.name}
          options={{
            title: `${item.title}`,
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  paddingHorizontal: focused ? 13 : 0,
                  paddingVertical: focused ? 10 : 0,
                  borderRadius: 100,
                  backgroundColor: focused ? Colors.semiDark : "transparent",
                  position: focused ? "absolute" : "static",
                  top: focused ? -32 : 0,
                  borderWidth: focused ? 5 : 0,
                  borderColor: "black",
                }}
              >
                {item.iconWrapper === "Ionicons" && (
                  <Ionicons
                    name={item.icon as IoniconsName}
                    color={focused ? "white" : "gray"}
                    size={19}
                  />
                )}
                {item.iconWrapper === "FontAwesome" && (
                  <FontAwesome
                    name={item.icon as FontAwesomeName}
                    color={focused ? "white" : "gray"}
                    size={19}
                  />
                )}

                <Text style={{ color: focused ? "white" : "gray" }}>
                  {item.title}
                </Text>
              </View>
            ),
          }}
        />
      ))}
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    position: "absolute",
    backgroundColor: Colors.semiDark,
    borderTopWidth: 0,
    bottom: 5,
    right: 10,
    left: 10,
    height: 65,
    borderRadius: 30,
  },
});
