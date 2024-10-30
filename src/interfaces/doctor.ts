import { ImageSourcePropType } from "react-native"

export default interface Doctor {
    id_doctor?: number,
    name: string,
    specialty: string
    type: string
    icon: any
}