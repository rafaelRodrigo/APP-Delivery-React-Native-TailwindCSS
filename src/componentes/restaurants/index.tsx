import {View, TextInput} from 'react-native'
import { Feather} from '@expo/vector-icons'


export  function Restaurants(){
    return (
        <View >
        <Feather name={"search"} size={24} color={"#64748b"}/>
    <TextInput
    placeholder={"Procure sua comida"}
    className={"w-full flex-1 h-full"}
    />
    </View>
)

}