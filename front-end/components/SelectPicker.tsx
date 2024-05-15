import { rootStyle } from "@/constants/Style";
import { Picker } from "@react-native-picker/picker";
import { Controller } from "react-hook-form";

type Props = {
  control: any;
  schema: any;
  name: string;
  of?: any[] | undefined;
  title: string;
  renderItem: any;
};

function SelectPicker({ name, control, schema, title, of, renderItem }: Props) {
  return (
    <Controller
      name={name}
      control={control}
      shouldUnregister={true}
      render={({ field: { onChange, value } }) => (
        <Picker
          selectedValue={value}
          onValueChange={(itemValue: string) => onChange(itemValue)}
          style={[rootStyle.input]}
          itemStyle={{ borderRadius: 10, color: "white" }}
        >
          <Picker.Item color="gray" fontFamily="bold" label={title} value="" />
          {of &&
            of.length > 0 &&
            of.map((item, index) => renderItem(item, index))}
        </Picker>
      )}
      rules={{
        required: "This input is required",
        validate: (value) => schema.shape.gender.safeParse(value).success,
      }}
    />
  );
}

export default SelectPicker;
