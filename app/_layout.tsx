import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded] = useFonts({
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
            <Stack>
                <Stack.Screen name="(auth)" options={{ headerShown: false }} />
                <Stack.Screen name="index" options={{ headerShown: false }} />
            </Stack>
        </>
    );
}
