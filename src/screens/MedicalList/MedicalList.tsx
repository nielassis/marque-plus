import { FlatList, Text, View, ScrollView, Image } from "react-native";
import { useState } from "react";
import { DoctorListArray } from "@/constants/data";
import Doctor from "@/interfaces/doctor";
import icon from "@/constants/icon";
import DoctorComponent from "@/components/Doctor/doctor";
import DoctorFilter from "@/components/Doctor/DoctorFilter";

export default function MedicalList() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedType, setSelectedType] = useState("Todos");
    const [selectedSpecialty, setSelectedSpecialty] = useState("Todos");

    const uniqueTypes = ["Todos", "Teleconsultoria", "Presencial"];
    const uniqueSpecialties = Array.from(new Set(DoctorListArray.map(doctor => doctor.specialty)));

    const filteredDoctors = DoctorListArray.filter((doctor: Doctor) => {
        const matchesSearch = doctor.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesType = selectedType === "Todos" || doctor.type === selectedType;
        const matchesSpecialty = selectedSpecialty === "Todos" || doctor.specialty === selectedSpecialty;

        return matchesSearch && matchesType && matchesSpecialty;
    });

    return (
        <ScrollView className="flex flex-col p-4">
            <Text className="text-2xl text-left font-bold text-[#1c1c1c] mb-4 mt-10">
                A hora de cuidar de você é agora!{'\n'}<Text className="text-[#1F41BB]">Marque uma consulta</Text>
            </Text>

            <DoctorFilter
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                selectedType={selectedType}
                setSelectedType={setSelectedType}
                selectedSpecialty={selectedSpecialty}
                setSelectedSpecialty={setSelectedSpecialty}
                uniqueTypes={uniqueTypes}
                uniqueSpecialties={uniqueSpecialties}
            />

            <Text className="text-gray-600 pb-8">Encontre um doutor</Text>

            {filteredDoctors.length > 0 ? (
                <View className="items-center w-full">
                    <FlatList
                        data={filteredDoctors}
                        renderItem={({ item }: { item: Doctor }) => (
                            <View className="w-11/12">
                                <DoctorComponent
                                    name={item.name}
                                    specialty={item.specialty}
                                    type={item.type}
                                    icon={item.icon === "M" ? icon.male : icon.female}
                                />
                            </View>
                        )}
                        keyExtractor={(item: Doctor) => item.id_doctor.toString()}
                        scrollEnabled={false}
                    />
                </View>
            ) : (
                <View className="flex-1 items-center justify-center gap-8">
                <Text className="text-center text-gray-500">
                    Nenhum médico encontrado.
                </Text>
                <Image source={require("../../assets/LogoMplus.png")} className="w-[50px] h-[50px]"/>
                </View>
            )}
        </ScrollView>
    );
}
