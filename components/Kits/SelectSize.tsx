import { View, Text, TouchableOpacity } from "react-native";

type Props = {
    size: string;
    setSize: (size: string) => void;
};

const SelectSize = ({ size, setSize }: Props) => {
    const sizes = ["s", "m", "l", "xl", "xxl"];

    return (
        <View style={{ gap: 6 }}>
            <Text className="text-base font-semibold font-grotesk_semibold">Choose Size</Text>
            <View style={{ gap: 12 }} className="flex-row">
                {sizes.map((item) => (
                    <TouchableOpacity
                        key={item}
                        className={`h-8 w-8 flex items-center justify-center rounded-full border-[1.15px] transition-colors duration-300 ${item === size ? "bg-[#0c0c08] border-transparent" : "bg-transparent border-secondary-main"}`}
                        onPress={() => setSize(item)}>
                        <Text className={`uppercase text-xs leading-4 ${item === size ? "text-white" : "text-[#0c0c08]"}`}>{item}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

export default SelectSize;
