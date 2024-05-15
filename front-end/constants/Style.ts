import { StyleSheet } from "react-native";
import { Colors } from "./Colors";

export const rootStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  btnPrimary: {
    padding: 8,
    backgroundColor: Colors.primary,
    width: "100%",
    borderRadius: 15,
  },
  btnPrimary2: {
    padding: 8,
    backgroundColor: Colors.primary,
    borderRadius: 15,
  },
  textBtnPrimary: {
    textAlign: "center",
    color: "white",
    fontFamily: "sm-bold",
  },
  input: {
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 8,
    paddingLeft: 20,
    color: "white",
    borderRadius: 12,
    backgroundColor: "#252525",
  },
});
