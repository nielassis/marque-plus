import { Text, TouchableOpacity } from "react-native";

export default function ButtonComponent(props: any) {
    return (
        <TouchableOpacity className="button-box flex justify-center items-center gap-[10px] bg-[#1F41BB] rounded-[10px] py-2 px-4">
            <Text className="text-[#FFF] font-bold text-[20px]">{props.title}</Text>
        </TouchableOpacity>
    );
}
