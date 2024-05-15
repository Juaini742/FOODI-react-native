import { Colors } from "@/constants/Colors";
import { notifications } from "@/constants/db";
import { rootStyle } from "@/constants/Style";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

function Page() {
  return (
    <View style={rootStyle.container}>
      <View style={styles.content}>
        <FlatList
          data={notifications}
          renderItem={({ item, index }) => (
            <TouchableOpacity key={index} style={styles.itemContainer}>
              <View style={styles.topContainer}>
                <MaterialCommunityIcons
                  name={item.icon}
                  size={30}
                  color={item.bgColor}
                  style={{
                    padding: 8,
                    backgroundColor: "white",
                    borderRadius: 100,
                  }}
                />
                <View>
                  <Text
                    style={{
                      color: "white",
                      fontSize: 18,
                      fontFamily: "bold",
                      lineHeight: 24,
                    }}
                  >
                    {item.title}
                  </Text>
                  <Text style={{ color: "gray" }}>{item.date}</Text>
                </View>
              </View>
              <View style={styles.textContainer}>
                <Text style={{ color: "gray", fontSize: 14 }}>
                  {item.message}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 14,
    marginBottom: 70,
  },
  itemContainer: {
    width: "100%",
    height: 140,
    borderRadius: 20,
    paddingLeft: 10,
    justifyContent: "center",
    gap: 14,
  },
  topContainer: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
  },
  textContainer: {
    gap: 5,
  },
});

export default Page;
