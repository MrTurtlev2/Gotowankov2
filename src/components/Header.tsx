import {Text, TouchableOpacity, View} from "react-native";
// @ts-ignore
import styled from "styled-components";
import React from "react";

const Header = () => {
    return (
        <HeaderWrapper>
            <Text>wefwef</Text>
        </HeaderWrapper>
    );
}
export default Header;

const HeaderWrapper = styled(View)`
  height: 80px;
  background-color: #50C878;
  display: flex;
  align-items: center;
  justify-content: center;
`;