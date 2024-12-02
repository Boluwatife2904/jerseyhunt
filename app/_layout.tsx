import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { StatusBar } from "react-native";
import "react-native-reanimated";
import { SheetProvider } from "react-native-actions-sheet";
import "@/components/sheets";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded] = useFonts({
        GroteskLight: require("../assets/fonts/GroteskLight.otf"),
        Grotesk: require("../assets/fonts/Grotesk.otf"),
        GroteskMedium: require("../assets/fonts/GroteskMedium.otf"),
        GroteskSemibold: require("../assets/fonts/GroteskSemibold.otf"),
        GroteskBold: require("../assets/fonts/GroteskBold.otf"),
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        <>
            <SheetProvider>
                <Stack initialRouteName="(tabs)">
                    <Stack.Screen name="(auth)" options={{ headerShown: false }} />
                    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                    <Stack.Screen name="(shipping)" options={{ headerShown: false }} />
                    <Stack.Screen name="index" options={{ headerShown: false }} />
                </Stack>
                <StatusBar barStyle={"dark-content"} />
            </SheetProvider>
        </>
    );
}
