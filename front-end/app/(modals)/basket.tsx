import { rootStyle } from "@/constants/Style";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import listMenu from "@/constants/menu.json";
import { Colors } from "@/constants/Colors";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

function Page() {
  const handleSelect = (id: number) => {
    console.log(id);
  };
  const handleDelete = (id: number) => {
    console.log(id);
  };

  return (
    <GestureHandlerRootView>
      <View style={[rootStyle.container, { position: "relative" }]}>
        <View style={styles.content}>
          <FlatList
            data={listMenu}
            renderItem={({ item, index }) => (
              <Swipeable
                renderRightActions={() => (
                  <TouchableOpacity
                    style={styles.swipRight}
                    onPress={() => handleDelete(item.id)}
                  >
                    <Ionicons name="trash-sharp" size={24} color="white" />
                  </TouchableOpacity>
                )}
                friction={2}
              >
                <TouchableOpacity
                  key={index}
                  onPress={() => handleSelect(item.id)}
                  style={styles.itemContainer}
                >
                  <Image source={{ uri: item.img }} style={styles.img} />
                  <View style={styles.textContainer}>
                    <Text
                      style={{
                        color: "white",
                        fontSize: 22,
                        fontFamily: "bold",
                        lineHeight: 24,
                      }}
                    >
                      {item.name}
                    </Text>
                    <Text style={{ color: "white", fontSize: 14 }}>
                      Quantity: 2
                    </Text>
                    <Text style={{ color: Colors.primary, fontSize: 18 }}>
                      IDR. {item.price}
                    </Text>
                  </View>
                </TouchableOpacity>
              </Swipeable>
            )}
          />
        </View>
        <View style={styles.totalContainer}>
          <Text style={{ color: "white" }}>Total Price: IDR. 23.000</Text>
          <TouchableOpacity style={rootStyle.btnPrimary2}>
            <Text
              style={{
                color: "white",
                paddingHorizontal: 10,
              }}
            >
              Buy now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 14,
    marginBottom: 70,
  },
  itemContainer: {
    width: "100%",
    flexDirection: "row",
    gap: 15,
    height: 140,
    backgroundColor: Colors.semiDark,
    borderRadius: 20,
    alignItems: "center",
    paddingLeft: 10,
    marginVertical: 8,
  },
  img: {
    width: 110,
    height: 110,
  },
  textContainer: {
    gap: 5,
  },
  totalContainer: {
    position: "absolute",
    bottom: 0,
    height: 60,
    backgroundColor: "rgba(0,0,0,0.7)",
    left: 0,
    right: 0,
    borderTopRightRadius: 19,
    borderTopLeftRadius: 19,
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    justifyContent: "space-between",
  },
  swipRight: {
    backgroundColor: "red",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 140,
    paddingVertical: 0,
    marginTop: 10,
  },
});

export default Page;
