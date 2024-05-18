import { Colors } from "@/constants/Colors";
import { rootStyle } from "@/constants/Style";
import BottomSheet from "@gorhom/bottom-sheet";
import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { useProducts } from "@/hooks/useProducts";
import BottomSheetComponent from "@/components/BottomSheet";
import { AntDesign, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { ProductType } from "@/interfaces/productType";

function Page() {
  const navigation = useNavigation();
  const { id } = useLocalSearchParams<{ id: string }>();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["13%", "100%"], []);
  const [selectedId, setSelectedId] = useState<string>("");
  const { products } = useProducts({ category: id });
  const product = products.find((item) => item.id === selectedId);

  const handleSelect = (id: string) => {
    bottomSheetRef.current?.collapse();
    setSelectedId(id);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerTitle: "",
      headerLeft: () => (
        <View
          style={{ backgroundColor: "white", padding: 5, borderRadius: 100 }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={24} color={"black"} />
          </TouchableOpacity>
        </View>
      ),
    });
  });

  return (
    <GestureHandlerRootView>
      <View style={[rootStyle.container, { marginBottom: 30 }]}>
        <View style={styles.content}>
          <FlatList
            data={products}
            renderItem={({ item, index }) => (
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
                      width: 170,
                    }}
                  >
                    {item.name}
                  </Text>
                  <View style={{ flexDirection: "row", gap: 5 }}>
                    <View style={styles.locationContainer}>
                      <FontAwesome5 name="store" size={14} color="gray" />
                      <Text
                        style={{
                          color: "gray",
                          fontSize: 14,
                        }}
                      >
                        {item.store} |
                      </Text>
                    </View>
                    <View style={styles.locationstar}>
                      <AntDesign name="star" size={14} color="#FFBF00" />
                      <Text
                        style={{
                          color: "#FFBF00",
                          fontSize: 14,
                        }}
                      >
                        5
                      </Text>
                    </View>
                  </View>
                  <Text
                    style={{
                      color: Colors.primary,
                      fontSize: 15,
                      fontFamily: "bold",
                    }}
                  >
                    IDR. {item.price}
                  </Text>
                </View>
                <View style={{ position: "absolute", bottom: 20, right: 20 }}>
                  <AntDesign name="hearto" size={24} color="red" />
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>

      <BottomSheetComponent
        bottomSheetRef={bottomSheetRef}
        snapPoints={snapPoints}
        product={product as ProductType}
      />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 14,
    marginBottom: 115,
    width: "100%",
    marginTop: 80,
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
    position: "relative",
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
  locationContainer: {
    flexDirection: "row",
    gap: 5,
    marginTop: 8,
  },
  locationstar: {
    flexDirection: "row",
    gap: 1,
    marginTop: 8,
  },
});

export default Page;
