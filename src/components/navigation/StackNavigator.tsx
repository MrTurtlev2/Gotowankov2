import {View, Text, ScrollView} from "react-native";
import React from "react";

const StackNavigator = ({route}) => {

const {recipe} = route.params;

    return (
        <ScrollView>
            <View>
            <Text>
                {recipe?.title}
            </Text>
            <Text>
                {recipe?.description}
            </Text>
            <Text>
                {recipe?.image}
            </Text>
        </View>
        </ScrollView>
    )
}
export default StackNavigator