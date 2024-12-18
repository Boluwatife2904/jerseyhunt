import { View, Text, TouchableOpacity } from "react-native";

import { BellIcon, MenuIcon, SearchIcon } from "@/constants/icons";

const Header = () => {
  return (
    <View className="px-[18.5px] py-[26px] border-b-[0.5px] border-[#E6E6E6] flex-row justify-between items-center">
      <View style={{ gap: 12 }} className="flex-row items-center">
        <TouchableOpacity className="h-[34px] w-[34px] items-center justify-center">
          <MenuIcon />
        </TouchableOpacity>
        <Text className="font-grotesk_semibold text-[24px] leading-8 text-primary-main">Home</Text>
      </View>
      <View style={{ gap: 12 }} className="flex-row">
        <TouchableOpacity className="h-[34px] w-[34px] items-center justify-center">
          <BellIcon />
        </TouchableOpacity>
        <TouchableOpacity className="h-[34px] w-[34px] items-center justify-center">
          <SearchIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
