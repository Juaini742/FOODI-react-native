import { Colors } from "@/constants/Colors";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import listMenu from "@/constants/menu.json";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";

function HomeBestSeller() {
  return (
    <View style={{ paddingHorizontal: 10, marginTop: 18 }}>
      <View style={styles.textContainer}>
        <Text style={{ color: "white", fontSize: 18 }}>Best Seller</Text>
        <TouchableOpacity>
          <Text style={{ color: Colors.primary }}>View all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.menuContainer}>
          {listMenu.map((item, index) => (
            <TouchableOpacity key={index} style={styles.menuItems}>
              <Image source={{ uri: item.img }} style={styles.img} />
              <View style={styles.menuText}>
                <View style={styles.locationContainer}>
                  <FontAwesome5 name="store" size={14} color="gray" />
                  <Text
                    style={{
                      color: "black",
                      fontSize: 14,
                    }}
                  >
                    {item.location}
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
      </ScrollView>
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
    gap: 20,
  },
  menuItems: {
    position: "relative",
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "white",
    borderRadius: 18,
    width: 180,
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

export default HomeBestSeller;
