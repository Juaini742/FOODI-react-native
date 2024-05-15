import React from "react";
import { Text, View } from "react-native";

type Props = {
  data: any;
};

function RenderMessageError({ data }: Props) {
  return data ? (
    <View style={{ width: "100%" }}>
      <Text style={{ color: "red", textAlign: "left" }}>{data.message}</Text>
    </View>
  ) : null;
}

export default RenderMessageError;
