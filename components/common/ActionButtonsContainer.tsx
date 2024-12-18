import { View } from "react-native";
import { PropsWithChildren } from "react";

type Props = {
  classes?: string;
  gap?: number;
};

const ActionButtonsContainer = ({ classes = "pt-4 pb-0", gap = 0, children }: PropsWithChildren<Props>) => {
  return (
    <View style={{ gap }} className={`absolute bottom-0 left-0 w-full px-6 bg-white ${classes}`}>
      {children}
    </View>
  );
};

export default ActionButtonsContainer;
