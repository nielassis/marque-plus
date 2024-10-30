import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native";
import { useState } from "react";
import Icon from 'react-native-vector-icons/MaterialIcons';
import ReactNativeModal from "react-native-modal";
import DoctorFilterProps from "@/interfaces/filter";

export default function DoctorFilter({
    searchQuery,
    setSearchQuery,
    selectedType,
    setSelectedType,
    selectedSpecialty,
    setSelectedSpecialty,
    uniqueTypes,
    uniqueSpecialties,
}: DoctorFilterProps) {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const clearFilters = () => {
        setSearchQuery("");
        setSelectedType("Todos");
        setSelectedSpecialty("Todos");
    };

    return (
        <View className="mb-4 p-4 bg-white shadow-md rounded-lg">
            {/* Campo de pesquisa */}
            <TextInput
                placeholder="Pesquise por nome do médico..."
                value={searchQuery}
                onChangeText={setSearchQuery}
                className="border border-gray-300 rounded-lg p-3 mb-4 text-black"
                placeholderTextColor="#999"
            />

            {/* Filtro por Tipo */}
            <Text className="text-gray-700 mb-2">Filtrar por Tipo:</Text>
            <View className="flex-row flex-wrap mb-4">
                {uniqueTypes.map((type) => (
                    <TouchableOpacity
                        key={type}
                        onPress={() => setSelectedType(type)}
                        className={`px-3 py-2 rounded-lg mr-2 mb-2 ${
                            selectedType === type
                                ? 'bg-[#1F41BB] text-white'
                                : 'bg-gray-200 text-gray-700'
                        }`}
                    >
                        <Text className={selectedType === type ? "text-white" : "text-gray-700"}>
                            {type}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Filtro por Especialidade */}
            <Text className="text-gray-700 mb-2">Filtrar por Especialidade:</Text>
            <View className="flex-row flex-wrap">
                {uniqueSpecialties.slice(0, 4).map((specialty) => (
                    <TouchableOpacity
                        key={specialty}
                        onPress={() => setSelectedSpecialty(specialty)}
                        className={`px-3 py-2 flex-row items-center rounded-lg mr-2 mb-2 ${
                            selectedSpecialty === specialty
                                ? 'bg-[#1F41BB] text-white'
                                : 'bg-gray-200 text-gray-700'
                        }`}
                    >
                        <Icon
                            name="local-hospital"
                            size={16}
                            color={selectedSpecialty === specialty ? "#fff" : "#333"}
                            style={{ marginRight: 8 }}
                        />
                        <Text className={selectedSpecialty === specialty ? "text-white" : "text-gray-700"}>
                            {specialty}
                        </Text>
                    </TouchableOpacity>
                ))}

                {/* Botão para ver mais especialidades */}
                <TouchableOpacity
                    onPress={toggleModal}
                    className="px-3 py-2 rounded-lg bg-gray-200 text-gray-700 mr-2 mb-2"
                >
                    <Text className="text-gray-700">Mais...</Text>
                </TouchableOpacity>
            </View>

            {/* Modal para exibir todas as especialidades */}
            <ReactNativeModal isVisible={isModalVisible} onBackdropPress={toggleModal}>
                <View className="bg-white p-4 rounded-lg max-h-80">
                    <Text className="text-gray-700 text-lg font-bold mb-4">Todas as Especialidades</Text>
                    <FlatList
                        data={uniqueSpecialties.sort()}
                        keyExtractor={(item) => item}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() => {
                                    setSelectedSpecialty(item);
                                    toggleModal();
                                }}
                                className={`px-3 py-2 flex-row items-center rounded-lg mb-2 ${
                                    selectedSpecialty === item
                                        ? 'bg-[#1F41BB] text-white'
                                        : 'bg-gray-200 text-gray-700'
                                }`}
                            >
                                <Icon
                                    name="local-hospital"
                                    size={16}
                                    color={selectedSpecialty === item ? "#fff" : "#333"}
                                    style={{ marginRight: 8 }}
                                />
                                <Text className={selectedSpecialty === item ? "text-white" : "text-gray-700"}>
                                    {item}
                                </Text>
                            </TouchableOpacity>
                        )}
                    />
                    <TouchableOpacity onPress={toggleModal} className="mt-4">
                        <Text className="text-center text-red-500">Fechar</Text>
                    </TouchableOpacity>
                </View>
            </ReactNativeModal>

            {/* Botão para limpar filtros */}
            <TouchableOpacity onPress={clearFilters} className="mt-4 px-3 py-2 rounded-lg border-2 border-dotted border-gray-600">
                <Text className="text-[#1F41BB] font-semibold text-center">Limpar Filtros</Text>
            </TouchableOpacity>
        </View>
    );
}
