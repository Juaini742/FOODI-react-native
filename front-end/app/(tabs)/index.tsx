import { useLayoutEffect } from "react";
import Header from "@/components/Header";
import { useNavigation } from "expo-router";
import { rootStyle } from "@/constants/Style";
import HomeMenu from "@/components/home/menu";
import HomeOffer from "@/components/home/offer";
import { ScrollView, View } from "react-native";
import HomeCategory from "@/components/home/category";
import HomeBestSeller from "@/components/home/bestSeller";
import { SafeAreaView } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <GestureHandlerRootView>
      <SafeAreaView style={[rootStyle.container]}>
        <ScrollView style={{ paddingHorizontal: 10 }}>
          <Header />
          <HomeOffer />
          <HomeCategory />
          <HomeMenu />
          <HomeBestSeller />
          <View style={{ marginBottom: 102 }} />
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
