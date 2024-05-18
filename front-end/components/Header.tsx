import React from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { rootStyle } from "@/constants/Style";
import { Link } from "expo-router";
import { useCart } from "@/hooks/useCart";
import useCountStore from "@/hooks/useCountStore";
import { useUser } from "@/hooks/useUser";

function Header() {
  const { user } = useUser();
  const { count } = useCountStore() as {
    count: number;
  };
  const { carts } = useCart();
  return (
    <View
      style={{
        backgroundColor: "black",
        paddingVertical: 10,
        paddingHorizontal: 10,
      }}
    >
      <View style={styles.wrapper}>
        <View style={styles.bioWrapper}>
          <View style={styles.avatar}>
            <Image
              source={require("../assets/images/profile.jpg")}
              style={{ width: 60, height: 60 }}
            />
          </View>
          <View style={styles.bio}>
            <Text style={{ color: "white", fontSize: 16 }}>Welcome to</Text>
            <Text style={{ color: "white", fontSize: 17, fontFamily: "bold" }}>
              {user?.username}
            </Text>
          </View>
        </View>

        <View style={styles.buttonWrapper}>
          <Link href={"/(modals)/notification"} asChild>
            <TouchableOpacity style={{ position: "relative" }}>
              <MaterialCommunityIcons
                name="bell-outline"
                size={24}
                color="white"
                style={styles.icon}
              />
              <View
                style={{
                  position: "absolute",
                  backgroundColor: "red",
                  borderRadius: 100,
                  paddingVertical: 1,
                  paddingHorizontal: 6,
                  top: -5,
                  right: -2,
                }}
              >
                <Text style={{ color: "white", fontSize: 12 }}>9</Text>
              </View>
            </TouchableOpacity>
          </Link>

          <Link href={"/(modals)/basket"} asChild>
            <TouchableOpacity style={{ position: "relative" }}>
              <AntDesign
                name="shoppingcart"
                size={24}
                color="white"
                style={styles.icon}
              />
              <View
                style={{
                  position: "absolute",
                  backgroundColor: "red",
                  borderRadius: 100,
                  paddingVertical: 1,
                  paddingHorizontal: 6,
                  top: -5,
                  right: -2,
                }}
              >
                <Text style={{ color: "white", fontSize: 12 }}>{count}</Text>
              </View>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
      <View style={{ marginTop: 15 }}>
        <TextInput
          style={rootStyle.input}
          placeholder="Search your menu"
          placeholderTextColor="gray"
          focusable
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bioWrapper: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 14,
  },
  avatar: {
    width: 60,
    height: 60,
    backgroundColor: "black",
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "white",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  bio: {
    gap: 2,
  },
  buttonWrapper: {
    flexDirection: "row",
    gap: 14,
  },
  icon: {
    padding: 10,
    backgroundColor: Colors.semiDark,
    borderRadius: 100,
    elevation: 10,
  },
});

export default Header;
