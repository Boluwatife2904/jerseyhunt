import { View, Text, ScrollView, Image, ImageURISource } from "react-native";

const leagues: Record<string, ImageURISource> = {
    npfl: require("@/assets/images/npfl.png"),
    pl: require("@/assets/images/pl.png"),
    bundesliga: require("@/assets/images/bundesliga.png"),
    seriea: require("@/assets/images/seriea.png"),
    laliga: require("@/assets/images/laliga.png"),
    ligue1: require("@/assets/images/ligue1.png"),
};

const TopLeagues = () => {
    return (
        <View style={{ gap: 14 }}>
            <Text className="text-primary-main text-lg font-grotesk_medium">Top Leagues</Text>
            <ScrollView contentContainerStyle={{ gap: 14 }} horizontal>
                {Object.keys(leagues).map((league) => (
                    <View key={league}>
                        <Image source={leagues[league]} style={{ height: 52, width: 52 }} resizeMode="cover" className="rounded-full" />
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

export default TopLeagues;
