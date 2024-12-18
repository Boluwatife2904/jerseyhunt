import { Tabs } from "expo-router";

import NavigationBar from "@/components/layout/NavigationBar";

const MainLayout = () => {
  return (
    <Tabs tabBar={(props) => <NavigationBar {...props} />} screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="home" options={{ animation: "fade" }} />
      <Tabs.Screen name="checkout" options={{ animation: "fade", tabBarStyle: { display: "none" } }} />
      <Tabs.Screen name="profile" options={{ animation: "fade" }} />
    </Tabs>
  );
};

export default MainLayout;
