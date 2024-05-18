import { categories } from "@/constants/db";
import { Link, useRouter } from "expo-router";
import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

function HomeCategory() {
  const router = useRouter();
  return (
    <View
      style={{
        marginTop: 15,
        flexDirection: "row",
        flexWrap: "wrap",
        paddingHorizontal: 10,
        gap: 30,
        justifyContent: "space-around",
      }}
    >
      {categories.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={{
            width: 78,
            height: 78,
            overflow: "hidden",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => router.push(`/categoryDetail/${item.name}`)}
        >
          <Image source={item.img} style={{ width: 50, height: 50 }} />
          <Text
            style={{
              color: "white",
              textAlign: "center",
              marginTop: 5,
            }}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default HomeCategory;
