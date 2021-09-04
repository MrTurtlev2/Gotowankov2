import {View, Text, Image, TouchableOpacity} from "react-native";
import styled from "styled-components";
import React, {FunctionComponent, useEffect, useState} from "react";
import Favourite from "../images/heartIcon.png";
import FoodIcon from '../images/testFood.jpg';
import ListItemInterface from "../interfaces/list-item.interface";
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const ListItem:FunctionComponent<ListItemInterface> = ({item, title,description}) => {

    const [isLiked, setIsLiked] = useState(false);
    const navigation = useNavigation();

    let itemToSave = JSON.stringify(item);

    const saveItem = async () => {
        if (!isLiked) {
            setIsLiked(true)
            try {
                await AsyncStorage.setItem('key', itemToSave);
                console.log(itemToSave);
            } catch (addingError) {
                console.log(addingError);
            }
        }else {
            setIsLiked(false)
            try {
                await AsyncStorage.removeItem('key');
            }
            catch (removingError) {
                console.log(removingError);
            }

        }
    }



    return (
        <TouchableOpacity onPress={()=>navigation.navigate('StackNavigator', {recipe: item})}>
            <ItemWrapper>
                <ItemTopWrapper>
                    <FoodImageWrapper>
                        <FoodImage source={FoodIcon} />
                    </FoodImageWrapper>
                </ItemTopWrapper>
                <ItemBottomWrapper>
                    <ItemTitle>{title}</ItemTitle>
                    <IconWrapper>
                        <TouchableOpacity onPress={()=>saveItem()}>
                        <LikeIcon
                            isLiked={isLiked}
                            style={{
                                tintColor: (isLiked ? 'red' : 'pink')
                            }}

                            source={Favourite} />
                        </TouchableOpacity>
                    </IconWrapper>
                </ItemBottomWrapper>
            </ItemWrapper>
        </TouchableOpacity>
    );
}
export default ListItem

const ItemWrapper = styled(View)`
  width: 100%;
  border-radius: 8px;
  border: 1px solid #D0D0D0;
  margin-bottom: 30px;
`;
const ItemTopWrapper = styled(View)`
  
`;
const ItemBottomWrapper = styled(View)`
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const ItemTitle = styled(Text)`
  text-transform: lowercase;
`;

const IconWrapper = styled(View)`
  padding: 5px;
  border-radius: 8px;
  border: 1px solid #D0D0D0;
`;

const LikeIcon = styled(Image)`
  width: 20px;
  height: 20px;
`;
const FoodImage = styled(Image)`
  width: 100%;
  overflow: hidden;
  height: 120px;
`;
const FoodImageWrapper = styled(View)`
  background-color: transparent;
  overflow: hidden;
`;