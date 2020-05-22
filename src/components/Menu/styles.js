import { StyleSheet, Animated } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Animated.ScrollView)`
    margin: -80px 30px 0 30px;
`;

export const Code = styled.View`
    background: #FFF;
    padding: 10px;
    align-self: center;
    margin-bottom: 2px;
`;

export const Nav = styled.View`
    margin-top: 30px;
    align-self: stretch;
    border-top-width: ${StyleSheet.hairlineWidth}px;
    border-top-color: rgba(255, 255, 255, 0.8);
`;

export const NavItem = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 12px 0;
    border-bottom-width: ${StyleSheet.hairlineWidth}px;
    border-bottom-color: rgba(255, 255, 255, 0.8);
`;

export const NavText = styled.Text`
    font-size: 15px;
    color: #FFF;
    margin-left: 20px;
`;

export const SignOutButton = styled.TouchableOpacity`
    border-width: ${StyleSheet.hairlineWidth}px;
    border-color: rgba(255, 255, 255, 0.8);
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    padding: 12px;
    margin-top: 15px;
    align-self: stretch;
`;

export const SignOutButtonText = styled.Text`
    font-size: 13px;
    color: #FFF;
    font-weight: bold;
`;

export const NavInformations = styled.View`
    flex-direction: row;
    justify-content: center;
    padding: 2px 0;
`;

export const Informations = styled.Text`
    font-size: 13px;
    color: #FFF;
    align-self: center;
`;

export const SubInformations = styled.Text`
    font-size: 13px;
    color: #FFF;
    font-weight: bold;
`;