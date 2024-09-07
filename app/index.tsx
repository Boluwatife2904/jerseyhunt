import { Text, View } from "react-native";
import { CaretLeftIcon } from "@/constants/icons";
import { Link } from "expo-router";

export default function Index() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}>
            <Text className="text-red-900 font-grotesk_bold">Edit  to edit this screen.</Text>
            <CaretLeftIcon />
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
            <Link href="/checkout">Checkout</Link>
            <Link href="/success">Success</Link>
        </View>
    );
}
