import { rootStyle } from "@/constants/Style";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Page = () => {
  return (
    <SafeAreaView style={[rootStyle.container]}>
      <View>
        <Text style={{ color: "white" }}>Profile Page </Text>
        <Text style={{ color: "white" }}>Profile Page </Text>
      </View>
    </SafeAreaView>
  );
};

export default Page;
