import { Text, View } from "react-native";
import { CaretLeftIcon } from "@/constants/icons";

export default function Index() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}>
            <Text className="text-red-900 font-grotesk_bold">Edit app/index.tsx to edit this screen.</Text>
            <CaretLeftIcon />
        </View>
    );
}
