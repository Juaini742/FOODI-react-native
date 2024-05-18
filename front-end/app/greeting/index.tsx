import { rootStyle } from "@/constants/Style";
import { StatusBar } from "expo-status-bar";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/constants/Colors";
import { Link, useNavigation } from "expo-router";
import { useLayoutEffect } from "react";

function Page() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={[rootStyle.container]}>
      <StatusBar backgroundColor="black" />
      <View style={styles.content}>
        <View style={styles.imgWrapper}>
          <Image
            source={require("../../assets/images/bg.jpg")}
            style={styles.img}
          />
        </View>
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.9)"]}
          style={styles.container}
        >
          <View style={styles.wrapper}>
            <Text style={styles.tagName}>Welcome to</Text>
            <Text style={styles.tagName}>FOODI 🖐</Text>
            <Text style={styles.text}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
              facilis fugit sequi autem blanditiis quibusdam quos vel
              accusantium asperiores culpa.
            </Text>
            <Link
              href="register"
              style={[
                rootStyle.btnPrimary,
                {
                  paddingVertical: 15,
                  marginTop: 20,
                  width: "90%",
                  fontSize: 15,
                  textAlign: "center",
                  color: "white",
                },
              ]}
            >
              Next
            </Link>
          </View>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    position: "relative",
  },
  imgWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    position: "absolute",
  },
  img: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  wrapper: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    textAlign: "center",
    fontFamily: "primary",
    fontSize: 13,
  },
  tagName: {
    color: Colors.primary,
    fontFamily: "bold",
    textAlign: "center",
    fontSize: 30,
  },
});

export default Page;
