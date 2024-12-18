import { CheckedIcon, UncheckedIcon } from "@/constants/icons";
import { View, Text } from "react-native";

type Props = {
  checked: boolean;
};

const Checkbox = ({ checked = false }: Props) => {
  return checked ? <CheckedIcon /> : <UncheckedIcon />;
};

export default Checkbox;
