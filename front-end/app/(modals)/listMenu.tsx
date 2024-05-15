import { rootStyle } from "@/constants/Style";
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import listMenu from "@/constants/menu.json";
import { Colors } from "@/constants/Colors";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { useMemo, useRef, useState } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import BottomSheetComponent from "@/components/BottomSheet";
import { categories } from "@/constants/db";

function Page() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["13%", "100%"], []);
  const [selectedId, setSelectedId] = useState<any>(1);

  const handleSelect = (id: number) => {
    bottomSheetRef.current?.collapse();
    setSelectedId(id);
    console.log(id);
  };

  return (
    <GestureHandlerRootView>
      <View style={[rootStyle.container, { marginBottom: 30 }]}>
        <View style={styles.content}>
          <View
            style={{
              flexDirection: "row",
              width: Dimensions.get("window").width,
              marginBottom: 10,
            }}
          >
            <FlatList
              data={categories}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    gap: 3,
                    borderWidth: 1,
                    borderColor: Colors.primary,
                    paddingVertical: 8,
                    paddingHorizontal: 9,
                    borderRadius: 100,
                    marginHorizontal: 3,
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
          <FlatList
            data={listMenu}
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
                        {item.location} |
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
        selectedId={selectedId}
      />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 14,
    marginBottom: 115,
    width: "100%",
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
