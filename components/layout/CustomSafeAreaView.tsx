import { SafeAreaView } from "react-native-safe-area-context";
import { PropsWithChildren } from "react";
import { ScrollView } from "react-native";

const CustomSafeAreaView = ({ children, ...rest }: PropsWithChildren) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }} {...rest}>
            {children}
        </SafeAreaView>
    );
};

export default CustomSafeAreaView;
