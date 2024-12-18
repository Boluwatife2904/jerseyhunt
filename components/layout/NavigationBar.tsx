import { View, Text, TouchableOpacity, Dimensions } from "react-native";

import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { TabsCheckout, TabsHome, TabsProfile } from "@/constants/icons";
import { ReactElement } from "react";

const iconMaps: Record<string, ReactElement> = {
  home: <TabsHome />,
  checkout: <TabsCheckout />,
  profile: <TabsProfile />,
};

const NavigationBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  return (
    <View style={{ display: state.index === 1 ? "none" : "flex" }} className="items-center justify-center absolute bottom-10 w-full left-0 right-0">
      <View
        style={{
          gap: 28,
          shadowColor: "#c6c6c6",
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.51,
          shadowRadius: 13.16,
          elevation: 20,
        }}
        className="py-[21px] flex-row px-[27px] bg-white rounded-full max-w-auto mx-auto">
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({ type: "tabPress", target: route.key, canPreventDefault: true });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };
          const onLongPress = () => {
            navigation.emit({ type: "tabLongPress", target: route.key });
          };

          return (
            <TouchableOpacity
              style={{ gap: 6 }}
              className={`flex-row items-center rounded-full p-3 ${isFocused && "bg-secondary-main"}`}
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarButtonTestID}
              onPress={onPress}
              onLongPress={onLongPress}>
              {iconMaps[route.name]}

              {isFocused && <Text className="text-primary-main font-grotesk_medium text-[20px] pt-1 capitalize">{route.name}</Text>}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default NavigationBar;
