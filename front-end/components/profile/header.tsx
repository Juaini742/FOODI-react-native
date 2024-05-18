import { Colors } from "@/constants/Colors";
import { useAddress } from "@/hooks/useAddress";
import { useUser } from "@/hooks/useUser";
import { Link } from "expo-router";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

function ProfileHeader() {
  const { user } = useUser();
  const { address } = useAddress();

  return (
    <View style={{ marginTop: 20 }}>
      <ImageBackground
        source={require("../../assets/images/avatarbg.jpg")}
        style={styles.bgContainer}
      >
        <View
          style={{
            gap: 15,
            position: "absolute",
            bottom: -155,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={styles.avatar}>
            <Image
              source={require("../../assets/images/profile.jpg")}
              style={{ width: 172, height: 170 }}
            />
          </View>
          <View
            style={{
              backgroundColor: Colors.semiDark,
              paddingHorizontal: 15,
              paddingVertical: 10,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 22,
                fontFamily: "bold",
                lineHeight: 25,
                textAlign: "center",
              }}
            >
              {user?.username}
            </Text>
            <Text
              style={{ color: "#a7a5a5", fontSize: 15, textAlign: "center" }}
            >
              {user?.email}
            </Text>
          </View>
        </View>
      </ImageBackground>

      <View style={{ paddingHorizontal: 10, marginTop: 10 }}>
        <Link
          href={"/biodata"}
          style={{
            color: "white",
            fontSize: 15,
            marginTop: 20,
            borderBottomWidth: 1,
            borderColor: "white",
            paddingBottom: 4,
            width: 90,
          }}
        >
          Update User
        </Link>

        <View style={styles.bioContainer}>
          <View style={styles.bioItem}>
            <Text style={{ color: "#a7a5a5", fontSize: 15 }}>Gender:</Text>
            <Text style={{ color: "#a7a5a5", fontSize: 15 }}>
              {user?.gender}
            </Text>
          </View>
          <View style={styles.bioItem}>
            <Text style={{ color: "#a7a5a5", fontSize: 15 }}>Born:</Text>
            <Text style={{ color: "#a7a5a5", fontSize: 15 }}>{user?.born}</Text>
          </View>
          <View style={styles.bioItem}>
            <Text style={{ color: "#a7a5a5", fontSize: 15 }}>Phone:</Text>
            <Text style={{ color: "#a7a5a5", fontSize: 15 }}>
              {user?.phone}
            </Text>
          </View>
          <View style={styles.bioItem}>
            <Text style={{ color: "#a7a5a5", fontSize: 15 }}>Job:</Text>
            <Text style={{ color: "#a7a5a5", fontSize: 15 }}>{user?.job}</Text>
          </View>
        </View>

        <Link
          href={"/address"}
          style={{
            color: "white",
            fontSize: 15,
            marginTop: 20,
            borderBottomWidth: 1,
            borderColor: "white",
            paddingBottom: 4,
            width: 110,
          }}
        >
          Update Address
        </Link>

        <View style={styles.bioContainer}>
          <View style={styles.bioItem}>
            <Text style={{ color: "#a7a5a5", fontSize: 15 }}>Province:</Text>
            <Text style={{ color: "#a7a5a5", fontSize: 15 }}>
              {address?.prov}
            </Text>
          </View>
          <View style={styles.bioItem}>
            <Text style={{ color: "#a7a5a5", fontSize: 15 }}>Regency:</Text>
            <Text style={{ color: "#a7a5a5", fontSize: 15 }}>
              {address?.regency}
            </Text>
          </View>
          <View style={styles.bioItem}>
            <Text style={{ color: "#a7a5a5", fontSize: 15 }}>Subdistrict:</Text>
            <Text style={{ color: "#a7a5a5", fontSize: 15 }}>
              {address?.subdistrict}
            </Text>
          </View>
          <View style={styles.bioItem}>
            <Text style={{ color: "#a7a5a5", fontSize: 15 }}>District:</Text>
            <Text style={{ color: "#a7a5a5", fontSize: 15 }}>
              {address?.district}
            </Text>
          </View>
          <View style={styles.bioItem}>
            <Text style={{ color: "#a7a5a5", fontSize: 15 }}>More:</Text>
            <Text style={{ color: "#a7a5a5", fontSize: 15 }}>
              {address?.completeAddress}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bgContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    height: 230,
    marginBottom: 100,
  },
  avatar: {
    width: 160,
    height: 160,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "white",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  bioContainer: {
    marginTop: 10,
    gap: 7,
  },
  bioItem: {
    backgroundColor: Colors.semiDark,
    paddingVertical: 10,
    borderRadius: 8,
    paddingLeft: 9,
    flexDirection: "row",
    gap: 10,
  },
});

export default ProfileHeader;
