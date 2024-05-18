import { categories } from "@/constants/db";
import { Colors } from "@/constants/Colors";
import { rootStyle } from "@/constants/Style";
import { useProducts } from "@/hooks/useProducts";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

function AllMenu() {
  const router = useRouter();
  const categoryAll = [
    {
      id: "all",
      name: "All",
      img: require("../../assets/images/all.jpg"),
    },
    ...categories,
  ];
  const [category, setCategory] = useState<string>("");
  const { products } = useProducts({ category });

  const handleSelectCategory = (name: string) => {
    setCategory(name === "All" ? "" : name);
  };
  return (
    <View>
      <View style={{ marginTop: 15 }}>
        <TextInput
          style={rootStyle.input}
          placeholder="Search your menu"
          placeholderTextColor="gray"
          focusable
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          width: Dimensions.get("window").width,
          marginVertical: 10,
        }}
      >
        <FlatList
          data={categoryAll}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => handleSelectCategory(item.name)}
              style={{
                flexDirection: "row",
                gap: 3,
                borderWidth: 1,
                borderColor: Colors.primary,
                paddingVertical: 8,
                paddingHorizontal: 9,
                borderRadius: 100,
                marginHorizontal: 3,
                backgroundColor:
                  category === item.name ? Colors.secondary : "transparent",
                alignItems: "center",
              }}
            >
              <Image source={item.img} style={{ width: 20, height: 20 }} />
              <Text style={{ color: "white" }}>{item.name}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingRight: 25 }}
        />
      </View>

      <View style={styles.menuContainer}>
        {products.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItems}
            onPress={() => router.push(`/productDetail/${item.id}`)}
          >
            <Image source={{ uri: item.img }} style={styles.img} />
            <View style={styles.menuText}>
              <View style={styles.locationContainer}>
                <FontAwesome5 name="store" size={14} color="gray" />
                <Text
                  style={{
                    color: "gray",
                    fontSize: 14,
                  }}
                >
                  {item.store}
                </Text>
              </View>
              <View style={styles.locationContainer}>
                <Ionicons name="fast-food-sharp" size={16} color="gray" />
                <Text
                  style={{
                    color: "black",
                    fontSize: 15,
                  }}
                >
                  {item.name}
                </Text>
              </View>
              <View style={styles.locationContainer}>
                <Text
                  style={{ color: "gray", fontFamily: "bold", fontSize: 13 }}
                >
                  IDR
                </Text>
                <Text
                  style={{
                    color: "black",
                    fontSize: 14,
                  }}
                >
                  {item.price}
                </Text>
              </View>
            </View>
            <View style={styles.info}>
              <Text style={{ color: "white", fontSize: 10 }}>New</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menuContainer: {
    marginTop: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 15,
    justifyContent: "space-evenly",
  },
  menuItems: {
    position: "relative",
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "white",
    borderRadius: 18,
    width: 170,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 140,
    height: 140,
  },
  info: {
    backgroundColor: Colors.secondary,
    paddingHorizontal: 5,
    paddingVertical: 4,
    borderRadius: 5,
    position: "absolute",
    top: 8,
    left: 8,
  },
  menuText: {
    width: "100%",
    marginBottom: 8,
  },
  locationContainer: {
    flexDirection: "row",
    gap: 5,
    marginTop: 8,
  },
});

export default AllMenu;
