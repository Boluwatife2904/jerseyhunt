import { View, ScrollView } from "react-native";
import { useState } from "react";

import CustomSafeAreaView from "@/components/layout/CustomSafeAreaView";

import { kits } from "@/constants/data";
import { KitTag } from "@/types/Kits";

import TopLeagues from "@/components/Home/TopLeagues";
import HomeHeader from "@/components/Home/Header";
import KitsView from "@/components/Home/KitsView";
import FeaturedKit from "@/components/Home/Featured";
import SearchModal from "@/components/Home/SearchModal";

const getKitsByTag = (tag: KitTag) => kits.filter((kit) => kit.tag === tag);

const HomeScreen = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <CustomSafeAreaView>
      <HomeHeader onSearchPress={() => setShowSearch(true)} />
      <ScrollView className="px-6 py-[14px] bg-white" contentContainerStyle={{ gap: 34, flexGrow: 1, paddingBottom: 28 }} showsVerticalScrollIndicator={false}>
        <View style={{ gap: 18 }}>
          <TopLeagues />
          <FeaturedKit kit={getKitsByTag("featured")[0]} />
        </View>
        <View style={{ gap: 28 }}>
          <KitsView title="New Kits" kits={getKitsByTag("new")} />
          <KitsView title="Euro 2024 Kits" kits={getKitsByTag("euro")} itemsPerRow={4} />
          <KitsView title="Retro Kits" kits={getKitsByTag("retro")} />
        </View>
      </ScrollView>
      <SearchModal isActive={showSearch} onClose={() => setShowSearch(false)} />
    </CustomSafeAreaView>
  );
};

export default HomeScreen;
