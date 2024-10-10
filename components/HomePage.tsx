import { View, Text} from 'react-native';

import RouteContext from '@/app/context/RouteContext';
import { useContext, useState } from 'react';

export default function HomeView(){

    const {setPath} = useContext(RouteContext)

    return(
        <View>
            <Text>HomePage</Text>
        </View>
    )
}