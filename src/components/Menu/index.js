import React from 'react';
import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Code, Nav, NavItem, NavText, 
    SignOutButton, SignOutButtonText, NavInformations, Informations, SubInformations } from './styles'

export default function Menu( { translateY }) {
    return (
        <Container style={{
            opacity: translateY.interpolate({
                inputRange: [0, 150],
                outputRange: [0, 1],
            })
        }}>
            <Code>
                <QRCode
                    value="https://github.com/fla-edu"
                    size={80}
                    backgroundColor="#FFF"
                    color="#8B10AE"
                />
            </Code>
            <NavInformations>
                <Informations>Banco</Informations>
                <SubInformations> 260 - Nu Pagamentos S.A.</SubInformations>
            </NavInformations>
            <NavInformations>
                <Informations>Agência </Informations>
                <SubInformations> 0001</SubInformations>
            </NavInformations>
            <NavInformations>
                <Informations>Conta</Informations>
                <SubInformations> 999999999-9</SubInformations>
            </NavInformations>
            <Nav>
                <NavItem>
                    <Icon name="help-outline" size={20} color="#FFF"/>
                    <NavText>Me ajuda</NavText>
                    <Icon style={{paddingLeft: 250}} name="keyboard-arrow-right" size={20} color="#FFF"/>
                </NavItem>
                <NavItem>
                    <Icon name="person-outline" size={20} color="#FFF"/>
                    <NavText>Perfil</NavText>
                    <Icon style={{paddingLeft: 273}} name="keyboard-arrow-right" size={20} color="#FFF"/>
                </NavItem>
                <NavItem>
                    <Icon name="credit-card" size={20} color="#FFF"/>
                    <NavText>Configurar cartão</NavText>
                    <Icon style={{paddingLeft: 201}} name="keyboard-arrow-right" size={20} color="#FFF"/>
                </NavItem>
                <NavItem>
                    <Icon name="smartphone" size={20} color="#FFF"/>
                    <NavText>Configurações do app</NavText>
                    <Icon style={{paddingLeft: 173}} name="keyboard-arrow-right" size={20} color="#FFF"/>
                </NavItem>
            </Nav>

            <SignOutButton onPress={() => {}} >
                <SignOutButtonText>SAIR DA CONTA</SignOutButtonText>
            </SignOutButton>
        </Container>
    );
}