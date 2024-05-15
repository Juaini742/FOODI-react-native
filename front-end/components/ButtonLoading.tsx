import { Colors } from "@/constants/Colors";
import { rootStyle } from "@/constants/Style";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type Props = {
  isSubmitting: any;
  onPress: any;
  title: string;
};
function ButtonLoading({ isSubmitting, title, onPress }: Props) {
  const renderLoading = () => {
    return isSubmitting ? (
      <View style={styles.loadingContainer}>
        <Text style={{ color: "white", fontSize: 15, fontFamily: "sm-bold" }}>
          Loading
        </Text>
        <ActivityIndicator size="small" color="white" />
      </View>
    ) : (
      <Text style={[rootStyle.textBtnPrimary, { fontSize: 15 }]}>{title}</Text>
    );
  };

  return (
    <TouchableOpacity
      disabled={isSubmitting}
      onPress={onPress}
      style={[
        rootStyle.btnPrimary,
        { paddingVertical: 15 },

        isSubmitting
          ? { backgroundColor: Colors.secondary }
          : { backgroundColor: Colors.primary },
      ]}
    >
      {renderLoading()}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
});

export default ButtonLoading;
