export default interface DoctorFilterProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    selectedType: string;
    setSelectedType: (type: string) => void;
    selectedSpecialty: string;
    setSelectedSpecialty: (specialty: string) => void;
    uniqueTypes: string[];
    uniqueSpecialties: string[];
}