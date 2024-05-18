import * as Updates from "expo-updates";
import { rootStyle } from "@/constants/Style";
import * as SecureStore from "expo-secure-store";
import ProfileHeader from "@/components/profile/header";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Page = () => {
  const logout = async () => {
    await SecureStore.deleteItemAsync("token");
    await Updates.reloadAsync();
  };

  return (
    <SafeAreaView style={[rootStyle.container]}>
      <ScrollView>
        <View style={{ marginBottom: 100 }}>
          <ProfileHeader />
          <View style={{ paddingHorizontal: 10 }}>
            <TouchableOpacity
              onPress={() => logout()}
              style={[rootStyle.btnPrimary, { marginTop: 20 }]}
            >
              <Text style={rootStyle.textBtnPrimary}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Page;
