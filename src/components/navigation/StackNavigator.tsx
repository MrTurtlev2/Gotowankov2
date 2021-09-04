import {View, Text} from "react-native";
import React from "react";

const StackNavigator = ({route}) => {

const {recipe} = route.params;

    return (
        <View>
            <Text>
                {recipe?.title}
            </Text>
            <Text>
                {recipe?.description}
            </Text>
        </View>
    )
}
export default StackNavigator