import { rootStyle } from "@/constants/Style";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { schema, UserSchema } from "@/interfaces/UserSchema";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Colors } from "@/constants/Colors";
import { Link, useNavigation } from "expo-router";
import { useLayoutEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import InputController from "@/components/InputController";
import RenderMessageError from "@/components/RenderInputError";
import ButtonLoading from "@/components/ButtonLoading";

function Page() {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UserSchema>({
    resolver: zodResolver(schema),
  });
  const navigation = useNavigation();

  const onSubmit: SubmitHandler<UserSchema> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerTitle: "",
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color={"white"} />
        </TouchableOpacity>
      ),
      // headerShown: false,
    });
  });

  return (
    <SafeAreaView style={[rootStyle.container]}>
      <StatusBar backgroundColor="black" />
      <View style={styles.content}>
        <View style={styles.bgImgWrapper}>
          <Image
            source={require("../../assets/images/bg-reverse.jpg")}
            style={styles.imgBg}
          />
        </View>
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.9)"]}
          style={styles.container}
        >
          <View style={styles.wrapper}>
            <View style={styles.imgWrapper}>
              <Image
                source={require("../../assets/images/sign.png")}
                style={styles.img}
              />
            </View>
            <Text style={styles.text}>Welcome to our shop</Text>
            <Text style={styles.tagName}>Sign Up here</Text>

            <View style={styles.form}>
              <InputController
                control={control}
                name="username"
                schema={schema}
                placeholder="Username"
                placeholderTextColor="gray"
              />
              <RenderMessageError data={errors.username} />

              <InputController
                control={control}
                name="email"
                schema={schema}
                placeholder="Email"
                placeholderTextColor="gray"
                type="email-address"
              />
              <RenderMessageError data={errors.email} />

              <InputController
                control={control}
                name="password"
                schema={schema}
                placeholder="Password"
                placeholderTextColor="gray"
              />
              <RenderMessageError data={errors.password} />

              <ButtonLoading
                isSubmitting={isSubmitting}
                onPress={handleSubmit(onSubmit)}
                title="Sign Up"
              />
            </View>

            <View style={styles.lineWrapper}>
              <View style={styles.lineContainer}>
                <View style={styles.line} />
                <Text style={styles.textLine}>or</Text>
                <View style={styles.line} />
              </View>
            </View>

            <View style={styles.socialWrapper}>
              <TouchableOpacity style={styles.socials}>
                <MaterialCommunityIcons
                  name="google"
                  size={25}
                  style={styles.icon}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socials}>
                <MaterialCommunityIcons
                  name="facebook"
                  size={25}
                  style={styles.icon}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socials}>
                <MaterialCommunityIcons
                  name="apple"
                  size={25}
                  style={styles.icon}
                />
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: 20 }}>
              <Text style={{ color: "white", textAlign: "center" }}>
                If you already have an account,{" "}
                <Link href="login" style={{ color: Colors.primary }}>
                  Click here to login
                </Link>
              </Text>
            </View>
          </View>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    position: "relative",
  },
  bgImgWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    position: "absolute",
  },
  imgBg: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
  },
  imgWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  img: {
    width: 190,
    height: 190,
  },
  container: {
    flex: 1,
    // backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  wrapper: {
    width: "90%",
    justifyContent: "center",
    alignContent: "center",
  },
  text: {
    color: "white",
    textAlign: "center",
    fontFamily: "primary",
    fontSize: 19,
  },
  tagName: {
    color: "white",
    fontFamily: "bold",
    textAlign: "center",
    fontSize: 22,
  },
  form: {
    width: "100%",
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  input: {
    width: "90%",
    height: 50,
    paddingVertical: 10,
    paddingHorizontal: 8,
    paddingLeft: 20,
    color: "white",
    borderRadius: 12,
    backgroundColor: "#252525",
  },
  error: {
    color: "red",
    textAlign: "left",
  },
  lineWrapper: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  lineContainer: {
    marginTop: 20,
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
  },
  line: {
    height: 1,
    flex: 1,
    borderWidth: 1,
    borderColor: "#252525",
  },
  textLine: {
    color: "white",
  },
  socialWrapper: {
    marginTop: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    flexDirection: "row",
  },
  socials: {
    paddingVertical: 18,
    paddingHorizontal: 25,
    borderRadius: 8,
    backgroundColor: "#252525",
  },
  icon: {
    color: "white",
  },
  loadingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
});

export default Page;
