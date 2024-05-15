import { Colors } from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function HomeOffer() {
  return (
    <View style={styles.content}>
      <View style={styles.textContainer}>
        <Text style={{ color: "white", fontSize: 18 }}>Special Offers</Text>
        <TouchableOpacity>
          <Text style={{ color: Colors.primary }}>View all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bannerContainer}>
        <LinearGradient
          colors={["rgba(48,216,100,1)", "rgba(0,137,42,0.4)"]}
          style={styles.imgContainer}
        >
          <View style={styles.left}>
            <Text
              style={{
                color: "white",
                fontSize: 40,
                fontFamily: "bold",
                lineHeight: 45,
              }}
            >
              30%
            </Text>
            <Text style={{ color: "white", fontFamily: "bold" }}>
              Special menu
            </Text>
            <Text style={{ color: "white", fontFamily: "bold" }}>
              only for your hurry, lets take it
            </Text>
          </View>
          <View style={styles.right}>
            <Image
              source={{
                uri: "https://res.cloudinary.com/dixdqxpza/image/upload/v1712474136/snack5_dxu5ah.png",
              }}
              style={{ width: 180, height: 180 }}
            />
          </View>
        </LinearGradient>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 10,
    marginTop: 10,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bannerContainer: {
    elevation: 10,
    shadowColor: "white",
    shadowOpacity: 0.12,
    shadowRadius: 9,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  imgContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    overflow: "hidden",
    height: 160,
    borderRadius: 20,
  },
  left: {
    justifyContent: "center",
    paddingLeft: 10,
    width: "53%",
  },
  right: {},
});

export default HomeOffer;
