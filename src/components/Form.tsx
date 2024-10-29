import { useState } from "react";
import { Button, TextInput, View } from "react-native";

export default function FormComponent(props: any) {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <View>
            <TextInput
            placeholder={props.placeholder}
            placeholderTextColor="#A4A4A4"
            id={props.id}
            className={`form-input w-[314px] h-[55px] rounded-[10px] border-2 ${isFocused ? 'border-[#1F41BB]' : 'border-[#FFF]'} gap-2 p-6 bg-[#F1F4FF]`}
            onFocus={() => setIsFocused(true)} 
            onBlur={() => setIsFocused(false)}
            
            />
        </View>
    );
}
