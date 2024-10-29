import { Text, View } from "react-native";


export default function ButtonComponent(props: any) {

    return (
        <View className="w-[314px] h-[55px] bg-[#1F41BB] flex justify-center items-center gap-[10px] rounded-[10px]">
            <Text className="text-[#FFF] font-bold text-[20px]">{props.title}</Text>
        </View>
    );
}
