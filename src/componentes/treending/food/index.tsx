import {useState, useEffect} from 'react'
import {FlatList} from 'react-native'

export  function TreendingFoods(){
    const  [foods, setFoods] = useState([])
    return (
        <FlatList
            data={foods}
            renderItem={ ({ item }) => }
        />
    )

}