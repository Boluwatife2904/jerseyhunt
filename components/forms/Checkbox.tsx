import { CheckedIcon, UncheckedIcon } from "@/constants/icons";

type Props = {
  checked: boolean;
  color?: string;
};

const Checkbox = ({ checked = false, color = "#0C0C08" }: Props) => {
  return checked ? <CheckedIcon /> : <UncheckedIcon color={color} />;
};

export default Checkbox;
