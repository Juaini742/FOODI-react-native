import { rootStyle } from "@/constants/Style";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import {
  Alert,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";
import { useCart } from "@/hooks/useCart";
import { deleteCart, getCart } from "@/api/secured";
import useCountStore from "@/hooks/useCountStore";

function Page() {
  const { carts, setCarts } = useCart();
  const { decrement } = useCountStore() as {
    decrement: () => void;
  };

  const handleSelect = (id: string) => {
    console.log(id);
  };

  const handleDelete = async (id: string) => {
    await deleteCart(id);
    Alert.alert(
      "success",
      "Product was deleted successfully",
      [
        {
          text: "OK",
          onPress: async () => {
            const response = await getCart();
            setCarts(response);
            if (response) {
              decrement();
            }
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <GestureHandlerRootView>
      <View style={[rootStyle.container, { position: "relative" }]}>
        <View style={styles.content}>
          <FlatList
            data={carts}
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
                  <Image
                    source={{ uri: item.product.img }}
                    style={styles.img}
                  />
                  <View style={styles.textContainer}>
                    <Text
                      style={{
                        color: "white",
                        fontSize: 22,
                        fontFamily: "bold",
                        lineHeight: 24,
                        width: 195,
                      }}
                    >
                      {item.product.name}
                    </Text>
                    <Text style={{ color: "white", fontSize: 14 }}>
                      Quantity: {item.quantity}
                    </Text>
                    <Text style={{ color: Colors.primary, fontSize: 18 }}>
                      IDR. {item.product.price.toFixed(3)}
                    </Text>
                  </View>
                </TouchableOpacity>
              </Swipeable>
            )}
          />
        </View>
        <View style={styles.totalContainer}>
          <Text style={{ color: "white" }}>Total Price: IDR. 32.000</Text>
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
    // backgroundColor: "rgba(0,0,0,0.7)",
    backgroundColor: Colors.semiDark,
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
