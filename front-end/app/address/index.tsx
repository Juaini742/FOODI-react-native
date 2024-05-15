import {
  getDistrict,
  getProvince,
  getRegency,
  getSubDistrict,
} from "@/api/region";
import ButtonLoading from "@/components/ButtonLoading";
import InputController from "@/components/InputController";
import RenderMessageError from "@/components/RenderInputError";
import { Colors } from "@/constants/Colors";
import { rootStyle } from "@/constants/Style";
import { AddressSchema, schema } from "@/interfaces/AddressSchema";
import { RegionType } from "@/interfaces/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Picker } from "@react-native-picker/picker";
import { Link, useNavigation } from "expo-router";
import { useEffect, useLayoutEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Page() {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AddressSchema>({
    resolver: zodResolver(schema),
  });
  const navigation = useNavigation();
  const [province, setProvince] = useState<RegionType[]>([]);
  const [regency, setRegency] = useState<RegionType[]>([]);
  const [subDistrict, setSubDistrict] = useState<RegionType[]>([]);
  const [district, setDistrict] = useState<RegionType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProvince();
      setProvince(data);
    };
    fetchData();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const onSubmit: SubmitHandler<AddressSchema> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
  };

  const handleProvinceChange = (onChange: any) => {
    return async (itemValue: string) => {
      const selectedProvince: any = province.find(
        (item: RegionType) => item.name === itemValue
      );

      if (selectedProvince) {
        const regencies = await getRegency(selectedProvince.id);
        setRegency(regencies);
      }

      onChange(itemValue);
    };
  };

  const handleRegencyChange = (onChange: any) => {
    return async (itemValue: string) => {
      const selectedRegency: any = regency.find(
        (item: RegionType) => item.name === itemValue
      );

      if (selectedRegency) {
        const subDistricts = await getSubDistrict(selectedRegency.id);
        setSubDistrict(subDistricts);
      }

      onChange(itemValue);
    };
  };

  const handleSubDistrictChange = (onChange: any) => {
    return async (itemValue: string) => {
      const selectedProvince: any = subDistrict.find(
        (item: RegionType) => item.name === itemValue
      );

      if (selectedProvince) {
        const districts = await getDistrict(selectedProvince.id);
        setDistrict(districts);
      }

      onChange(itemValue);
    };
  };

  const handleDistrictChange = (onChange: any) => {
    return (itemValue: string) => onChange(itemValue);
  };

  return (
    <SafeAreaView style={rootStyle.container}>
      <View style={styles.wrapper}>
        <View style={styles.content}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.form}
          >
            <View style={styles.avatar}>
              <Image
                source={require("../../assets/images/profile.jpg")}
                style={{ width: 172, height: 170 }}
              />
            </View>
            <View>
              <Text
                style={{
                  color: "white",
                  fontSize: 18,
                  fontFamily: "sm-bold",
                }}
              >
                Angle Aulia
              </Text>
            </View>

            <Controller
              name="prov"
              control={control}
              shouldUnregister={true}
              render={({ field: { onChange, value } }) => (
                <Picker
                  selectedValue={value}
                  onValueChange={handleProvinceChange(onChange)}
                  style={[rootStyle.input]}
                  itemStyle={{ borderRadius: 10, color: "white" }}
                >
                  <Picker.Item
                    color="gray"
                    fontFamily="bold"
                    label="Your prov"
                    value=""
                  />

                  {province.map((item: any, index: number) => (
                    <Picker.Item
                      key={index}
                      label={item.name}
                      value={item.name}
                    />
                  ))}
                </Picker>
              )}
              rules={{
                required: "This input is required",
                validate: (value) => schema.shape.prov.safeParse(value).success,
              }}
            />
            <RenderMessageError data={errors.prov} />

            <Controller
              name="regency"
              control={control}
              shouldUnregister={true}
              render={({ field: { onChange, value } }) => (
                <Picker
                  selectedValue={value}
                  onValueChange={handleRegencyChange(onChange)}
                  style={[rootStyle.input]}
                  itemStyle={{ borderRadius: 10, color: "white" }}
                >
                  <Picker.Item
                    color="gray"
                    fontFamily="bold"
                    label="Your Regency"
                    value=""
                  />

                  {regency?.map((item: any, index: number) => (
                    <Picker.Item
                      key={index}
                      label={item.name}
                      value={item.name}
                    />
                  ))}
                </Picker>
              )}
              rules={{
                required: "This input is required",
                validate: (value) =>
                  schema.shape.regency.safeParse(value).success,
              }}
            />
            <RenderMessageError data={errors.regency} />

            <Controller
              name="subdistrict"
              control={control}
              shouldUnregister={true}
              render={({ field: { onChange, value } }) => (
                <Picker
                  selectedValue={value}
                  onValueChange={handleSubDistrictChange(onChange)}
                  style={[rootStyle.input]}
                  itemStyle={{ borderRadius: 10, color: "white" }}
                >
                  <Picker.Item
                    color="gray"
                    fontFamily="bold"
                    label="Your SubDistrict"
                    value=""
                  />

                  {subDistrict?.map((item: any, index: number) => (
                    <Picker.Item
                      key={index}
                      label={item.name}
                      value={item.name}
                    />
                  ))}
                </Picker>
              )}
              rules={{
                required: "This input is required",
                validate: (value) =>
                  schema.shape.subdistrict.safeParse(value).success,
              }}
            />
            <RenderMessageError data={errors.subdistrict} />

            <Controller
              name="district"
              control={control}
              shouldUnregister={true}
              render={({ field: { onChange, value } }) => (
                <Picker
                  selectedValue={value}
                  onValueChange={handleDistrictChange(onChange)}
                  style={[rootStyle.input]}
                  itemStyle={{ borderRadius: 10, color: "white" }}
                >
                  <Picker.Item
                    color="gray"
                    fontFamily="bold"
                    label="Your District"
                    value=""
                  />

                  {district?.map((item: any, index: number) => (
                    <Picker.Item
                      key={index}
                      label={item.name}
                      value={item.name}
                    />
                  ))}
                </Picker>
              )}
              rules={{
                required: "This input is required",
                validate: (value) =>
                  schema.shape.district.safeParse(value).success,
              }}
            />
            <RenderMessageError data={errors.district} />

            <InputController
              name="completeAddress"
              control={control}
              schema={schema}
              placeholder="More address information"
              placeholderTextColor="gray"
            />
            <RenderMessageError data={errors.completeAddress} />

            <ButtonLoading
              isSubmitting={isSubmitting}
              onPress={handleSubmit(onSubmit)}
              title="Go to home page"
            />

            <Link href="/home" style={{ color: "white" }}>
              go to home
            </Link>
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
    borderWidth: 2,
    borderColor: "white",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "flex-start",
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
  loadingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
});

export default Page;
