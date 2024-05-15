import Header from "@/components/Header";
import HomeBestSeller from "@/components/home/bestSeller";
import HomeCategory from "@/components/home/category";
import HomeMenu from "@/components/home/menu";
import HomeOffer from "@/components/home/offer";
import { rootStyle } from "@/constants/Style";
import { useNavigation } from "expo-router";
import { useCallback, useLayoutEffect, useMemo, useRef, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
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
