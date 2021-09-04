import React, {useEffect} from "react";
// @ts-ignore
import styled from "styled-components";
import {View, Text, SafeAreaView, FlatList} from "react-native";
import Header from "../components/Header";
import ListItem from "../components/ListItem";
import {useDispatch, useSelector} from "react-redux";
import {loadRecipes} from "../redux/recipeReducer";

const RecipePage = () => {

    const dispatch = useDispatch();
    const foodItems = useSelector(state => state.recipes.recipes)

    useEffect(() => {
        dispatch(loadRecipes())
    });

        return (
        <Save>
            <Header />
        <RecipePageWrapper>

            <List
                data={foodItems}
                showsVerticalScrollIndicator={false}
                // keyExtractor={({item}) => item.id}
                renderItem={({ item }) => (
                <ListItem
                    title={item.title}
                    item={item}
                    description={item.description}
                />
                )}
            />
        </RecipePageWrapper>
        </Save>
    );
}
const Save = styled(SafeAreaView)`
  flex: 1;
  display: flex;
`;

const List = styled(FlatList)`
  padding-top: 20px;
`;

const RecipePageWrapper = styled(View)`
  min-height: 650px;
  padding: 0 20px 80px 20px;
  background-color: #E8E8E8;
`;

export default RecipePage;