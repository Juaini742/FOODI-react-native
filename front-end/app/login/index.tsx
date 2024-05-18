import { useLayoutEffect } from "react";
import { useNavigation, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { rootStyle } from "@/constants/Style";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import ButtonLoading from "@/components/ButtonLoading";
import InputController from "@/components/InputController";
import { SafeAreaView } from "react-native-safe-area-context";
import RenderMessageError from "@/components/RenderInputError";
import { LoginSchema, schema } from "@/interfaces/loginSchema";
import { login } from "@/api/public";
import { useToast } from "@/hooks/useToast";

function Page() {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchema>({
    resolver: zodResolver(schema),
  });
  const navigation = useNavigation();

  const { showToast } = useToast();

  const router = useRouter();

  const onSubmit: SubmitHandler<LoginSchema> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const result = await login(data);

    if (result === undefined) {
      showToast("Error", "Login failed, please try again");
    }

    if (result.message === "success") {
      showToast("Success", "Login was successfully");
      router.push("(tabs)");
    }
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
                source={require("../../assets/images/logo.png")}
                style={styles.img}
              />
            </View>
            <Text style={styles.text}>Welcome to our shop</Text>
            <Text style={styles.tagName}>Sign In here</Text>

            <View style={styles.form}>
              <InputController
                name="email"
                control={control}
                schema={schema}
                placeholder="Email"
                placeholderTextColor="gray"
                type="email-address"
              />

              <RenderMessageError data={errors.email} />

              <InputController
                name="password"
                control={control}
                schema={schema}
                placeholder="Password"
                placeholderTextColor="gray"
                secureTextEntry={true}
              />

              <RenderMessageError data={errors.password} />

              <ButtonLoading
                isSubmitting={isSubmitting}
                onPress={handleSubmit(onSubmit)}
                title="Sign In"
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
    width: "100%",
    height: 180,
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
