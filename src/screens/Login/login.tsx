import React from "react";
import { Text, View, Image } from "react-native"; 
import FormComponent from "@/components/Form"; 
import TextInput from "@/components/Form"; 
import ButtonComponent from "@/components/Button";
import { Link } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
import Logo from '../../assets/LogoMplus.png'; 

export default function LoginScreen() {
    return (
        <View className="container flex items-center justify-center">
            <Image source={Logo} className="w-[50px] h-[50px] mb-32" />
            <Text className="text-2xl font-bold align-left pr-16 pb-8">
                Bem-vindo ao Marque Mais{'\n'}Estamos felizes em vê-lo.
            </Text>
            <View className="form flex flex-col gap-12 justify-center items-center pb-16">
                <TextInput placeholder="Nome de usuário" id="username" />
                <TextInput placeholder="Sua Senha" id="password" />
                <ButtonComponent title="Entrar" />
                <Text className="text-[##494949] text-[16px] font-bold">
                <Link href="/register">Novo usuário? Crie sua conta já!</Link>
                </Text>
            </View>
            <View>
                <Text className="text-[#1F41BB] font-bold text-[16px] pb-8">Ou continue com</Text>
                <View className="flex flex-row gap-8 items-center justify-center">
                    <Ionicons name="logo-google" size={24} color="#000" />
                    <Ionicons name="logo-facebook" size={24} color="#000" />
                </View>
            </View>
        </View>
    );
}
