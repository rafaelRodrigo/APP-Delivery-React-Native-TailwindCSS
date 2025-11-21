import { Text, View, ScrollView } from 'react-native';
import {Header} from "../componentes/header";
import {Banner} from "../componentes/banner";
import Constants from "expo-constants";
import {Component} from "react";
import {Search} from "../componentes/search";
import {Section} from "../componentes/section";
import {TreendingFoods} from "@/src/componentes/treending";
import {Restaurants} from "@/src/componentes/restaurants";
import {RestaurantsVerticalList} from "@/src/componentes/List";


const statusBarHeight = Constants.statusBarHeight

export default function Index() {
  return (
     <ScrollView style={{flex: 1}} className={"bg-slate-200"} showsVerticalScrollIndicator={false}>

         <View className={"w-full px-4"} style={{ marginTop: statusBarHeight + 8 }}>
            <Header />
            <Banner />
            <Search />
        </View>
         <Section
            name={"Comidas em alta"}
            label={"Veja Mais"}
            action={ () => console.log("Clicou no veja mais") }
            size={"text-2xl"}
         />

         <TreendingFoods/>

         <Section
             name={"Famosos no Food"}
             label={"Veja Todos"}
             action={ () => console.log("Clicou no Famosos") }
             size={"text-xl"}
         />

         <Restaurants />

         <Section
             name={"Restaurantes"}
             label={"Veja Todos"}
             action={ () => console.log("Clicou no Restaurante") }
             size={"text-xl"}
         />

     <RestaurantsVerticalList />

     </ScrollView>

  );
}
