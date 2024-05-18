import AllMenu from "@/components/menu/main";
import { rootStyle } from "@/constants/Style";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Page = () => {
  return (
    <SafeAreaView style={[rootStyle.container]}>
      <ScrollView style={{ paddingHorizontal: 10 }}>
        <AllMenu />
        <View style={{ marginBottom: 102 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Page;
