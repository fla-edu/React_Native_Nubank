import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Menu from '~/components/Menu';
import { Container, Card, CardHeader, CardContent, CardFooter, Title, Description, Annotation } from './styles';


export default function Content() {
    return (
        <Container>
            <Menu/>
            <Card>
                <CardHeader>
                    <Icon name="attach-money" size={28} color="#666"/>
                    <Icon name="visibility-off" size={28} color="#666"/>
                </CardHeader>
                <CardContent>
                    <Title>Saldo disponível</Title>
                    <Description>R$ 1.000.000,00</Description>
                </CardContent>
                <CardFooter>
                    <Annotation>
                        Transferência de R$ 20,00 recebida de Flávio Eduardo hoje às 18:00h
                    </Annotation>
                </CardFooter>
            </Card>
        </Container>
    );
}