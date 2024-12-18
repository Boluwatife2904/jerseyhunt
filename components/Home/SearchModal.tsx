import { View, Text, Modal, KeyboardAvoidingView, TextInput, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { CloseCircleIcon } from "@/constants/icons";

interface Props {
  isActive: boolean;
  onClose: () => void;
}

const SearchModal = (props: Props) => {
  const { isActive = false, onClose } = props;

  const { top } = useSafeAreaInsets();

  return (
    <Modal visible={isActive} transparent animationType="fade" statusBarTranslucent onRequestClose={onClose}>
      <KeyboardAvoidingView style={{ paddingTop: top + 86, backgroundColor: "rgba(0,0,0,0.35)" }} className="items-center flex-1">
        <View className="w-full max-w-[90%]">
          <TextInput
            textAlignVertical="top"
            textAlign="left"
            className="bg-white rounded-full font-grotesk h-[70px] px-[22px] w-full placeholder:text-white-500 text-[16px] text-[#0c0c08]"
            placeholder="Search for your jersey"
            placeholderTextColor="#9C9C9C"
          />
          <TouchableOpacity className="absolute right-5 bg-white top-[15px] p-2" onPress={onClose}>
            <CloseCircleIcon />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default SearchModal;
