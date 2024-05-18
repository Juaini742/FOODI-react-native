import { useLayoutEffect } from "react";
import { updateUser } from "@/api/secured";
import { useNavigation } from "expo-router";
import { Colors } from "@/constants/Colors";
import { rootStyle } from "@/constants/Style";
import SelectPicker from "@/components/SelectPicker";
import { Picker } from "@react-native-picker/picker";
import { zodResolver } from "@hookform/resolvers/zod";
import ButtonLoading from "@/components/ButtonLoading";
import { BioSchema, schema } from "@/interfaces/BioType";
import InputController from "@/components/InputController";
import RenderMessageError from "@/components/RenderInputError";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useToast } from "@/hooks/useToast";

function Page() {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<BioSchema>({
    resolver: zodResolver(schema),
  });
  const { showToast } = useToast();
  const navigation = useNavigation();

  const onSubmit: SubmitHandler<BioSchema> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const result = await updateUser(data);

    if (result.length === 0) {
      showToast("Error", "Failed update user");
    }

    if (result.message === "success") {
      showToast("Success", "Update was successfully");
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
    <SafeAreaView style={rootStyle.container}>
      <View style={styles.wrapper}>
        <View style={styles.content}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.form}
          >
            <View style={styles.avatar}>
              <View style={styles.pencil}>
                <MaterialCommunityIcons name="pencil" size={20} color="black" />
              </View>
            </View>

            <InputController
              name="name"
              control={control}
              schema={schema}
              placeholder="Name"
              placeholderTextColor="gray"
            />
            <RenderMessageError data={errors.name} />

            <SelectPicker
              control={control}
              name="gender"
              schema={schema}
              title="Select your gender"
              of={["Male", "Female"]}
              renderItem={(item: string, index: number) => (
                <Picker.Item key={index} label={item} value={item} />
              )}
            />
            <RenderMessageError data={errors.gender} />

            <InputController
              name="born"
              control={control}
              schema={schema}
              placeholder="Born"
              placeholderTextColor="gray"
            />
            <RenderMessageError data={errors.born} />

            <Controller
              name="phone"
              control={control}
              shouldUnregister={true}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  onBlur={onBlur}
                  value={value}
                  onChangeText={(text) => onChange(text)}
                  style={[rootStyle.input]}
                  placeholder="Phone"
                  keyboardType="numeric"
                  placeholderTextColor="gray"
                />
              )}
              rules={{
                required: "This input is required",
                validate: (value) =>
                  schema.shape.phone.safeParse(value).success,
              }}
            />
            <RenderMessageError data={errors.phone} />

            <InputController
              name="job"
              control={control}
              schema={schema}
              placeholder="Job"
              placeholderTextColor="gray"
            />
            <RenderMessageError data={errors.job} />

            <ButtonLoading
              isSubmitting={isSubmitting}
              onPress={handleSubmit(onSubmit)}
              title="Continue"
            />
          </KeyboardAvoidingView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  content: {
    width: "90%",
    marginBottom: 20,
  },
  avatar: {
    width: 170,
    height: 170,
    backgroundColor: "black",
    borderRadius: 100,
    position: "relative",
    borderWidth: 2,
    borderColor: "white",
  },
  pencil: {
    width: 30,
    height: 30,
    borderRadius: 100,
    backgroundColor: Colors.primary,
    position: "absolute",
    bottom: 0,
    right: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  pickerItem: {
    fontSize: 16,
    color: "#333", // Warna teks
    textAlign: "center", // Posisi teks
  },
});

export default Page;
