import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

type Props = {
  title: "Success" | "Error" | "Warning";
  message: string;
};

const ShowToast: React.FC<Props> = ({ title, message }) => {
  return (
    <View
      style={[
        styles.container,
        {
          borderColor:
            title === "Warning"
              ? "#FEB941"
              : title === "Success"
              ? "green"
              : "red",
        },
      ]}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
        <View
          style={{
            padding: 10,
            backgroundColor:
              title === "Warning"
                ? "#FEB941"
                : title === "Success"
                ? "green"
                : "red",
            borderRadius: 8,
          }}
        >
          <AntDesign
            name={
              title === "Success"
                ? "checkcircle"
                : title === "Warning"
                ? "warning"
                : "closecircle"
            }
            size={22}
            color="white"
          />
        </View>
        <View>
          <Text style={{ fontSize: 17, fontWeight: "bold", color: "black" }}>
            {title}
          </Text>
          <Text style={{ fontSize: 12, color: "black", width: 280 }}>
            {message}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 999,
    backgroundColor: "white",
    top: 40,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 7,
    justifyContent: "center",
    borderWidth: 2,
    overflow: "hidden",
    left: 0,
    right: 0,
    marginHorizontal: 10,
  },
});

export default ShowToast;
