import {View} from 'react-native'
import {useState, useEffect} from 'react'
import {RestaurantItem} from './item'

export interface RestaurantsProps{
    id: string;
    name: string;
    image: string;
}

export  function RestaurantsVerticalList(){
    const [restaurants, setRestaurants] = useState<RestaurantsProps[]>([])

    useEffect(() => {
        async  function getFoods(){
            const response = await fetch("http://172.27.112.1:3000/restaurants")
            const data = await response.json()
            setRestaurants(data);
        }

        getFoods();

    }, []);

    return (
        <View className="px-4 mb-15">
            {restaurants.map(item => (
                <View className="mb-4" key={item.id}>
                    <RestaurantItem item={item} />
                </View>
            ))}
        </View>

    )

}