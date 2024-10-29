import { FlatList, Text, View } from "react-native";
import { DoctorListArray } from "@/constants/data";
import Doctor from "@/interfaces/doctor";

export default function MedicalList() {
    return (
    <View>
        <FlatList 
        data={DoctorListArray}
        renderItem={({item}: {item: Doctor}) => 
        <Text>{item.name}</Text>
    }
        keyExtractor={(item: Doctor) => item.id_doctor.toString()}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        />


    </View>
);
}