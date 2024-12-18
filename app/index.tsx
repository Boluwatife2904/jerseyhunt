import { Text, TouchableOpacity, View } from "react-native";
import { CaretLeftIcon } from "@/constants/icons";
import { Link } from "expo-router";
import { SheetManager } from "react-native-actions-sheet";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Text className="text-red-900 font-grotesk_bold">Edit to edit this screen.</Text>
      <CaretLeftIcon />
      <Link href="/login">Login</Link>
      <Link href="/register">Register</Link>
      <Link href="/checkout">Checkout</Link>
      <Link href="/success">Success</Link>
      <Link href="/error">Error</Link>
      <TouchableOpacity onPress={() => SheetManager.show("authentication-sheet")}>
        <Text>Show Authentication Sheet</Text>
      </TouchableOpacity>
    </View>
  );
}
