import { View, Text, Image } from "react-native";
import Doctor from "@/interfaces/doctor";
import ButtonComponent from "../Button";

export default function DoctorComponent(props: Doctor) {
    return (
        <View className="w-[350px] p-4 bg-[#ffffff] border border-[#d1d5db] rounded-lg shadow-lg mb-4">
            <View className="flex-row items-center">
                <Image source={props.icon} className="w-[50px] h-[50px] rounded-full border-2 border-[#4A90E2] mr-4" />
                <View>
                    <Text className="text-lg font-bold text-[#1e3a8a] mb-1">{props.name}</Text>
                    <Text className="text-sm text-[#4b5563]">{props.specialty}</Text>
                    <Text className="text-sm font-bold text-[#2563eb] bg-[#e0f2fe] rounded-full px-2 py-1 mt-1">
                        {props.type}
                    </Text>
                </View>
            </View>
            <View className="flex-row justify-between mt-4">
                <View className="flex-row items-center">
                    <Text className="text-lg font-semibold text-[#22c55e]">R$ 106,50</Text>
                    <Text className="text-xs text-[#6b7280] ml-1">em até 3x</Text>
                </View>
                <ButtonComponent title="Agendar" />
            </View>
        </View>
    );
}
