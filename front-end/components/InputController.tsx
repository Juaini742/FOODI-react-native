import { rootStyle } from "@/constants/Style";
import { Controller } from "react-hook-form";
import { TextInput } from "react-native";

type KeyboardType =
  | "default"
  | "email-address"
  | "numeric"
  | "phone-pad"
  | "ascii-capable"
  | "numbers-and-punctuation"
  | "url"
  | "number-pad"
  | "name-phone-pad"
  | "decimal-pad"
  | "twitter"
  | "web-search"
  | undefined;

type Props = {
  control: any;
  schema: any;
  name: string;
  type?: KeyboardType;
  placeholder?: string;
  placeholderTextColor?: string;
  secureTextEntry?: boolean;
};

function InputController({
  control,
  schema,
  name,
  placeholder,
  placeholderTextColor,
  secureTextEntry,
  type,
}: Props) {
  return (
    <Controller
      name={name}
      control={control}
      shouldUnregister={true}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          onBlur={onBlur}
          value={value}
          onChangeText={(text) => onChange(text)}
          style={[rootStyle.input]}
          placeholder={placeholder}
          keyboardType={type}
          placeholderTextColor={placeholderTextColor}
          secureTextEntry={secureTextEntry}
        />
      )}
      rules={{
        required: "This input is required",
        validate: (value) => schema.shape.phone.safeParse(value).success,
      }}
    />
  );
}

export default InputController;
